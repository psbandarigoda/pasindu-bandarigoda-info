import type { Metadata } from "next";
import { AdminDashboard } from "@/components/AdminDashboard";
import { isAuthenticated } from "@/lib/auth";
import "@/styles/admin.css";

export const metadata: Metadata = {
    title: "Inquiries Dashboard",
    robots: { index: false, follow: false },
};

export default async function AdminPage() {
    const authenticated = await isAuthenticated();

    return (
        <div className="admin-shell">
            <AdminDashboard initialAuthenticated={authenticated} />
        </div>
    );
}
