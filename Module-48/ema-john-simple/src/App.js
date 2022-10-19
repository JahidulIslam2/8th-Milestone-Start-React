import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './layout/main/Main';
import Inventory from './component/inventory/Inventory';
import Order from './component/order/Order';
import About from './component/about/About';
import Shop from './components/Shop/Shop';
import { DataLoad } from './component/Api/DataLoad';
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "inventory",
          element: <Inventory></Inventory>
        },
        {
          path: "order",
          loader:DataLoad,
          element: <Order></Order>
        },
      {
        path:"shop",
        loader: ()=> fetch('products.json'),
        element:<Shop></Shop>
      },
      {
        path: "about",
        element: <About></About>
      }
    ]
      },
  ])
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
