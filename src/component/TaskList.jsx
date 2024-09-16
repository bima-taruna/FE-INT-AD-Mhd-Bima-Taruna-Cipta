import axiosInstance from "../helper/AxiosInstance";
import { useQuery } from "react-query";
import Card from "./Shared/Card";

function TaskList() {
  const fetchTasks = async () => {
    const { data } = await axiosInstance.get("/tasks");
    return data;
  };

  const { data, error, isLoading } = useQuery("tasks", fetchTasks);

  if (isLoading)
    return (
      <p className="w-100 text-black h-screen flex items-center justify-center">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="w-100 h-screen flex items-center justify-center">
        Error loading tasks
      </p>
    );

  return (
    <section className="pt-20 w-100 flex flex-col h-screen pb-8 px-8 md:pt-32">
      <button className="self-end font-bold bg-blue-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Add Task
      </button>
      <div className=" text-black flex flex-wrap mt-5 gap-2">
        {data && data.length > 0 ? (
          data.data.map((task) => (
            <Card key={task.id}>
              <p>{task.judul}</p>
              <p>{task.deskripsi}</p>
            </Card>
          ))
        ) : (
          <p className="text-black text-center w-full">Tidak ada data</p>
        )}
      </div>
    </section>
  );
}

export default TaskList;
