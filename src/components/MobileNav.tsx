import HomeIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentityOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import { Link } from "react-router-dom";
const MobileNav = () => {
  return (
    <div className="bg-black flex  w-screen h-14 justify-around items-center">
      <Link to="/home">
        <div className="">
          <HomeIcon className="text-white scale-125 " />
        </div>{" "}
      </Link>
      <Link to="/explore">
        {" "}
        <div className="">
          <SearchIcon className="text-white scale-125 " />
        </div>
      </Link>
      <div className="">
        <NotificationsIcon className="text-white scale-125 " />
      </div>
      <Link to="/profile">

      <div className="">
        <PermIdentityIcon className="text-white scale-125 " />
      </div>
      </Link>
    </div>
  );
};

export default MobileNav;
