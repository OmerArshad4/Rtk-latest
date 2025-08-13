import { useLayoutEffect } from "react";
import Toaster from "../Shared/Toaster";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function PublicRoute({ Component, props, role }) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  
  useLayoutEffect(() => {
    if (user) {
      user.role === "agent"
        ? navigate("/admin/dashboard")
        : user.role === "agent"
        ? navigate("/agent/dashboard")   
        : user.role === "manager"
        ? navigate("/manager/dashboard")
        : navigate("/");
    }
  }, [user, navigate]);

  return <Component {...props} />;
}
 

//   if (user?.role) {
//     const roleRoutes = {
//       admin: "/admin/dashboard",
//       agent: "/agent/dashboard",
//       manager: "/manager/dashboard",
//     };
//     navigate(roleRoutes[user.role] || "/");
//     return null; // don't render the public component
//   }

//   return <Component {...props} />;
// }