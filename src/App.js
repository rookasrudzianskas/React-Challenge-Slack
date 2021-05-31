import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import db from "./firebase";
import {useEffect, useState} from "react";
function App() {

    const [rooms, setRooms] = useState([]);

    const getChannels = () => {
        db.collection('rooms').onSnapshot(snapshot => {
            setRooms(snapshot.docs.map((doc) => {
                return {id: doc.id, name: doc.data().name}
            }))
        })
    }

    console.log(rooms);
    useEffect(() => {
        getChannels();
    }, [])


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
  display: grid;
  grid-template-rows: 38px auto;
`
const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`
