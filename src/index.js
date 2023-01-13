import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/Errors/ErrorPages';

const router = createBrowserRouter([
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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
