function NavBar({ onClick }) {
  return (
    <div className="fixed flex justify-between items-center top-0 left-0 bg-blue-400 w-screen py-4 px-6 md:py-8 md:px-8 ">
      <h5 className="font-bold">Simple To Do</h5>
      <button onClick={onClick}>Log out</button>
    </div>
  );
}

export default NavBar;
