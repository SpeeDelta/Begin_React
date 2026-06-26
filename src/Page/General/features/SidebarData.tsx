import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import type { ReactNode } from "react";
import {MdCatchingPokemon} from "react-icons/md";
import {PiHashStraightDuotone} from "react-icons/pi";
import {FaWpforms} from "react-icons/fa";

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
        title: "Pokemon",
        path: "/pokemon/index",
        icon: <MdCatchingPokemon />,
    },
    {
        title: "Tic-Tac-Toe",
        path: "/game",
        icon: <PiHashStraightDuotone />,
    },
    {
        title: "Formulaire",
        path: "/form_back",
        icon: <FaWpforms />,
    },
    {
        title: "Profile",
        path: "/profile",
        icon: <FaIcons.FaUser />,
    },
];