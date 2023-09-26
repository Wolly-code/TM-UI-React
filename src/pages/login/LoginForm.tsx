import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const { user, loginUser } = useAppContext();
  const [loading, setloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setloading(true);
    try {
      const response = await axios.post("/api/user/login", data);
      loginUser(response.data, "Hello");
      toast.success(`Hello !`);
    } catch (error) {
      console.log(error);
      toast.error("Wrong Credentials");
      setloading(false);
    }
    setloading(false);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className=" w-full ">
      <h1 className="text-center">Login!</h1>
      <form
        className="flex flex-col items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col mt-4">
          <label> Email</label>
          <input
            type="text"
            {...register("email", {
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="flex flex-col mt-4">
          <label>Password</label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className=" pr-4 py-2 rounded-lg border"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
            </button>
          </div>
        </div>

        {errors.password && <span>{errors.password.message}</span>}

        {loading ? (
          <input
            className="mt-8 bg-[#6C63FF] hover:bg-[#7f79ff] text-white p-2 w-56 rounded-full"
            disabled={true}
          />
        ) : (
          <input
            className="mt-8 bg-[#6C63FF] hover:bg-[#7f79ff] text-white p-2 w-56 rounded-full"
            type="submit"
          />
        )}
      </form>
    </div>
  );
};

export default LoginForm;
