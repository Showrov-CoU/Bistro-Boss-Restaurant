import { Link } from "react-router-dom";
import logimg from "../../assets/others/authentication2.png";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const handleOnSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Helmet>
        <title>Bistro Boss | signup</title>
      </Helmet>
      <div className="hero min-h-[85vh] bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={logimg} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleOnSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Type here"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600 pt-1">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Type here"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600 pt-1">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-600 pt-1">
                    This field is required
                  </span>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>
            <p className="text-center mb-5">
              Already registered?{" "}
              <Link
                to="/login"
                className="underline text-blue-500 font-semibold"
              >
                Go to log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
