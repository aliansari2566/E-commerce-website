import { Fragment, useContext } from "react";
import { noteContext } from "../../context/notes/notestate";
import { useNavigate } from "react-router-dom";
import { Form,Formik, Field, ErrorMessage } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase-config";
import * as yup from "yup";

const Login = () => {
  const { setloggin } = useContext(noteContext);
  const navigate = useNavigate();
  const login = async (values) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      setloggin(true);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const defaultValue = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Please Enter your Email")
      .email("Please Enter Valid Email"),
    password: yup.string().required("Please Enter Your Password"),
  });

  return (
    <Fragment>
      <section className="h-full bg-white">
        <div className="h-full">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <Formik
              initialValues={defaultValue}
              validationSchema={validationSchema}
              onSubmit={login}
            >
              <div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <Form className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="Email....."
                          
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                        />
                        <p className="text-danger text-red-500 text-center">
                          <ErrorMessage name="email" />
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Password
                        </label>
                        <p className="text-danger text-red-500 text-center">
                          <ErrorMessage name="password" />
                        </p>
                        <div className="text-sm">
                          <a
                            href="#"
                            className="font-semibold text-cyan-600 hover:text-cyan-500"
                          >
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div className="mt-2">
                        <Field
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                      type="submit"
                        className="flex w-full justify-center rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Log in
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </Formik>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Login;
