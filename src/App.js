import { lazy, Suspense } from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ErrorBoundary from "./Components/ErrorBoundarys/ErrorBoundary";
import Spinner from "./Components/Spinners/Spinner";
import AuthProvider from "./Context/Auth";
import { themeContext } from "./Context/themeContext";
import { GlobalStyle } from "./GlobalStyle/LayoutStyle";
import { DarkTheem } from "./GlobalStyle/Theem";
import { BaseLayout } from "./layout/BaseLayout";
import { BaseLayoutGust } from "./layout/BaseLayout";
import { RouteWrapper } from "./routes/RouteWrapper";




const Login = lazy(() => import("./Pages/Auth/Login"));
const Register = lazy(() => import("./Pages/Auth/Register"));
const CartsPage = lazy(() => import("./Pages/CartsPage"));
const Details = lazy(() => import("./Pages/Details"));
const Filter = lazy(() => import("./Pages/Filter"));
const Home = lazy(() => import("./Pages/Home"));


function App() {
  const [theem, setTheem] = useState(DarkTheem)
 
  return (
    <ThemeProvider theme={theem}>
      <Suspense fallback={<Spinner />}>
        <themeContext.Provider value={[theem, setTheem]}>
          <ErrorBoundary>
            <Router>
              <Switch>
                <AuthProvider>
                  <GlobalStyle />
                  <RouteWrapper path="/filter" exact component={Filter} layout={BaseLayout} />
                  <RouteWrapper path="/detils" exact component={Details} layout={BaseLayout} />
                  <RouteWrapper path="/carts" exact component={CartsPage} layout={BaseLayout} />
                  <RouteWrapper path="/" exact component={Home} layout={BaseLayout} />
                  <RouteWrapper path="/login" exact component={Login} layout={BaseLayoutGust} />
                  <RouteWrapper path="/register" exact component={Register} layout={BaseLayoutGust} />
                </AuthProvider>
              </Switch>
            </Router>
          </ErrorBoundary>
        </themeContext.Provider>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
