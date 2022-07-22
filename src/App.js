import { Notes } from "./Notes";
import { Outlet } from "react-router-dom";
import SearchPage from "./components/searchPage/SearchPage";

function App() {
  return (
    <>
      <SearchPage />
      <Outlet />
      {/* >>>>>>>>>>>>>>>> MUI NOTES <<<<<<<<<<<<<<<<<<<<<<<<<< */}
      {/* <Notes /> */}
    </>
  );
}

export default App;
