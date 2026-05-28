import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AddPage from "../pages/AddPage";
import DeletePage from "../pages/DeletePage";

const router = createBrowserRouter([
    {path: "/", element: <App />, children: [
        {index:true, element: <Home />},
        {path: "/cars/new", element: <AddPage />},
        {path: "/cars/delete", element: <DeletePage />},
    ]}
]);

export default router;