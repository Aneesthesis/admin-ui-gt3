import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/users-action";
import Users from "./Components/Users";
import SearchBar from "./Components/SearchBar";

function App() {
  const dispatch = useDispatch();

  dispatch(fetchUsers());

  return (
    <div className="App">
      <SearchBar />
      <Users />
    </div>
  );
}

export default App;
