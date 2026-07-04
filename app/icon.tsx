import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

async function loadProfileImage() {
    const imagePath = path.join(process.cwd(), "public/assets/images/MY images/ps-bandarigoda-profile-001.png");
    const buffer = await readFile(imagePath);
    return `data:image/png;base64,${buffer.toString("base64")}`;
}

export default async function Icon() {
    const src = await loadProfileImage();

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#fafaf9",
                }}
            >
                <img
                    src={src}
                    alt=""
                    width={48}
                    height={48}
                    style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                        objectPosition: "top center",
                    }}
                />
            </div>
        ),
        { ...size }
    );
}
