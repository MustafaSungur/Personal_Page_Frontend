import Navbar from "./components/Navbar";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div>
      <Navbar />
      {useRoutes(routes)}
    </div>
  );
}

export default App;
