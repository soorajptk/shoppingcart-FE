import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Category from "./pages/category/Category";
import ViewProduct from "./pages/ViewSingleProduct/ViewProduct";
import { useDispatch } from "react-redux";
import {
  fetchLinkData,
  fetchProducts,
  fetchSliderData,
} from "./apiCalls/apiCalls";
import Login from "./pages/login/Login";
import DashBoard from "./pages/dashboard/DashBoard";
import PrivateRoute from "./Auth";
import { useSelector } from "react-redux";
import ErrorC from "./pages/error/error";
import Cart from "./pages/CartPage/Cart";
import Register from './pages/register/register'
const App: React.FC = () => {
  const dispatch = useDispatch();
  const {
    genaralReducer: { errMsg },
  } = useSelector((state: any) => state);
  // const privateRoute=useAuth()
  useEffect(() => {
    dispatch<any>(fetchProducts());
    dispatch<any>(fetchSliderData());
    dispatch<any>(fetchLinkData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (errMsg) {
    return (
      <main>
        <Header />
        <ErrorC/>
        <Footer />
      </main>
    );
  }
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path={"/dashboard"}>
          <DashBoard />
        </PrivateRoute>
        <PrivateRoute path={"/cart"}>
          <Cart />
        </PrivateRoute>
        <Route path="/category/:item" component={Category} />

        <Route path="/product/:id" component={ViewProduct} />
        <Route path="/register" component={Register} />
      </Switch>

      <Footer />
    </main>
  );
};
export default App;
