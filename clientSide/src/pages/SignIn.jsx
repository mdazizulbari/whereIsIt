import { use, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Bounce, toast } from "react-toastify";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "../contexts/AuthContext";

const SignIn = () => {
  const { signInWithGoogle } = use(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(email, password);
    // login user
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // console.log(result.user);
        navigate(location.state || "/");
        toast.success("Sign in successful");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result);
        navigate(location.state || "/");
        toast.success("Sign in successful");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-base-100 p-10 h-[625px]">
        <title>WhereIsIt | Sign In</title>
      <div className="flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold text-primary text-center my-5">
          Sign In
        </h1>
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignIn}>
              <div>
                <fieldset className="fieldset">
                  <input
                    type="email"
                    name="email"
                    className="input"
                    ref={emailRef}
                    placeholder="Email"
                    required
                  />
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      className="input"
                      placeholder="Password"
                      name="password"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setShowPass(!showPass);
                      }}
                      className="btn btn-xs absolute top-2 right-6"
                    >
                      {showPass ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <button type="submit" className="btn btn-neutral mt-4">
                    Sign In
                  </button>
                </fieldset>
              </div>
            </form>

            <span className="text-center">OR</span>

            <button onClick={handleGoogleLogin} className="btn">
              <FaGoogle /> Sign in with Google
            </button>

            <div className="text-center">
              Don't have an account? Please{" "}
              <Link className="underline text-blue-500" to={"/sign-up"}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
