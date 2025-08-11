import { lazy } from "react";

const AgentRoutes = [
  {
    role: "agent",
    isPublic: false,
    path: "/agent/dashboard",
    component: lazy(() => import("../Pages/SalesAgent/Dashboard")),
  },
    {
    role: "agent",
    isPublic: false,
    path: "/agent/leads",
    component: lazy(() => import("../Pages/SalesAgent/LeadsView/Index")),
  },
     {
    role: "agent",
    isPublic: false,
    path: "/agent/viewLeads",
    component: lazy(() => import("../Pages/Admin/Leads/index")),
  },
     {
    role: "agent",
    isPublic: false,
    path: "/agent/email",
    component: lazy(() => import("../Pages/SalesAgent/Email/Email")),
  },
    {
    role: "agent",
    isPublic: false,
    path: "/agent/calendar",
    component: lazy(() => import("../Pages/SalesAgent/Calendar/Index")),
  },
    {
    role: "agent",
    isPublic: false,
    path: "/agent/call",
    component: lazy(() => import("../Pages/SalesAgent/Call/Index")),
  },
   {
    role: "agent",
    isPublic: false,
    path: "/agent/team",
    component: lazy(() => import("../Pages/Manager/Dashboard/index")),
  },
 
  // {
  //   role: "admin",
  //   isPublic: false,
  //   path: "/admin/allVehicles/:status",
  //   component: lazy(() => import("../Pages/Vehicles")),
  // },
 
  {
    role: "agent",
    isPublic: false,
    path: "/agent/settings",
    component: lazy(() => import("../Pages/SalesAgent/Settings")),
  },
 
  
 
];

export default AgentRoutes;
 