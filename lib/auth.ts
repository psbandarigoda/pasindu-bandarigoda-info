import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const COOKIE_NAME = "admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

const ADMIN_USERNAME = "root";
const ADMIN_PASSWORD = "PS#root";

function getSecret() {
    const secret = process.env.AUTH_SECRET ?? "pasindu-admin-session-secret";
    return new TextEncoder().encode(secret);
}

export async function createSessionToken(username: string) {
    return new SignJWT({ username, role: "admin" })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(`${SESSION_MAX_AGE}s`)
        .sign(getSecret());
}

export async function verifySessionToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, getSecret());
        if (payload.username !== ADMIN_USERNAME || payload.role !== "admin") {
            return false;
        }
        return true;
    } catch {
        return false;
    }
}

export function verifyAdminCredentials(username: string, password: string) {
    return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

export async function setSessionCookie() {
    const token = await createSessionToken(ADMIN_USERNAME);
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
