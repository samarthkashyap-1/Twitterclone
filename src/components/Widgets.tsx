import Getverified from "./Getverified";
import SearchbarWid from "./SearchbarWid";
import Whatshappening from "./Whatshappening";

function Widgets() {
  return (
    <div className=" fixed border-l-[1px] border-gray-700 h-screen w-1/4">
      <div className="flex justify-center flex-col ml-7 gap-5">
        <SearchbarWid />
        <Getverified />
        <Whatshappening/>
      </div>
    </div>
  );
}
export default Widgets;
