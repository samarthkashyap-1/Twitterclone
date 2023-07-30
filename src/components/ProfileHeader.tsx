import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const ProfileHeader: React.FC<any> = ({ userdata }) => {
  return (
    <div className="w-full mt-1 ml-3 h-12 flex gap-6 items-center">
      <div className="w-9 h-9 rounded-full bg-gray-700 bg-opacity-0 hover:bg-opacity-40 flex justify-center items-center"><ArrowBackIcon className=" text-white scale-90"/></div>
      <p className="text-white text-lg font-twitnor opacity-90 ">{userdata.name}</p>
    </div>
  );
};

export default ProfileHeader;
