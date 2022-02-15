import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Employee from "./components/Employee";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Employee />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
