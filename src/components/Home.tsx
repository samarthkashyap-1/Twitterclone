import HomeHeader from "./HomeHeader";
import MakeTweet from "./MakeTweet";
import Tweetpost from "./Tweetpost";


const Home: React.FC<{ userdata: any }> =({ userdata })=> {



const postsArray = [
  {
    logo: "https://picsum.photos/400/400",
    name: "John Doe",
    verify: true,
    userhandle: "@johndoe",
    caption: "Excited for the weekend! #weekendvibes",
    link: "https://example.com/post1",
    img: "https://picsum.photos/1024/1024",
    comment: 5,
    retweet: 15,
    likes: 20,
    viewed: 50,
  },
  {
    logo: "https://picsum.photos/400/400",
    name: "Jane Smith",
    verify: false,
    userhandle: "@janesmith",
    caption: "Just finished a great book. Highly recommended! #reading",
    link: "https://example.com/post2",
    img: "https://random.imagecdn.app/1024/1024",
    comment: 12,
    retweet: 8,
    likes: 35,
    viewed: 80,
  },
  {
    logo: "https://random.imagecdn.app/400/400",
    name: "Bob Johnson",
    verify: true,
    userhandle: "@bobjohnson",
    caption: "New recipe experiment. Turned out delicious! #cooking",
    link: "https://example.com/post3",
    img: "https://picsum.photos/900/600",
    comment: 25,
    retweet: 5,
    likes: 45,
    viewed: 120,
  },
  {
    logo: "https://picsum.photos/400/400",
    name: "Emma Lee",
    verify: false,
    userhandle: "@emmalee",
    caption: "Exploring new places. #travelgram",
    link: "https://example.com/post4",
    img: "https://picsum.photos/800/600",
    comment: 8,
    retweet: 10,
    likes: 30,
    viewed: 70,
  },
  {
    logo: "https://random.imagecdn.app/400/400",
    name: "Michael Johnson",
    verify: true,
    userhandle: "@michaelj",
    caption: "Celebrating my birthday with friends! #birthdaybash",
    link: "https://example.com/post5",
    img: "https://random.imagecdn.app/1200/800",
    comment: 15,
    retweet: 5,
    likes: 25,
    viewed: 90,
  },
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
  },
  {
    logo: "https://random.imagecdn.app/400/400",
    name: "Liam Rodriguez",
    verify: false,
    userhandle: "@liamr",
    caption: "Sunday vibes. #sundayfunday",
    link: "https://example.com/post17",
    img: "https://picsum.photos/1000/800",
    comment: 15,
    retweet: 7,
    likes: 28,
    viewed: 90,
  },
];



  return (
    <div className="">
       <header className="sticky top-0 bg-black z-10 bg-opacity-70 backdrop-blur-md"><HomeHeader/></header> 
       <div className=" ">

      <MakeTweet userdata={userdata}/>
     {postsArray.map((post)=>(
        <Tweetpost post={post}/>
     ))}
     
       </div>
      
    </div>
    

  );
}

export default Home;
