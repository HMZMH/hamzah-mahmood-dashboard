import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthenticatedApp from "./AuthenticatedApp";
import Login from "./Login";
import { auth } from "./firebase";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
      <Router>
      <Routes>
        <Route path="/" element={user ? <AuthenticatedApp /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
