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

    return (
        <>
            {
                user == null ?
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="pasword">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={createUser}>Create</button>
                    </div>
                 :
                <div>
                    {user.email}
                </div>
        }

        </>
    )
}

export default Firebaseauth