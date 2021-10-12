import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase-initiazation"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider;
    ;
    const gitHubProvider = new GithubAuthProvider;
    ;
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user);
            })
            .catch(error => {
                setError(error.massage);
            })

    }
    const signInUsingGitHub = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user);
            })
            .catch(error => {
                setError(error.massage);
            })

    }


    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("set inside state change", user)
                setUser(user)
            }
        })
    }, [])
    return {
        // we can return more than one things using {} in return 
        user,
        error,
        signInUsingGoogle,
        signInUsingGitHub,
        logOut
    }
}
export default useFirebase;