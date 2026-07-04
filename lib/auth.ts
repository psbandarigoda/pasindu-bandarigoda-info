import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { OWNER_EMAIL } from "./site";

const COOKIE_NAME = "admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function getSecret() {
    const secret = process.env.AUTH_SECRET;
    if (!secret) {
        throw new Error("AUTH_SECRET is not configured");
    }
    return new TextEncoder().encode(secret);
}

export async function createSessionToken() {
    return new SignJWT({ email: OWNER_EMAIL, role: "admin" })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(`${SESSION_MAX_AGE}s`)
        .sign(getSecret());
}

export async function verifySessionToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, getSecret());
        if (payload.email !== OWNER_EMAIL || payload.role !== "admin") {
            return false;
        }
        return true;
    } catch {
        return false;
    }
}

export function verifyAdminPassword(password: string) {
    const expected = process.env.ADMIN_PASSWORD;
    if (!expected) {
        throw new Error("ADMIN_PASSWORD is not configured");
    }
    return password === expected;
}

export async function setSessionCookie() {
    const token = await createSessionToken();
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: SESSION_MAX_AGE,
    });
}

export async function clearSessionCookie() {
    const cookieStore = await cookies();
    cookieStore.delete(COOKIE_NAME);
}

export async function isAuthenticated() {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token) {
        return false;
    }
    return verifySessionToken(token);
}

export { COOKIE_NAME };
