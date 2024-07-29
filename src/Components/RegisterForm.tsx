import { Formik } from 'formik';
import * as Yup from "yup";
import { Link } from 'react-router-dom';

//componets
import { Input } from './ui/input';
import { Button } from './ui/button';

const RegisterForm = () => {
    const validationSchema = Yup.object({
        username: Yup.string()
          .min(3, "Username must be at least 3 characters")
          .required("Required"),
        phone: Yup.string()
          .matches(/^[0-9]+$/, "Phone number must be only digits")
          .min(8, "Phone number must be at least 8 digits")
          .required("Required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Required"),
      });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
    <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md ">
      <h1 className="text-2xl font-bold mb-6">Register</h1>
      <Formik
        initialValues={{username:'',phone:'', email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                name="username"
                placeholder="User Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.username && touched.username && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.username}
                </div>
              )}
            </div>
            <div>
              <Input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.phone && touched.phone && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </div>
              )}
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.email}
                </div>
              )}
            </div>
            <div>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.password && touched.password && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.password}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              >
                Submit
              </Button>
              <Link to="/login" className="w-full text-end">
                <span className="text-xs text-primary  underline cursor-pointer">
                Have account? Log in
                </span>
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  </div>
  )
}

export default RegisterForm