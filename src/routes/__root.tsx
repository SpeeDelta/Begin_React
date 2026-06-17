import {Link, Outlet, createRootRoute} from "@tanstack/react-router";

const activeProps = {
    style:
        {
            fontWeight: "bold",
            color: "red",
        },
};
export const Route = createRootRoute({
    component: () => (
        <>
            <ul>
                <li>
                    <Link to="/" activeProps={activeProps}> Home </Link>
                </li>
                <li>
                    <Link to="/about" activeProps={activeProps}> About </Link>
                </li>
                <li>
                    <Link to="/profile" activeProps={activeProps}> Profile </Link>
                </li>
            </ul>
            <Outlet/>
        </>
    ),
});