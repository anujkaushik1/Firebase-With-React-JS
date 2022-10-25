import { async } from '@firebase/util';
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

    // useEffect(async()=>{

    //     // // let uid = 'XWSvaq9hHfSKosq5AQAE';
    //     // // // let data = await database.users.doc(uid).get();
    //     // // // console.log(data.data());

    //     // let data = await database.users.get();
    //     // data.forEach((obj)=> console.log(obj.data()))
    // })

    let update = async () =>{
        let uid = 'XWSvaq9hHfSKosq5AQAE';
        await database.users.doc(uid).update({
            name : name,
            age : age
        })
    }

    let deleteUser = async()=>{
        let uid = 'XWSvaq9hHfSKosq5AQAE';
        await database.users.doc(uid).delete();
    }

    return (
        <>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange = {(e) => setName(e.target.value)}/>
                <label htmlFor="age" >Age</label>
                <input type="number" value={age} onChange = {(e) => setAge(e.target.value)}/>
                <button onClick={update}>Create</button>
                <button onClick={deleteUser}>Delete</button>
            </div>

        </>

    )
}

export default Firestore