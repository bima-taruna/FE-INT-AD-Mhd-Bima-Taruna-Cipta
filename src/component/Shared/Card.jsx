function Card({ wide = "w-full", children, border }) {
  return (
    <div
      className={`w-full ${wide} ${border} relative flex flex-col bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700`}
    >
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">{children}</div>
    </div>
  );
}

export default Card;
