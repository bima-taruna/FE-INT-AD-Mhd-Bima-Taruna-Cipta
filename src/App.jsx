import { useEffect } from "react";
import NavBar from "./component/Navbar";
import TaskList from "./component/TaskList";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./helper/AxiosInstance";

function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/", {
        replace: true,
      });
    }
  }, [navigate, token]);

  const handleLogout = async () => [
    await axiosInstance.post("/logout").then(() => {
      localStorage.removeItem("token");
      navigate("/", {
        replace: true,
      });
    }),
  ];

  return (
    <>
      <NavBar onClick={handleLogout} />
      <TaskList />
    </>
  );
}

export default App;
