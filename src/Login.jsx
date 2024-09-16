import { Link, useNavigate } from "react-router-dom";
import Input from "./component/Shared/Input";
import Card from "./component/Shared/Card";
import { useState } from "react";
import axios from "axios";
import WideButton from "./component/Shared/WideButton";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);

    await axios
      .post(`${import.meta.env.VITE_API_URL}/login`, formDataToSend)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        setValidation(error.response.data);
      });
  };

  const handleChange = (e) => {
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
            Silahkan login ke akun anda
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
            <WideButton text={"Login"} type={"submit"} />
          </form>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Belum punya akun? Silahkan
            <Link
              className="font-medium text-blue-600 hover:underline dark:text-blue-500 mx-2"
              to="/register"
            >
              Registrasi
            </Link>
            Terlebih dahulu
          </p>
        </Card>
      </div>
    </section>
  );
}

export default Login;
