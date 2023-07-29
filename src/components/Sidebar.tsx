import Sidebaroption from "./Sidebaroption"
import HomeIcon from "@mui/icons-material/HomeOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import ArticleIcon from "@mui/icons-material/ArticleOutlined";
import VerifiedIcon from "@mui/icons-material/VerifiedOutlined";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHorizOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentityOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

// interface UserData {
//   name: string;
//   age: number;
//   email: string;
//   picture: string;
// }
// interface SidebarProps {
//   userdata: UserData;
//   handlelogout: () => void;
// }

const Sidebar:React.FC<any>= ({userdata,handlelogout})=>{
  console.log(userdata.picture)
    return (
      <div className=" sticky top-0">
        <div className="flex flex-col ml-10 gap-y-0.5 justify-start h-screen  z-50 border-r-[1px] border-gray-700">
          {/* logout dailog  */}
          <dialog id="my_modal_2" className="modal">
            <form
              method="dialog"
              className="modal-box bg-black absolute top-[510px] left-36  drop-shadow-xl p-3 shadow-slate-300 rounded-2xl"
            >
              <div className="text-white hover:bg-gray-900 cursor-not-allowed rounded-lg">
                <button className=" mx-2 cursor-not-allowed text-sm h-10  my-auto">
                  Add an exsisting account
                </button>
              </div>
              <div className="hover:bg-gray-900 text-white rounded-lg">
                <button
                  onClick={handlelogout}
                  className=" mx-2 h-10 text-sm my-auto "
                >
                  Logout {userdata.email}
                </button>
              </div>
            </form>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
          {/* dailog */}

          {/* logo */}

          <div className="flex ml-1 mb-2 justify-start  w-fit  hover:bg-opacity-50 bg-gray-700 bg-opacity-0 h-12 rounded-full">
            <TwitterIcon className="scale-150 text-white mt-3 mx-3" />
          </div>
          {/* logo */}

          <Link to="/home">
            {" "}
            <Sidebaroption Icon={HomeIcon} text={"Home"} cursor={true}/>
          </Link>

          <Link to="/explore">
            <Sidebaroption Icon={SearchIcon} text={"Explore"} cursor={true} />{" "}
          </Link>

          <Sidebaroption Icon={NotificationsIcon} text={"Notifications"} cursor={false} />
          <Sidebaroption Icon={MailOutlineIcon} text={"Messages"} cursor={false} />
          <Sidebaroption Icon={ArticleIcon} text={"Lists"} cursor={false} />
          <Sidebaroption Icon={PeopleIcon} text={"Communities"}  cursor={false}/>
          <Sidebaroption Icon={VerifiedIcon} text={"Verified"} />
          <Sidebaroption Icon={PermIdentityIcon} text={"Profile"} cursor={false} />
          <Sidebaroption Icon={MoreHorizIcon} text={"More"} cursor={false} />
          {/* tweet-button */}
          <div className="mt-3">
            <button className="bg-[#1A8CD8] rounded-full font-twitnor font-semibold text-lg text-white w-56 h-12 hover:opacity-90">
              Tweet
            </button>
          </div>
          {/* tweet-button */}

          {/* logout-button */}

          <div className="mt-16  transition-all">
            <button
              className="text-white h-14 text-4xl w-[280px]"
              onClick={() => window.my_modal_2.showModal()}
            >
              <div className="flex justify-start cursor-pointer  w-[280px] hover:bg-opacity-50 bg-gray-700 bg-opacity-0 h-16 rounded-full">
                <img
                  className="scale-90 p-2 text-white rounded-full"
                  src={userdata.picture}
                />
                <div className="flex flex-col justify-evenly ">
                  <p className="text-[11px] h-5 font-twitnor text-left text-white">
                    {userdata.name}
                  </p>
                  <p className="text-[11px]  font-twitnor text-gray-500">
                    {userdata.email}
                  </p>
                </div>
                <div className="ml-1.5">
                  <MoreHorizIcon className="mt-2" />
                </div>
              </div>
            </button>
          </div>
          {/* logout-button */}
        </div>
      </div>
    );
}
export default Sidebar