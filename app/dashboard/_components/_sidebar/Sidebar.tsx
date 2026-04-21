"use client";

import { LuBox, LuStore, LuTruck, LuUser, LuUsers } from "react-icons/lu";
import { House } from '@gravity-ui/icons';
import NavItem from "./NavItem";

export default function SideBar() {
    return (
        <nav className="w-1/12 h-[90dvh] bg-neutral-300 flex items-center flex-col">
            <NavItem icon={<House width={40} height={40} />} path="/dashboard" />
            <NavItem icon={<LuTruck size={40} />} path="/dashboard/providers" />
            <NavItem icon={<LuBox size={40} />} path="/dashboard/products" />
            <NavItem icon={<LuUser size={40} />} path="/dashboard/managers" />
            <NavItem icon={<LuUsers size={40} />} path="/dashboard/employees" />
        </nav>
    );
}