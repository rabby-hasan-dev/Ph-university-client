import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

type TRoute = {
    path: string;
    element: ReactNode;
}
type TSidebarItem = {
    key: string;
    label: ReactNode;
    children?: TSidebarItem[];
}

const adminPaths = [

    {
        name: "Dashboard",
        path: 'dashboard',
        element: <AdminDashboard></AdminDashboard>,
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: 'create-admin',
                element: <CreateAdmin></CreateAdmin>,
            },
            {
                name: "Create Faculty",
                path: 'create-faculty',
                element: <CreateFaculty></CreateFaculty>,
            },
            {
                name: "create-student",
                path: 'create-student',
                element: <CreateStudent></CreateStudent>,
            },

        ]

    }
]

//  programetical way

//  admin routes

export const adminRoutes = adminPaths.reduce((acc: TRoute[], items) => {

    if (items.path && items.element) {

        acc.push({
            path: items.path,
            element: items.element
        });
    }

    if (items.children) {
        items.children.forEach((child) => {
            acc.push(
                {
                    path: child.path,
                    element: child.element
                }
            )

        })
    }

    return acc;


}, [])


//  admin side bar

export const adminSidebarItem = adminPaths.reduce((acc: TSidebarItem[], items) => {

    if (items.name && items.path) {

        acc.push({
            key: items.name,
            label: <NavLink to={`/admin/${items.path}`}>{items.name}</NavLink>
        })
    }
    if (items.children) {
        acc.push({
            key: items.name,
            label: items.name,
            children: items.children.map((child) => ({
                key: child.name,
                label: <NavLink to={`/admin/${child.path}`}>{child.name} </NavLink>
            }))
        })


    }

    return acc;


}, [])



//  hard coded way

// export const adminPaths = [
//     {
//         index: true,
//         element: <AdminDashboard></AdminDashboard>
//     },
//     {
//         path: 'dashboard',
//         element: <AdminDashboard></AdminDashboard>
//     },
//     {
//         path: 'create-student',
//         element: <CreateStudent></CreateStudent>
//     },
//     {
//         path: 'create-faculty',
//         element: <CreateFaculty></CreateFaculty>
//     },
//     {
//         path: 'create-admin',
//         element: <CreateAdmin></CreateAdmin>
//     },
// ]