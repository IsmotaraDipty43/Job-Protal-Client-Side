import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MAinLayouts from '../Layouts/MAinLayouts';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Singin from '../Pages/Singin';
import JobDetails from '../Pages/JobDetails/JobDetails';
import PrivateRoute from './PrivateRoute';
import Jobapply from '../Pages/Jobapply';
import Myapplication from '../Myapplication';
import AddJob from '../Pages/AddJob';
import MypostedJob from '../Pages/MypostedJob';
import Viewapplication from '../Pages/Viewapplication';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MAinLayouts></MAinLayouts>,
      errorElement: <h2>page not found</h2>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/reg',
          element:<Register></Register>
      },
      {
        path:'/jobs/:id',
        element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({params})=>fetch(`https://server-wheat-iota.vercel.app/jobs/${params.id}`)
    },
    {
      path:'/jobapply/:id',
      element:<PrivateRoute><Jobapply></Jobapply></PrivateRoute>,

  },
  {
    path:'/myApplication',
    element:<PrivateRoute><Myapplication></Myapplication></PrivateRoute>,

},
      {
        path:'/login',
        element:<Singin></Singin>
    },
    {
      path:'/postjob',
      element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
  },
  {
    path:'/mypostjob',
    element:<PrivateRoute><MypostedJob></MypostedJob></PrivateRoute>
},
{
  path:'/viewApplication/:job_id',
  element:<PrivateRoute><Viewapplication></Viewapplication></PrivateRoute>,
  loader:({params})=>fetch(`https://server-wheat-iota.vercel.app/job-applications/jobs/${params.job_id}`)
}
      ]
    },
  ]);




export default router;