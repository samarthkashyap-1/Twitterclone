import ExploreHeader from "./ExploreHeader";
import Trendingdata from "./Trendingdata";
import Tweetpost from "./Tweetpost";

function Explore(){

    const postsArray = [
       {
         logo: "https://picsum.photos/400/400",
         name: "Sophia Smith",
         verify: true,
         userhandle: "@sophiasmith",
         caption: "Gorgeous sunset at the beach. #sunsetlovers",
         link: "https://example.com/post6",
         img: "https://picsum.photos/900/600",
         comment: 20,
         retweet: 2,
         likes: 40,
         viewed: 110,
       },
       {
         logo: "https://random.imagecdn.app/400/400",
         name: "William Brown",
         verify: true,
         userhandle: "@willbrown",
         caption: "Attended an inspiring conference today. #conference",
         link: "https://example.com/post7",
         img: "https://picsum.photos/1000/800",
         comment: 12,
         retweet: 7,
         likes: 18,
         viewed: 65,
       },
       {
         logo: "https://picsum.photos/400/400",
         name: "Olivia Davis",
         verify: false,
         userhandle: "@oliviad",
         caption: "Ready for the weekend! #weekendvibes",
         link: "https://example.com/post8",
         img: "https://random.imagecdn.app/700/500",
         comment: 6,
         retweet: 3,
         likes: 12,
         viewed: 40,
       },
       {
         logo: "https://random.imagecdn.app/400/400",
         name: "Ella Martinez",
         verify: true,
         userhandle: "@ellam",
         caption: "Chilling at the beach. #beachday",
         link: "https://example.com/post13",
         img: "https://picsum.photos/700/500",
         comment: 9,
         retweet: 2,
         likes: 18,
         viewed: 50,
       },
       {
         logo: "https://picsum.photos/400/400",
         name: "Noah Clark",
         verify: true,
         userhandle: "@noahc",
         caption: "Good times with friends. #friendsgathering",
         link: "https://example.com/post14",
         img: "https://picsum.photos/600/400",
         comment: 7,
         retweet: 5,
         likes: 25,
         viewed: 80,
       },
       {
         logo: "https://picsum.photos/400/400",
         name: "Isabella Turner",
         verify: false,
         userhandle: "@isabellat",
         caption: "Fun day at the amusement park. #funfair",
         link: "https://example.com/post15",
         img: "https://random.imagecdn.app/800/600",
         comment: 12,
         retweet: 3,
         likes: 32,
         viewed: 65,
       },
       {
         logo: "https://random.imagecdn.app/400/400",
         name: "Mia Scott",
         verify: true,
         userhandle: "@mias",
         caption: "Beautiful sunset view. #sunsetlovers",
         link: "https://example.com/post16",
         img: "https://picsum.photos/900/600",
         comment: 20,
         retweet: 10,
         likes: 40,
         viewed: 110,
       }
     ];
    return (
      <div>
        <header className="sticky top-0 bg-black z-10 bg-opacity-70 backdrop-blur-md">
          <ExploreHeader />
        </header>
        <div className="">
          <Trendingdata
            Tweetamt={"55.6 K"}
            Trend={"Trending in India"}
            Topic={"EyeFlu"}
          />

          <Trendingdata
            Tweetamt={"168.8 K"}
            Trend={"Sports - Trending"}
            Topic={"TheAshes2023"}
          />
          <Trendingdata
            Tweetamt={"652.2 K"}
            Trend={"Science - Trending"}
            Topic={"UFO"}
          />
          <Trendingdata
            Tweetamt={"168.8 K"}
            Trend={"Technology - Trending"}
            Topic={"SofTwareEngineering"}
          />
          <Trendingdata
            Tweetamt={"68.8 K"}
            Trend={"Trending in India"}
            Topic={"कन्हैया कुमार"}
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
          <Trendingdata
            Tweetamt={"5488 "}
            Trend={"Trending"}
            Topic={"Madhya Pradesh"}
          />
          <Trendingdata
            Tweetamt={"14.2 K"}
            Trend={"Indian Premier League- Trending"}
            Topic={"Tim David"}
          />
          <Trendingdata
            Tweetamt={"120.8 K"}
            Trend={"Entertainment - Trending"}
            Topic={"KanganaRanaut"}
          />
          <Trendingdata
            Tweetamt={"2688 "}
            Trend={"Trending in India"}
            Topic={"Buddhism"}
          />
          <div className="border-t-[1px] border-gray-700">
         
            {postsArray.map((post) => (
              <Tweetpost post={post} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default Explore;