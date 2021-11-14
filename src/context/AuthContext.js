import React, { useContext, useEffect, useState } from "react";
import { firebaseAuth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { Loading } from "../styledComps/Utilities";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    setPending(true);
    const unsub = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
        setPending(false);
      } else {
        setUser(null);
        setPending(false);
      }
    });
    return unsub();
  }, [user]);

  function SignUp(email, password) {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  }

  function updateDisplayName(name) {
    return updateProfile(firebaseAuth.currentUser, { displayName: name });
  }

  function Logout() {
    return signOut(firebaseAuth);
  }

  function Login(email, password) {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  }

  const value = {
    logout: Logout,
    signup: SignUp,
    login: Login,
    updateDisplayName,
    user,
    setUser,
  };
  if (pending) {
    return (
      <Loading>
        <h1>Loading...Please wait</h1>
      </Loading>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
