import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import type { ReactNode } from "react";

export type SidebarItem = {
    title: string;
    path: string;
    icon: ReactNode;
};

export const SidebarData: SidebarItem[] = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: "About",
        path: "/about",
        icon: <FaIcons.FaInfoCircle />,
    },
    {
        title: "Profile",
        path: "/profile",
        icon: <FaIcons.FaUser />,
    },
];