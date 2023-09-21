import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";


const HomeLayout = () => {
    return (
        <section>
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-4">
      <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/products"}>Products</NavLink></li>
      <li> <NavLink to={"/dashboard"}>Dashboard</NavLink> </li>
    </ul>
  </div>
</div>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
        
    )
};

export default HomeLayout;