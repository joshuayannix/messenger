import React, { useEffect } from 'react';
import './App.css';
import Navbar from "./Navbar";
import ChatRoom from './ChatRoom';
import Login from './Login';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import { selectUser } from './features/userSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {    
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        // user is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
      <>
        <Navbar/>
        <section>
          <ChatRoom/>
        </section>
      </>
      ) : (
        <Login />
      )}  
    </div>       
  );
}

export default App;
