import { useNavigate } from "react-router-dom";
import HoverButton from "../styles/hoverButton";
import { SlArrowLeft } from "react-icons/sl";
import React, { ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface RegisterUser {
  email: string;
  username: string;
  password: string;
}

const Signup = () => {
  let navigate = useNavigate();
  const [profilePicture, setProfilePicture] = React.useState<File | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const [registerUser, setRegisterUser] = React.useState<RegisterUser>({
    username: "",
    email: "",
    password: "",
  });
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setProfilePicture(file);
    }
  };
  const handleChooseFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/",
        {
          email: registerUser.email,
          name: registerUser.username,
          password: registerUser.password,
          pic: JSON.stringify(profilePicture),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      if(data.message === "success")
      {
        navigate("/login")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full h-screen bg-[#44444]">
      <div className="hidden sm:w-[40%] bg-secondary h-full sm:flex justify-center items-center relative">
        <div className="flex items-center absolute w-[70%] h-[550px] bg-[#66a2ba] rounded-l-[10px] right-0 z-50">
          <div className="flex items-center w-full font-sans">
            <span className="text-[110px] text-secondary font-bold pl-5 pr-2">
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
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col text-white mt-[100px] gap-8 items-center">
            <div className="flex flex-col gap-6 items-center ">
              <div
                className="text-[30px] cursor-pointer hover:bg-[#748991] rounded-full w-[40px] h-[40px] flex items-center pl-[2px]"
                onClick={() => navigate("/")}
              >
                <SlArrowLeft />
              </div>
              <span className="text-3xl">Create Account</span>
            </div>
            <input
              type="email"
              className="w-[400px] bg-transparent outline-none border-[1px] border-white rounded-lg px-3 py-3"
              placeholder="Email"
              value={registerUser.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRegisterUser({ ...registerUser, email: e.target.value })
              }
            />
            <input
              type="text"
              className="w-[400px] bg-transparent outline-none border-[1px] border-white rounded-lg px-3 py-3"
              placeholder="Username"
              value={registerUser.username}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRegisterUser({ ...registerUser, username: e.target.value })
              }
            />
            <input
              type="password"
              className="w-[400px] bg-transparent outline-none border-[1px] border-white rounded-lg px-3 py-3"
              placeholder="Password"
              value={registerUser.password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRegisterUser({ ...registerUser, password: e.target.value })
              }
            />
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="w-[400px] bg-transparent outline-none border-[1px] border-white rounded-lg px-3 py-3">
              <button
                className="p-2 text-lg font-semibold w-[150px] bg-[#66767c] rounded-[10px] tracking-wider mr-3"
                onClick={handleChooseFileClick}
              >
                Choose File
              </button>
              {profilePicture && `${profilePicture.name}`}
            </div>

            <div>
              <button
                className={`p-4 px-12 text-2xl font-semibold w-[250px] bg-[#66767c] rounded-[10px] tracking-wider ${HoverButton}`}
                type="submit"
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
