import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';

function Firebaseauth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');


    let createUser = async () => {
        let res = await auth.createUserWithEmailAndPassword(email, password);
        console.log(res);
        console.log(email);
    }

    useEffect(() => {
        let unsub = auth.onAuthStateChanged((user) => setUser(user))  // jabh bhi koe state change user ki toh user milega

        return () => {
            unsub(); // cleanup => jo bi event listner lagaye hai woh hat jange when componentwillmount(jabh component hatne vala hai)
        }
    },[])

    let logout = async() =>{
        await auth.signOut();
    }

    let signin = async() => {
        await auth.signInWithEmailAndPassword(email,password);
    }

    return (
        <>
            {
                user == null ?
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="pasword">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={signin}>Signin</button>
                    </div>
                 :
                <div>
                    {user.email}
                    <button onClick={logout}>Logout</button>
                </div>
        }

        </>
    )
}

export default Firebaseauth