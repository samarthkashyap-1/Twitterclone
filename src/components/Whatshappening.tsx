
import Trendingdata from "./Trendingdata";
export default function Whatshappening() {

  
  return (
    <div>
      <div className="flex justify-center  flex-col rounded-2xl pt-3 gap-1 bg-[#202327] box-border">
        <div>
          <h1 className="text-xl ml-1 font-twitnor text-white px-3">
            What's Happening
          </h1>
        </div>

        <Trendingdata
          Tweetamt={"110.6 K"}
          Trend={"Trending in India"}
          Topic={"EyeFlu"}
        />
        <Trendingdata
          Tweetamt={"652.2 K"}
          Trend={"Science - Trending"}
          Topic={"UFO"}
        />
        <Trendingdata
          Tweetamt={"55.6 K"}
          Trend={"Trending in Politics"}
          Topic={"Rahul Gandhi"}
        />
        <Trendingdata
          Tweetamt={"168.8 K"}
          Trend={"Politics - Trending"}
          Topic={"Manipur-Voilence"}
        />

      </div>

     
    </div>
  );
}
