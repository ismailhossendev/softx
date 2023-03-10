import { createBrowserRouter } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import AllEmployee from '../pages/AllEmployee';
import AddEmployee from '../AddEmployee/AddEmployee';
import Jobs from '../pages/Jobs';
import Public from '../Layout/Public';
import ApplyJob from "../components/jobs/ApplyJob";
import AddJobs from "../pages/AddJobs";

export const router = createBrowserRouter([
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
            },
            {
                path: '/dashboard/jobs',
                element: <Jobs />
            },
            {
                path: '/add-jobs',
                element: <AddJobs />
            }
        ]
    },
    {
        path: '/public',
        element: <Public />,
        children: [
            {
                path: "/public/jobs",
                element: <Jobs />
            },
            {
                path: "/public/job/1",
                element: <ApplyJob />
            }
        ]
    }
])