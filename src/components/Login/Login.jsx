import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import { useState } from "react";


const Login = () => {


    const googleSignInProvider = new GoogleAuthProvider();
    const githubSignInProvider = new GithubAuthProvider();

    const [user, setUser] = useState('')


    const handellogginWithGoogle = () =>{
        signInWithPopup(auth, googleSignInProvider)
        .then((result) => {
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error => {
            console.log("ERROR", error)
        })
    }

    const handelLogOut = () => {
        signOut(auth)
        .then (() => {
            setUser('')
        })
        .catch((error) => {
            console.log("ERROR", error)
        })
    }

    const handellogginWithgithub = () =>{
        signInWithPopup(auth, githubSignInProvider )
        .then((result) => {
            setUser(result.user)
            console.log(result)
        })
        .catch(error => {
            console.log('ERROR', error)
        })
    }



    return (
        <div style={{'marginTop':'30px'}}>

            {
                   
                user ?<button onClick={handelLogOut}>Logout</button>:
                 <>
                 <button onClick={handellogginWithGoogle}>Loggin With Google</button>
                 <button onClick={handellogginWithgithub}>Loggin With Github</button>
                 </>
                   
            }
            {
                user && <div>
                <h2>Name: {user.displayName}</h2>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>   
            }

        </div>
    );
};

export default Login;