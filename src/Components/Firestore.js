import React, { useState, useEffect } from 'react'
import { database } from '../firebase';

function Firestore() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    let createUserDB = async() => {
        let res = await database.users.add({
            name : name,
            age : age
        })

        console.log(res);
    }

    return (
        <>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange = {(e) => setName(e.target.value)}/>
                <label htmlFor="age" >Age</label>
                <input type="number" value={age} onChange = {(e) => setAge(e.target.value)}/>
                <button onClick={createUserDB}>Create</button>
            </div>

        </>

    )
}

export default Firestore