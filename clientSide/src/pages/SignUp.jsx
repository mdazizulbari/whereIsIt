import { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../firebase/firebase.init";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const { signInWithGoogle } = use(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photoUrl = event.target.photoUrl.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(email, password);
    // password validate
    const passwordRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (passwordRegExp.test(password) === false) {
      toast.error(
        `Password must have one uppercase, one lowercase, one number and must be more than 6 characters`
      );
      return;
    }
    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // console.log(result);
        // update user profile
        const profile = {
          displayName: name,
          photoURL: photoUrl,
        };
        updateProfile(auth.currentUser, profile).then(() => {
          // console.log("user profile updated");
        });
        navigate(location.state || "/");
        toast.success("Sign Up successful");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result);
        navigate(location.state || "/");
        toast.success("Sign Up successful");
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
        <title>WhereIsIt | Sign Up</title>
      <div className="flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold text-center my-5 text-primary">
          Sign Up
        </h1>
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <div>
              <form className="fieldset" onSubmit={handleSignUp}>
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Name"
                  required
                />
                <input
                  type="text"
                  className="input"
                  name="photoUrl"
                  placeholder="Photo URL"
                  required
                />
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                  required
                />
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <button
                    onClick={() => {
                      setShowPass(!showPass);
                    }}
                    className="btn btn-xs absolute top-2 right-6"
                  >
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Sign Up
                </button>
              </form>
            </div>

            <span className="text-center">OR</span>

            <button onClick={handleGoogleSignUp} className="btn">
              <FaGoogle /> Sign up with Google
            </button>

            <div className="text-center">
              Have an account? Please{" "}
              <Link className="underline text-blue-500" to={"/sign-in"}>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
