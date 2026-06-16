import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createRouter, createRootRoute, createRoute, Link, Outlet} from '@tanstack/react-router'

// Import the generated route tree
// import {routeTree} from '../routeTree.gen.ts'
import {TanStackRouterDevtools} from "@tanstack/react-router-devtools";

/*
// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const rootRoute = createRootRoute({
    component: () => (
        <div className="p-2 flex gap-2">
            <h1> Welcome  ! </h1>
        </div>
    )
});

const indexRoute = createRoute(
    {
        getParentRoute: () => rootRoute,
        path: '/',
        component: function Index() {
            return (
                <a href="/" className="[&.active]:font-bold">
                Home
            </a>
        )
        }
    }
)

const aboutRoute = createRoute('/get')({
    loader
})

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>,
    )
}
*/
const rootRoute = createRootRoute({
    component: () => (
        <>
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>{' '}
                <Link to="/about" className="[&.active]:font-bold">
                    About
                </Link>
            </div>
            <hr/>
            <Outlet/>
            <TanStackRouterDevtools/>
        </>
    ),
})

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: function Index() {
        return (
            <div className="p-2">
                <h3>Welcome Home!</h3>
            </div>
        )
    },
})

const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: function About() {
        return <div className="p-2">Hello from About!</div>
    },
})

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

const router = createRouter({routeTree})

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <StrictMode>
            <RouterProvider router={router}/>
        </StrictMode>,
    )
}