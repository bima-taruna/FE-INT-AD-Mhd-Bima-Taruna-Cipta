function TaskList() {
  return (
    <section className="pt-20 w-100 flex flex-col h-screen pb-8 px-8 md:pt-32">
      <button className="self-end font-bold bg-blue-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Add Task
      </button>
      <div className=" text-black flex flex-wrap mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam
        dolorum vel mollitia assumenda tenetur maxime asperiores eum modi
        labore, non cum iure quidem perspiciatis excepturi architecto inventore
        ipsam voluptatibus!
      </div>
    </section>
  );
}

export default TaskList;
