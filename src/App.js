import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/users-action";
import Users from "./Components/Users";
import SearchBar from "./Components/SearchBar";
function App() {
  const dispatch = useDispatch();

  dispatch(fetchUsers());

  return (
    <div className=" ">
      <div>
        <SearchBar />
      </div>
      <div className="w-[90%] mx-auto">
        <Users />
      </div>
    </div>
  );
}

export default App;
