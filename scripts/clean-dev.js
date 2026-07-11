const { execSync } = require("node:child_process");
const { rmSync } = require("node:fs");
const path = require("node:path");

const projectRoot = path.resolve(__dirname, "..");

function killDevServer() {
    if (process.platform === "win32") {
        try {
            execSync(
                'powershell -NoProfile -Command "Get-NetTCPConnection -LocalPort 3030 -ErrorAction SilentlyContinue | ForEach-Object { if ($_.OwningProcess -gt 0) { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue } }"',
                { stdio: "ignore" },
            );
        } catch {
            // Port may already be free.
        }

        try {
            const escapedRoot = projectRoot.replace(/\\/g, "\\\\");
            execSync(
                `powershell -NoProfile -Command "Get-CimInstance Win32_Process -Filter \\"Name='node.exe'\\" | Where-Object { $_.CommandLine -like '*${escapedRoot}*' -and $_.CommandLine -like '*next dev*' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }"`,
                { stdio: "ignore" },
            );
        } catch {
            // No matching process.
        }
        return;
    }

    try {
        execSync("lsof -ti :3030 | xargs kill -9", { stdio: "ignore" });
    } catch {
        // Port may already be free.
    }
}

killDevServer();
rmSync(path.join(projectRoot, ".next"), { recursive: true, force: true });
console.log("Dev cache cleared (.next removed).");
