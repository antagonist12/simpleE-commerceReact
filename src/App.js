import React, { useEffect } from "react";

// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Style
import "./App.css";

// Pages - Components
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Checkoutnote from "./pages/Checkoutnote";
import Login from "./components/Login";
import Register from "./components/Register";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // piece of code based on given condition
  useEffect(() => {
    // this is listener of sign in or sign out
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in...
        dispatch({
          type: "Set_User",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "Set_User",
          user: null,
        });
      }
    });

    return () => {
      // any cleanup opperations in here...
      unsubscribe();
    };
  }, []);

  console.log(user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            {/* localhost/vio-store/login */}
            <Login />
          </Route>
          <Route path="/register">
            {/* localhost/vio-store/register */}
            <Register />
          </Route>
          <Route path="/checkout">
            {/* localhost/vio-store/checkout */}
            <Checkout />
          </Route>
          <Route path="/checkoutnote">
            {/* localhost/vio-store/checkoutnote */}
            <Checkoutnote />
          </Route>
          <Route exact path="/">
            {/* localhost/vio-store/product */}
            {/* localhost/vio-store/detailproduct/(id) */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
