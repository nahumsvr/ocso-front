"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
    icon: React.ReactNode;
    path: string;
}

const NavItem = ({ icon, path }: NavItemProps) => {
    const pathname = usePathname();
    return (
        <Link href={path} className={`${pathname === path ? "bg-yellow-400" : ""} p-2 w-10/12 rounded-xl flex justify-center transition-colors hover:not-[.bg-yellow-400]:bg-neutral-200 py-4`} style={{ transitionDuration: "300ms" }}>
            {icon}
        </Link>
    )
}

export default NavItem