import { NavLink, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div>
            <div className="bg-slate-500 flex justify-center">
    <ul className="menu menu-horizontal px-1 gap-4">
      <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
      <li><NavLink to={"/dashboard/profile"}>Profile</NavLink></li>
      <li> <NavLink to={"/dashboard/editProfile"}>Edit Profile</NavLink> </li>
    </ul>
  </div>
    <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;