import {
  BrowserRouter as Router,
    
  Switch,
} from "react-router-dom";
import { BaseLayout } from "./layout/BaseLayout";
import { BaseLayoutGust } from "./layout/BaseLayout";
 import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import CartsPage from "./Pages/CartsPage";
import Details from "./Pages/Details";
import Filter from "./Pages/Filter";
import Home from "./Pages/Home";
import { RouteWrapper } from "./routes/RouteWrapper";
function App() {
  return (
    <Router>
      <Switch>
        <RouteWrapper path="/" exact component={Home} layout={BaseLayout} />
        <RouteWrapper path="/login" exact component={Login} layout={BaseLayoutGust} />
        <RouteWrapper path="/register" exact component={Register} layout={BaseLayoutGust} />
        <RouteWrapper path="/filter" exact component={Filter} layout={BaseLayout} />
        <RouteWrapper path="/detils" exact component={Details} layout={BaseLayout} />
        <RouteWrapper path="/carts" exact component={CartsPage} layout={BaseLayout} />
      </Switch>
    </Router>
  );
}

export default App;
