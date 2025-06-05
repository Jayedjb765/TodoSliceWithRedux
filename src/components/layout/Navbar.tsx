import { MdMenuBook } from "react-icons/md";
const Navbar = () => {
  return (
    <div>
      <nav className="max-w-7xl max-auto h-16 flex items-center gap-3  px-5">
        <div className="flex items-center">
          <MdMenuBook className="text-3xl" />
          <span
            className="font-bold ml-2
          "
          >
            Task
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
