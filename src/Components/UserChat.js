import React, { useEffect, useState } from 'react';
import fire from '../config/fire';
import { getFirestore, addDoc, collection, getDocs, query, orderBy, serverTimestamp, onSnapshot } from "firebase/firestore";

export default function UserChat() {
    let db = getFirestore();
    const [chatMessages, setChatMessages] = useState([])
    const [currentUser, setCurrentUser] = useState("user1")

    useEffect(() => {
        showMessages()
    },[])

    async function showMessages()
    {
        await onSnapshot(query(collection(db, "messages"), orderBy("createdAt")), (querySnapshot) => {
            let arr = []
            querySnapshot.forEach((dc) => {
                arr.push(dc.data().user+": "+dc.data().message)
            });
            setChatMessages(arr)
        });
    }

    async function sendMessage()
    {
        let Message = document.getElementById("inputMessage").value
        console.log(Message)
        await addDoc(collection(db, "messages"), {
            message: Message,
            user: currentUser,
            createdAt: serverTimestamp()
        });
        document.getElementById("inputMessage").value=""
        showMessages()
    }

    const handleChange = (e) => {
        let val = e.target.value
        setCurrentUser(val)
    }

    return (
        <div>
            <div class="container">
                <div style={{justifyContent:"center"}} class="row">
                    <div style={{border:"1px solid rgba(39,41,43,0.1)", justifyContent:"center"}}>
                        <div style={{height:"60px", border:"1px solid rgba(39,41,43,0.1)", justifyContent: "center", alignContent:"center"}} class="row">
                            <select class="form-select" aria-label="Select User" onChange={handleChange}>
                                <option value="user1" selected>User 1</option>
                                <option value="user2">User 2</option>
                            </select>
                            <div style={{justifyContent:"center", alignContent:"center", fontWeight:"bold"}} class="row">MessageBox</div>
                        </div>
                        <div style={{height:"866px", justifyContent:"center", alignContent:"center"}} class="row">{chatMessages.map((txt, index) => <p key={index}>{txt}</p>)}</div>
                        <div style={{height:"50px", justifyContent:"center", alignContent:"center"}} class="row">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Type your message..." aria-label="Recipient's username" aria-describedby="button-addon2" id="inputMessage"/>
                                <button class="btn btn-outline-primary" type="button" id="button-addon2" onClick={() => sendMessage()}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}