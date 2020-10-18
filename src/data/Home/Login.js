import React ,{useState} from 'react';
import '../../css/login.css';
import {useHistory} from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e =>{
        e.preventDefault(); 
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth =>{
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault(); 

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                //it succesfully created newv user with ermail and password
                console.log(auth);
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

    }
    return (
            <div className="id01">
                    <form className="modal-content animate">
                                <div className="container1">
                                    <label htmlFor="uname"><b>Username</b></label>
                                    <input className="usernameinput" type="text" placeholder="Enter Username" value={email} name="uname" onChange={e=>setEmail(e.target.value)} /><br></br>
                                    <label htmlFor="psw"><b>Password</b></label>
                                    <input className="passwordinput" type="password" placeholder="Enter Password" value={password} name="psw" onChange={e=>setPassword(e.target.value)} /><br></br>
                                    <button className="loginbutton" type="submit" onClick={signIn}>Login</button><br></br><br></br>
                                    <p>By continuing, you agree to Dataroid's Conditions of Use and Privacy Notice.</p>
                                </div>
                                <div className="container1" >
                                    <h5 >----------------New to Dataroid----------------</h5>
                                    <button className="forgetpassword" type="submit" onClick={register}>SignUp</button>
                                </div>
                    </form>
            </div>
    )
}

export default Login;
