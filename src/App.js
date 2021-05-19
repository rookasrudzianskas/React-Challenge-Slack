import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="app">
        <Router>
            <Switch>
                <Route path="/room">
                    Chat Page
                </Route>

                <Route route="/">
                    Login
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
