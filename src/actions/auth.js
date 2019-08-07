import {firebase, googleAuthProvider} from '../firebase/firebase'

export const Login = (uid)=>{
    return{
        type :'LOGIN',
        uid
    }
}

export const LogOut = ()=>{
    return{
        type :'LOGOUT'
    }
}

export const AuthoriseUser = ()=>{
    return () =>{
        console.log(googleAuthProvider)
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const LogOutUser = ()=>{
    return ()=>{
        return firebase.auth().signOut()
    }
}