import React, { useState } from "react";
import HelloWorld from "../HelloWorld";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: "",
  });

  const [msg, setmsg] = useState("");
  const navigate = useNavigate();

  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          "http://localhost:8080/login",
          formValues
        );
        setFormValues({
          email: "",
          password: "",
        });
        if (response.data) {
          navigate("/");
        }
        console.log("Form submitted:", response.data);
      } catch (error) {
        setmsg("Invalid Credentials");
      }
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormValues> = {};
    if (!formValues.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formValues.password) newErrors.password = "Password is required";
    else if (formValues.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  return (
    <>
      <div className="bg-gray-200 h-screen rounded-lg p-6 flex justify-center flex-col items-center">
        <div className="border-black border-2 rounded-lg p-6">
          <h2 className="mt-2 text-3xl font-semibold">Login Page</h2>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="text-lg font-medium">Email : </label>
              <input
                id="email"
                name="email"
                type="text"
                value={formValues.email}
                onChange={handleChange}
                className="border rounded py-2 w-full mt-2"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label className="text-lg font-medium">Password : </label>
              <input
                id="password"
                name="password"
                type="text"
                value={formValues.password}
                onChange={handleChange}
                className="border rounded py-2 w-full mt-2"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>
            <br />
            <p>{msg}</p>
            <button
              type="submit"
              className="bg-blue-500 text-white px-3 py-1 mt-2 mb-2 rounded "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
