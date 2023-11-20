import { Link, useNavigate } from "react-router-dom";
import logimg from "../../assets/others/authentication2.png";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOnSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        const result = res.user;
        console.log(result);
        updateUserProfle(data.name, data.photourl)
          .then(() => {
            console.log("User profile info updated");
            Swal.fire({
              title: "Sign Up user Successfully",
              showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
              },
              hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
              },
            });
            reset();
            navigate("/");
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => console.log(err.message));
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
                  <span className="label-text">photoURL</span>
                </label>
                <input
                  type="text"
                  name="photourl"
                  {...register("photourl", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photourl && (
                  <span className="text-red-600 pt-1">
                    Photo URL is required
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
                    pattern:
                      /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
                  })}
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600 pt-1">
                    This field is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600 pt-1">
                    password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600 pt-1">
                    password must be less than 15 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600 pt-1">
                    password must have at least one UpperCase, one LowerCase,
                    one Special Character & one digit
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
