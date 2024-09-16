import { useState } from "react";
import Card from "./Shared/Card";
import Input from "./Shared/Input";
import WideButton from "./Shared/WideButton";
import axiosInstance from "../helper/AxiosInstance";
import { useMutation, useQueryClient } from "react-query";

function TaskModal({ onClose }) {
  const [formData, setFormData] = useState({
    judul: "",
    deskripsi: "",
  });

  const queryClient = useQueryClient();
  const [validation, setValidation] = useState([]);

  const addTask = async () => {
    const response = await axiosInstance.post("/tasks", formData);
    return response;
  };

  const mutation = useMutation(addTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
      onClose();
    },
    onError: (error) => {
      setValidation(error.response.data);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 px-6 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card>
        <button
          className="top-2 right-2 text-gray-600 hover:text-gray-900 absolute"
          onClick={onClose}
        >
          X
        </button>
        <h1 className="text-lg text-center font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
          Tambah Tugas
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <Input
            name={"judul"}
            type={"text"}
            placeholder={"masukkan judul tugas"}
            isRequired={true}
            onChange={handleChange}
            validationData={validation.judul}
          />
          <Input
            name={"deskripsi"}
            type={"text"}
            placeholder={"masukkan deskripsi"}
            isRequired={true}
            onChange={handleChange}
            validationData={validation.deskripsi}
          />
          <WideButton type={"submit"} text={"Tambah Tugas"} />
        </form>
      </Card>
    </div>
  );
}

export default TaskModal;
