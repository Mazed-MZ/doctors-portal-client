import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

export default function AuthProvider({children}) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const updateUser = (userInfo) =>{
    return updateProfile(auth.currentUser, userInfo);
  }

    const createUser = (email, password) =>{
      setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signin = (email, password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () =>{
      setLoading(true);
      return signOut(auth);
    }

    useEffect( () =>{
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);
      })
      return () => unsubscribe();
    })

    const authInfo = {
        createUser,
        signin,
        logout,
        updateUser,
        user
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
