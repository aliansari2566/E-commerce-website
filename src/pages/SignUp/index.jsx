import { Fragment } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase-config";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const register = async (values) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      navigate("/");
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const defaultValue = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Please Enter your Email")
      .email("Please Enter Valid Email"),
    password: yup
      .string()
      .min(6)
      .required("Please Enter Your Password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match"),
  });

  return (
    <Fragment>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 dark:bg-cyan-500 dark:border-cyan-800">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                Create and account
              </h1>
              <Formik
                initialValues={defaultValue}
                validationSchema={validationSchema}
                onSubmit={register}
              >
                <Form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="bg-cyan-50 border text-cyan-900 sm:text-sm rounded-lg block w-full p-2.5"
                      placeholder="Enter Your Email"
                      required=""
                    />
                    <p className="text-danger text-red-500 text-center">
                      <ErrorMessage name="email" />
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter Your Password"
                      className="bg-cyan-50 border text-cyan-900 sm:text-sm rounded-lg block w-full p-2.5"
                      required=""
                    />
                    <p className="text-danger text-red-500 text-center">
                      <ErrorMessage name="password" />
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm password
                    </label>
                    <Field
                      type="confirm-password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="Confirm Your Password"
                      className="bg-cyan-50 border text-cyan-900 sm:text-sm rounded-lg block w-full p-2.5"
                      required=""
                    />
                    <p className="text-danger text-red-500 text-center">
                      <ErrorMessage name="confirmPassword" />
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <label
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the{" "}
                        <a
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-800 dark:text-gray-800">
                    Already have an account?{" "}
                    <a
                      href="/user/login"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login here
                    </a>
                  </p>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default SignUp;
