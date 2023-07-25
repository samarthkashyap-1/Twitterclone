import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

function Feed(){
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
   
    

    const hanglelogout =()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('userdata');
        navigate('/')
        setuserdata({})

    }
    

return(
    <div>

    <div>
        <h1>Welcome{userdata.name}</h1>
    </div>
    <div>
        <img src={userdata.picture} alt="" />
    </div>
    <div>
        <button onClick={hanglelogout} className="btn"> logout</button>
    </div>
    </div>
)

}
export default Feed;