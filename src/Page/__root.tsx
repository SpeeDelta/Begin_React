import { Outlet, createRootRoute } from "@tanstack/react-router";
import Sidebar from "@/Page/General/features/SideBar.tsx";

export const Route = createRootRoute({
    component: RootLayout,
});

// eslint-disable-next-line react-refresh/only-export-components
function RootLayout() {
    return (
        <>
            <Sidebar />
            <main style={{ paddingTop: "80px" }}>
                <Outlet />
            </main>
        </>
    );
}
