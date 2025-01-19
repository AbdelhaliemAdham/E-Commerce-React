import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AllProducts, { loader as ProductLoader } from "./pages/AllProducts";
import About from "./pages/about";
import CartPage from "./pages/Cart-Page";
import { CartProvider } from "./store/CartContext";
import ProductDetails, {
  loader as ProductDetailsLoader,
} from "./pages/ProductDetails";
import { ThemeProvider } from "./store/ThemeContext";
import { SearchProvider } from "./store/SearchContext";
import { Helmet } from "react-helmet";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import LoginPage from "./pages/Login";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",

      element: <LoginPage />,
    },
    {
      path: "/register",

      element: <Register />,
    },
    {
      path: "allProducts",
      element: <AllProducts />,
      loader: ProductLoader,
    },
    {
      path: "allProducts/:productId",
      element: <ProductDetails />,
      loader: ProductDetailsLoader,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "cart",
      element: <CartPage />,
    },
  ],
  {
    basename: "/E-Commerce-React",
  }
);

function App() {
  return (
    <SearchProvider>
      <Helmet>
        <title>E-Commerce</title>
        <meta
          name="description"
          content="this is E-Commerce Web made by Abdelhaleim Adham"
        />
      </Helmet>
      <ThemeProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ThemeProvider>
    </SearchProvider>
  );
}

export default App;
