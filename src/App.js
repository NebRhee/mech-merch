import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./HomePage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <div>Hello World</div> },
    {
      path: "/home",
      element: <HomePage></HomePage>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
