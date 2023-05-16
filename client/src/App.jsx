import Home from './components/Home';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

function App() {
  const element = useRoutes([
    { path: "/", element: <Home /> },
  ]);
  return element;
}

export default App
