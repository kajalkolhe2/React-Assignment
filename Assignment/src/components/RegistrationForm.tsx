import axios from "axios";
import React, { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const RegistrationForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
  });

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
          "http://localhost:8080/register",
          formValues
        );
        setFormValues(response.data);
        console.log(response.data);
        console.log("Form submitted:", formValues);
        setFormValues({
          name: "",
          email: "",
          password: "",
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormValues> = {};
    if (!formValues.name) newErrors.name = "name is required";
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
      <div className="bg-gray-200  rounded-lg p-6 h-screen flex justify-center flex-col items-center  ">
        <div className="border-black border-2 rounded-lg p-6 px-16">
          <h2 className="mt-2 text-3xl font-semibold text-center mb-2">
            Registration Form
          </h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="text-lg font-medium ">Name : </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formValues.name}
                onChange={handleChange}
                className="border rounded py-2 w-full "
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <br />
            <div>
              <label className="text-lg font-medium">Email : </label>
              <input
                id="email"
                name="email"
                type="text"
                value={formValues.email}
                onChange={handleChange}
                className="border rounded py-2 w-full "
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <br />
            <div>
              <label className="text-lg font-medium">Password : </label>
              <input
                id="password"
                name="password"
                type="text"
                value={formValues.password}
                onChange={handleChange}
                className="border rounded py-2 w-full "
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>
            <br />
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

export default RegistrationForm;
