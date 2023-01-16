import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import AllEmployee from './pages/AllEmployee';
import AddEmployee from './AddEmployee/AddEmployee';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Dashboard />
        },
        {
          path: "/employee",
          element: <AllEmployee />
        },
        {
          path: "/application",
          element: <div>employee</div>
        },
        {
          path: "/add-employee",
          element: <AddEmployee />
        }
      ]
    }
  ])

  return (
    <div data-theme="light">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
