import React from 'react'
import App from "./App";
import ErrorPage from "./components/Errors/ErrorPages";


const routeComponent =
    [
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            // loader: rootLoader,
            // action: rootAction,
            // children: [
            //   {
            //     path: "contacts/:contactId",
            //     element: <Contact />,
            //     loader: contactLoader,
            //   },
            //   {
            //     path: "contacts/:contactId/edit",
            //     element: <EditContact />,
            //     loader: contactLoader,
            //     action: editAction,
            //   },
            // ]
        },
    ]

export default routeComponent