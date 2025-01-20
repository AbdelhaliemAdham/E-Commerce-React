import "./index.css";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
]);

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
