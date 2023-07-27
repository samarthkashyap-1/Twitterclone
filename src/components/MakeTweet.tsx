import CollectionsIcon from "@mui/icons-material/CollectionsOutlined";
import GifBoxIcon from "@mui/icons-material/GifBoxOutlined";
import BallotIcon from "@mui/icons-material/BallotOutlined";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
function MakeTweet({ userdata }) {
  return (
    <div>
      <div className="w-[38rem] overflow-hidden">
        <div className="border-b-[1px] border-gray-700">
          <div className="flex justify-start cursor-pointer bg-opacity-0 mt-0.5 h-14">
            <img
              className="scale-90 p-2 text-white rounded-full"
              src={userdata.picture}
              alt=""
            />

            <div>
              <input 
                type="text"
                placeholder="What is happening?!"
                className="bg-transparent text-white focus:outline-none py-5 px-2 w-[34rem] placeholder:text-xl placeholder:text-gray-500 "
              />
            </div>
          </div>

          <div className="flex justify-start ml-12 mt-5 mb-2">
            <div className="flex w-72 gap-4 scale-90">
              <CollectionsIcon className="text-[#1A8CD8]" />
              <GifBoxIcon className="text-[#1A8CD8]" />
              <BallotIcon className="text-[#1A8CD8]" />
              <EmojiEmotionsIcon className="text-[#1A8CD8]" />
              <CalendarMonthOutlinedIcon className="text-[#1A8CD8]" />
              <LocationOnOutlinedIcon className="text-[#1A8CD8]" />
            </div>
            <div className="flex justify-end w-60">
              <button className="bg-[#1A8CD8] rounded-full font-semibold   text-white w-[5rem] h-8 opacity-70 hover:opacity-100">
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MakeTweet;
