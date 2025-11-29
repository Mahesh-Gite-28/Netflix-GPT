import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/Browse",
            element: <Browse />
        }
    ])

    return (
        <RouterProvider router={appRouter} />
    )
}

export default Body