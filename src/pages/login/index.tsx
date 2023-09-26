import img from "../../assets/images/login.svg";
import LoginForm from "./LoginForm";
const Login = () => {
  return (
    <div className=" h-screen w-screen flex justify-center items-center bg-[#E5E5E5]">
      <div className="flex flex-row items-center justify-between w-2/4 h-2/4 bg-white rounded-xl">
        <LoginForm />
        <div className="w-full">
          <img src={img} alt="" style={{ width: "auto", height: "200px" }} />
        </div>
      </div>
    </div>
  );
};

export default Login;
