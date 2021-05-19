import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="app">
        <Router>
            <Container>
                <Header />
                <Main>
                    <Sidebar />
                    <Switch>
                        <Route path="/room">
                            <Chat />
                        </Route>

                        <Route route="/">
                            <Login />
                        </Route>
                    </Switch>
                </Main>
            </Container>
        </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: orange;
  display: grid;
  grid-template-rows: 38px auto;
`
const Main = styled.div`
  background-color: blue;
  display: grid;
  grid-template-columns: 260px auto;
`
