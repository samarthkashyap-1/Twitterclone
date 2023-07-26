import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
function Home(){
    const navigate = useNavigate()
    const [userdata,setuserdata] =  useState({})
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/");
        }
        else{
            const gettingdata = JSON.parse(localStorage.getItem("userdata"))
            setuserdata(gettingdata)
        }
        
    },[])
   
    

    const handlelogout =()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('userdata');
        navigate('/')
        setuserdata({})

    }
    

return(
    <div className=" bg-black flex">
    <div className="flex ml-24"> 
        <Sidebar userdata={userdata} handlelogout={handlelogout}/>
    </div>
    </div>
)

}
export default Home;