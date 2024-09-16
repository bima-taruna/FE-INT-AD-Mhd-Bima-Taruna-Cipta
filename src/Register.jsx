import { useState } from "react";
import Card from "./component/Shared/Card";
import Input from "./component/Shared/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append(
      "password_confirmation",
      formData.password_confirmation
    );

    for (let [key, value] of formDataToSend.entries()) {
      console.log(`${key}: ${value}`);
    }

    await axios
      .post(`${import.meta.env.VITE_API_URL}/register`, formDataToSend)
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((error) => {
        setValidation(error.response.data);
      });
  };

  const handleChange = (e) => {
    console.log(formData);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Simple To Do
        </a>
        <Card>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Silahkan Registrasi Akun
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <Input
              name={"name"}
              type={"text"}
              placeholder={"masukkan nama anda"}
              isRequired={true}
              onChange={handleChange}
              validationData={validation.name}
            />
            <Input
              name={"email"}
              type={"email"}
              placeholder={"name@email.com"}
              isRequired={true}
              onChange={handleChange}
              validationData={validation.email}
            />
            <Input
              name={"password"}
              type={"password"}
              placeholder={"••••••••"}
              isRequired={true}
              onChange={handleChange}
              validationData={validation.password}
            />
            <Input
              name={"password_confirmation"}
              type={"password"}
              placeholder={"konfirmasi password anda"}
              isRequired={true}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full text-white font-bold bg-blue-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
          </form>
        </Card>
      </div>
    </section>
  );
}

export default Register;
