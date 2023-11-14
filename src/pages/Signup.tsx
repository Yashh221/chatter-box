import { useNavigate } from "react-router-dom";
import HoverButton from "../styles/hoverButton";
import { SlArrowLeft } from "react-icons/sl";

const Signup = () => {
    let navigate = useNavigate()
  return (
    <div className="flex w-full h-screen bg-[#44444]">
      <div className="hidden sm:w-[40%] bg-secondary h-full sm:flex justify-center items-center relative">
        <div className="flex items-center absolute w-[70%] h-[550px] bg-[#66a2ba] rounded-l-[10px] right-0 z-50">
          <div className="flex items-center w-full font-sans">
            <span className="text-[110px] text-secondary font-bold p-2">
              CB
            </span>
            <span className="text-[25px] text-secondary font-bold pt-5">
              CHATTER BOX
            </span>
          </div>
        </div>
        <div className="absolute w-[73%] h-[500px] bg-[#748991] rounded-l-[10px] right-0 z-30"></div>
        <div className="absolute w-[76%] h-[450px] bg-[#385663] rounded-l-[10px] right-0"></div>
      </div>
      <div className="w-full sm:w-[60%] bg-primary h-full flex justify-center">
        <div className="flex flex-col text-white mt-[100px] gap-8 items-center">
          <div className="flex flex-col gap-6 items-center ">
            <div className="text-[30px] cursor-pointer hover:bg-[#748991] rounded-full w-[40px] h-[40px] flex items-center pl-[2px]" onClick={()=>navigate("/")}><SlArrowLeft/></div>
            <span className="text-3xl">Create Account</span>
          </div>
          <input type="email" className="w-[400px] bg-transparent outline-none border-[1px] border-white rounded-lg px-3 py-3" placeholder="Gmail"/>
          <input type="text" className="w-[400px] bg-transparent outline-none border-[1px] border-white rounded-lg px-3 py-3" placeholder="Username"/>
          <input type="password" className="w-[400px] bg-transparent outline-none border-[1px] border-white rounded-lg px-3 py-3" placeholder="Password"/>
          <input type="password" className="w-[400px] bg-transparent outline-none border-[1px] border-white rounded-lg px-3 py-3" placeholder="Confirm Password"/>
          <div>
          <button className={`p-4 px-12 text-2xl font-semibold w-[250px] bg-[#66767c] rounded-[10px] tracking-wider ${HoverButton}`}>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
