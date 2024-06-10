import { useEffect, useState } from "react";
import { auth } from "./init";
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const login = async (navigate) =>{
    try {
        const userCredentials = await signInWithPopup(auth, googleProvider);
        if (userCredentials.user) {

        }
      } catch (error) {
        console.error(error);
      }
}

export const logout = async () => {
  signOut(auth);
}

export const useUser = () => {

  const [user, setUser] = useState(auth?.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged( u => setUser(u));
  }, [])

  return user;
}

export const loginDefault = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error(error);
  }
};

export async function signupDefault(email, password) {
  try {
      const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
      );
      return userCredential.user;
    } catch (error) {
        console.error(error);
    }
}