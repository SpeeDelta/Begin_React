// Filename - components/Sidebar.js

import { useState } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "@tanstack/react-router";
import { SidebarData, type SidebarItem } from "./SidebarData.tsx";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled.button`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
`;

const SidebarNav = styled.nav<{ $sidebar: boolean }>`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ $sidebar }) => ($sidebar ? "0" : "-100%")};
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const SidebarList = styled.ul`
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
`;

const SidebarListItem = styled.li`
    list-style: none;
`;

const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    color: #e1e9fc;
    text-decoration: none;
    font-size: 18px;
    transition: all 0.3s ease;

    &:hover {
        background: #252831;
        border-left: 4px solid green;
        padding-left: calc(1.5rem - 4px);
    }
`;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav>
                    <NavIcon type="button" onClick={showSidebar}>
                        <FaIcons.FaBars />
                    </NavIcon>
                    <h1
                        style={{
                            textAlign: "center",
                            marginLeft: "200px",
                            color: "green",
                        }}
                    >
                        GeeksforGeeks
                    </h1>
                </Nav>
                <SidebarNav $sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon type="button" onClick={showSidebar}>
                            <AiIcons.AiOutlineClose />
                        </NavIcon>

                        <SidebarList>
                            {
                                SidebarData.map((item: SidebarItem) => (
                                <SidebarListItem key={item.path}>
                                    <SidebarLink to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </SidebarLink>
                                </SidebarListItem>
                            ))}
                        </SidebarList>
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;