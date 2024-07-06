// const array=[1,2,3,4];

// const result=array.reduce((acc,item)=>{

//     console.log(acc);

//     return acc+item;

// },0)


/* 

[]+Number=Number // []=0 value
console.log([ '1' ]+2 );
result= 12
undefined
console.log([ 1 ]+2 );
result= 12


*/

// const array=[1,2,3,4];
// const result=array.reduce((acc,item)=>{

//     console.log(acc);
//     acc.push(acc+item);
//     console.log(acc);

//     return acc;

// },[])



// console.log('Final Result ==>', result);


const adminPaths2 = [

    {
        name: "Dashboard",
        path: '/admin/dashboard',
        element: "ADMIN DASHBAORD",
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: '/admin/create-admin',
                element: "CREATE ADMIN",
            },
            {
                name: "Create Faculty",
                path: '/admin/create-faculty',
                element: "CREATE FACULTY",
            },
            {
                name: "Create Admin",
                path: '/admin/create-student',
                element: "CREATE STUDENT",
            },

        ]

    }
]


//  for admin routes 

// const adminRoutes = adminPaths2.reduce((acc, items) => {

//     if (items.path && items.element) {

//         acc.push({
//             path: items.path,
//             element: items.element
//         });
//     }

//     if (items.children) {
//         items.children.forEach((child) => {
//             acc.push(
//                 {
//                     path: child.path,
//                     element: child.element
//                 }
//             )

//         })}

//         return acc;


//     }, [])


// console.log(adminRoutes);

//  for admin sidebar



const adminSidebar = adminPaths2.reduce((acc, items) => {

    if (items.name && items.path) {

        acc.push({
            key: items.name,
            label: "NAVLINK"
        })
    }
    if (items.children) {
        acc.push({
            key: items.name,
            label: items.name,
            children:items.children.map((child)=>({
                key:child.name,
                label:child.path
            }))
        })
       

    }

    return acc;


}, [])

// console.log( JSON.stringify(adminSidebar));