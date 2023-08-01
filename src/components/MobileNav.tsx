import HomeIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";

const MobileNav = () => {
  return (
    <div className="bg-black flex  w-screen h-14 justify-around items-center">
      <div className=""><HomeIcon className="text-white scale-125 "/></div>
      <div className=""><SearchIcon className="text-white scale-125 "/></div>
      <div className=""><NotificationsIcon className="text-white scale-125 "/></div>
      <div className=""><MailOutlineIcon className="text-white scale-125 "/></div>
    </div>
  );
};

export default MobileNav;
