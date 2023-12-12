import React ,{useState}from "react";
import login from '../images/lognImg.png';
import axios from "axios";
import { Outlet ,useNavigate,useLocation} from "react-router-dom";
const Login =()=>{
    const initialState={
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        confirm_password:''
    }
    const [details,setDatail]=useState(initialState)
    const navigate=useNavigate()
    const location =useLocation()
    const{pathname}=location
    const splitPath=pathname.split('/')[2]
    const handleup=()=>{
        navigate('signup')
    }
    const handleIn=()=>{
        navigate('signin')
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/token/',details,{headers: 
        {'Content-Type': 'application/json'}})
        .then(response=>{
           console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        setDatail(initialState)
    }
    return(
        <div className="py-2 mx-auto max-w-[90%] h-[92vh] ">
            <div className="flex w-full  justify-between h-[80%]  mx-auto">
                <div className="flex-[0.4] h-[100%]">
                    <img src={login}className="w-full h-full object-contain"  ></img>
                </div>
                <div className="flex-[0.4] h-[80%] mt-6">
                    <Outlet context={[details,setDatail]}/>
                </div>
            </div>
            <div className="w-[100%]  my-3 h-auto mx-auto">
               <button type="submit" onClick={handleSubmit} className="w-full h-[50px] bg-yellow-500 hover:bg-yellow-400 rounded-md cursor-pointer text-white">Continue</button>
            </div>
            <div className="text-center">
                {splitPath === 'signup'?<p>Already acount?<span onClick={handleIn} className="text-yellow-500 cursor-pointer">sign in</span></p>:<p>Don't have an acount already?<span onClick={handleup} className="text-yellow-500 cursor-pointer">create</span></p>}
            </div>
        </div>
    )
}
export default Login