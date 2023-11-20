import { Helmet } from "react-helmet-async";
import logimg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const captchaRef = useRef(null);
  const { signIn } = useContext(AuthContext);

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    // console.log(email, pass);
    // console.log(signIn);
    signIn(email, pass)
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err.message));
  };

  const handleValidedCaptcha = () => {
    const user_catcha_value = captchaRef.current.value;
    if (validateCaptcha(user_catcha_value)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Helmet>
        <title>Bistro Boss | login</title>
      </Helmet>
      <div className="hero min-h-[85vh] bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            {/* <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> */}
            <img src={logimg} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type here"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate></LoadCanvasTemplate>
                </label>
                <input
                  ref={captchaRef}
                  type="text"
                  name="captcha"
                  placeholder="Type here"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={handleValidedCaptcha}
                  className="btn btn-outline btn-xs mt-2"
                >
                  validate
                </button>
              </div>
              <div className="form-control mt-6">
                <button disabled={isDisabled} className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center mb-5">
              New here?{" "}
              <Link
                to="/signup"
                className="underline text-blue-500 font-semibold"
              >
                Create a New Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
