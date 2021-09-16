import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing } from "../../pages/landing/landing";
import { Bikes } from "../../pages/bikes/bikes";

export const RouteContainer = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/bikes" component={Bikes} />
        <Route component={Landing} />
      </Switch>
    </Router>
  );
};
