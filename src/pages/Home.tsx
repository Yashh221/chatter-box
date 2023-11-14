import { useNavigate } from "react-router-dom";
import HoverButton from "../styles/hoverButton";

const Home = () => {
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
        <div className="flex flex-col text-white mt-[180px] gap-8 items-center">
          <div className="flex flex-col gap-1 items-center ">
            <span className="text-[60px]">ChatterBox</span>
            <span className="text-xl">Chatting Simplified, Connections Amplified.</span>
          </div>
          <div>
            <button className={`p-4 px-12 text-2xl font-semibold w-[250px] bg-[#66767c] rounded-[10px] tracking-wider ${HoverButton}`} onClick={()=>navigate("/signup")}>Sign up</button>
          </div>
          <div className="text-2xl font-semibold">OR</div>
          <div>
          <button className={`p-4 px-12 text-2xl font-semibold w-[250px] bg-[#66767c] rounded-[10px] tracking-wider ${HoverButton}`} onClick={()=>navigate("/login")}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
