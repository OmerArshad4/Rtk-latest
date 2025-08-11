import { lazy } from "react";
import AdminRoutes from "./AdminRoutes";

import AgentRoutes from "./AgentRoutes";
const routes = [
  {
    path: "/",
    isPublic: true,
    component: lazy(() => import("../Pages/Auth/SignIn")),
  },
  {
    path: "/signIn",
    isPublic: true,
    component: lazy(() => import("../Pages/Auth/SignIn")),
  },
  {
    path: "/verifyOtp",
    isPublic: true,
    component: lazy(() => import("../Pages/Auth/VerifyOtp")),
  },
  {
    isPublic: true,
    path: "/forgotPassword",
    component: lazy(() => import("../Pages/Auth/ForgetPassword")),
  },
  {
    path: "/setNewPassword",
    isPublic: true,
    component: lazy(() => import("../Pages/Auth/SetPassword")),
  },
    {
    path: "/resetPassword",
    isPublic: true,
    component: lazy(() => import("../Pages/Auth/ResetPassword")),
  },
]
  .concat(AdminRoutes)
  .concat(AgentRoutes);

export default routes;
