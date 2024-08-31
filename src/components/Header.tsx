import { FcTodoList } from "react-icons/fc";
const Header = () => {
  return (
    <header>
      <h1 className="flex items-center gap-2 text-4xl text-black/70 font-bold">
        To-Do-List
        <FcTodoList />
      </h1>
    </header>
  );
};

export default Header;
