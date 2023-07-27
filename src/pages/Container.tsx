import { useEffect,useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Home from "../components/Home";
import Explore from "../components/Explore";
import Widgets from "../components/Widgets";
function Container(){
    const navigate = useNavigate()
    const location = useLocation()
    const [userdata,setuserdata] =  useState({})
    const [whattoshow,setwhattoshow] =  useState("/home")
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/");
        }
       
        else{
            const gettingdata = JSON.parse(localStorage.getItem("userdata"))
            setuserdata(gettingdata)
        }
        
    },[whattoshow])


    // const handleshow =(display)=>{
    //     setwhattoshow(display)
       

    // }
     useEffect(()=>{
        setwhattoshow(location.pathname)
     },[location])
   
    

    const handlelogout =()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('userdata');
        navigate('/')
        setuserdata({})

    }
    

return(
    <div className=" bg-black flex">
    <div className="ml-20"> 
        <Sidebar userdata={userdata} handlelogout={handlelogout}  />
    </div>
    <div>

        {whattoshow==="/home"&&<Home userdata={userdata}/>}
        {/* {whattoshow==="/explore"&&<Explore/>} */}
    </div>
    <div>

        <Widgets/>
    </div>
    </div>
)

}
export default Container;