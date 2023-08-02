import ProfileHeader from "./ProfileHeader";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
const Profile: React.FC<any> = ({ userdata,handlelogout }) => {
  return (
    <div className="w-[38rem] sm:w-screen overflow-hidden">
      <header className="sticky top-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg">
        <ProfileHeader userdata={userdata} handlelogout={handlelogout} />
      </header>
      <div>
        <div className="bg-[#333639] h-48"></div>
        <div className="relative h-16">
          <img
            src={userdata.picture}
            className="absolute cursor-pointer rounded-full border-4 border-black -top-14 left-7 scale-125"
            alt=""
          />
          <div className="w-full h-full flex ">
            <button className="text-white ml-auto h-9 px-4 mt-3 font-medium rounded-full bg-gray-700 bg-opacity-0 hover:bg-opacity-40 mr-5 text-center border-2 border-gray-500">
              Edit profile
            </button>
          </div>
        </div>
        <div className=" border-b-2 border-gray-700 h-full">
          <div className="ml-5 mt-5">
            <p className="text-white text-xl font-twitnor ">{userdata.name}</p>
            <p className="text-gray-400 text-sm">{userdata.email}</p>

            <div className="flex items-center mt-4 ">
              <CalendarMonthOutlinedIcon className="text-gray-400 scale-75" />
              <p className="text-gray-400 text-sm">Joined January 2018</p>
            </div>

            <div className="flex gap-5 mt-4">
              <p className="text-gray-400 text-sm hover:underline cursor-pointer">
                <span className="text-white text-base font-medium">100</span>{" "}
                Following
              </p>
              <p className="text-gray-400 text-sm hover:underline cursor-pointer">
                <span className="text-white text-base font-medium">100</span>{" "}
                Followers
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex h-14 justify-around">
              <div className=" text-sm  w-full flex justify-center hover:bg-gray-900 transition-all cursor-pointer">
                <button className="font-bold border-b-4 text-white border-[#1A8CD8]">
             Tweets
                </button>
              </div>
              <div className=" text-sm w-full flex justify-center hover:bg-gray-900 transition-all cursor-not-allowed">
                <button className=" font-bold text-gray-500 cursor-not-allowed">
                  Replies
                </button>
              </div>
              <div className=" text-sm w-full flex justify-center hover:bg-gray-900 transition-all cursor-not-allowed">
                <button className="font-bold text-gray-500 cursor-not-allowed">
                  Highlights
                </button>
              </div>
              <div className=" text-sm w-full flex justify-center hover:bg-gray-900 transition-all cursor-not-allowed">
                <button className="font-bold text-gray-500  cursor-not-allowed">
                  Media
                </button>
              </div>
              <div className=" text-sm w-full flex justify-center hover:bg-gray-900 transition-all cursor-not-allowed">
                <button className="font-bold text-gray-500  cursor-not-allowed">
                 Likes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center sm:h-[32rem] justify-center h-screen">
        <p className="text-gray-500">
            No Tweets Yet
        </p>
      </div>
    </div>
  );
};

export default Profile;
