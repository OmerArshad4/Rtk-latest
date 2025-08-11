import { lazy } from "react";

const AdminRoutes = [
  {
    role: "admin",
    isPublic: false,
    path: "/admin/dashboard",
    component: lazy(() => import("../Pages/Admin/Dashboard")),
  },
    {
    role: "admin",
    isPublic: false,
    path: "/admin/leads",
    component: lazy(() => import("../Pages/Admin/Leads/index")),
  },
      {
    role: "admin",
    isPublic: false,
    path: "/admin/viewLeads",
    component: lazy(() => import("../Pages/Admin/Leads/index")),
  },
  
    {
    role: "admin",
    isPublic: false,
    path: "/admin/call",
    component: lazy(() => import("../Pages/Admin/Call/Index")),
  },
 
  // {
  //   role: "admin",
  //   isPublic: false,
  //   path: "/admin/allVehicles/:status",
  //   component: lazy(() => import("../Pages/Vehicles")),
  // },
 
  {
    role: "admin",
    isPublic: false,
    path: "/admin/settings",
    component: lazy(() => import("../Pages/Admin/Settings")),
  },
 
  // {
  //   role: "admin",
  //   isPublic: false,
  //   path: "/admin/partsListing/:vehicleId",
  //   component: lazy(() => import("../Pages/PartsListing")),
  // },
 
];

export default AdminRoutes;
 