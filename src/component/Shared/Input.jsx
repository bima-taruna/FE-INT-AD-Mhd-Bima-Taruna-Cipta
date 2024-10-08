function Input({
  name,
  type,
  placeholder,
  isRequired,
  onChange,
  validationData,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {name.charAt(0).toUpperCase() + name.slice(1)} :
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required={isRequired}
        onChange={onChange}
      />
      {validationData && (
        <div className="mx-4 text-red-500">{validationData[0]}</div>
      )}
    </div>
  );
}

export default Input;
