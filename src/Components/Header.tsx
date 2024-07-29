import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {

    const navigate = useNavigate()
  return (
    <header className="bg-primary text-accent p-4 shadow-md sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-x-6 md:order-2 ">
          {/* nav */}
          <Nav
            containerStyles="hidden md:flex gap-x-8 items-center"
            linkStyles="relative  transiton-all"
            activeLinkStyles="underline"
          />

          {/* mobile Nav */}
          <div className="md:hidden ">
            <MobileNav />
          </div>
        </div>
        <Link to={"/"}>
          <div className="text-xl font-bold md:order-1">Nurse</div>
        </Link>
        <Button variant={"secondary"} className="order-3" onClick={()=>{navigate('/login')}}>Log Out</Button>
      </div>
    </header>
  );
};

export default Header;
