import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import db, {auth, provider} from "./firebase";
import {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
function App() {

    const [rooms, setRooms] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    // console.log("THIS IS LOCAL STORAGE", user);
    // const [user] = useAuthState(auth);

    const getChannels = () => {
        db.collection('rooms').onSnapshot(snapshot => {
            setRooms(snapshot.docs.map((doc) => {
                return {id: doc.id, name: doc.data().name}
            }))
        })
    }

    const signOut = () => {
        auth.signOut().then(() => {
            // forthe local storage
            setUser(null);
            localStorage.removeItem('user')
        })
    }

    useEffect(() => {
        getChannels();
    }, [])


  return (
    <div className="app">
        <Router>
            {!user ? (<Login setUser={setUser} />) : (
            <Container>
                <Header signOut={signOut} user={user} />
                <Main>
                    <Sidebar rooms={rooms} />
                    <Switch>
                        <Route path="/room/:channelId">
                            <Chat user={user}  />
                        </Route>

                        <Route path="/">
                            <h1>Select or create the channel 🚀</h1>
                        </Route>
                    </Switch>
                </Main>
            </Container>
            )}
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
