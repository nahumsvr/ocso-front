"use client";
import { usePathname } from "next/navigation";
import Header from "./_components/Header";
import SideBar from "./_components/_sidebar/Sidebar";

export default function DashboardLayout({ children, locations }: { children: React.ReactNode, locations: React.ReactNode }) {
    const path = usePathname();
    return (
        <>
            <div className="w-screen h-screen bg-neutral-50">
                <Header />
                <div className="flex flex-row">
                    <SideBar />
                    {children}
                    {path === "/dashboard" && locations}
                </div>
            </div>
        </>
    )
}