import React from 'react'
import './contact-form.css'
import { useState, useEffect,useLayoutEffect} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; //v9
import 'firebase/compat/auth'; //v9
import { doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { collection, query, where, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAnfrliVRzhAKeyY_tVn2-9wv-k9RdmF74",
  authDomain: "formdata-1528a.firebaseapp.com",
  projectId: "formdata-1528a",
  storageBucket: "formdata-1528a.appspot.com",
  messagingSenderId: "1061031600994",
  appId: "1:1061031600994:web:c2f2a5a7e9ddb50fcdc23b"
};

// fetchDAta


// // Initialize Firebase

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const ContactForm = () => {

    const [user,setUser] = useState({
        firstName:"",
        lastName:"",
        subject: "",
        email:"",
    });

    const[newData,setNewData] = useState([]);
    let name,value;
    const getUserData = (event)=>{
        name=event.target.name;
        value=event.target.value;
        setUser({...user,[name]:value})
    }

    const [dataLoad,setDataLoad] = useState(true);

    // useEffect(() => {
    //     db.collection("FormData").get().then((querySnapshot) => {
            
    //         // Loop through the data and store
    //         // it in array to display
    //         querySnapshot.forEach(element => {
    //             var data = element.data();
    //             setNewData(arr => [...arr , data]);
                 
    //         });
    //     })
    // }, [])

    const postData = (e) =>{
        e.preventDefault();
        
        db.collection("FormData").add({
            FirstName:user.firstName,
            LastName:user.lastName,
            Subject:user.subject,
            Email:user.email,
        })
        .then((docRef) => {
            console.log("Data Successfully Submitted");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        setUser({
            firstName:"",
            lastName:"",
            subject: "",
            email:"",
        });
        setDataLoad(false);

        fetchData();
    }


    // const fetchData =()=>{
    //     setTimeout(() => {
    //         db.collection("FormData").get().then((querySnapshot) => {
            
    //             // Loop through the data and store
    //             // it in array to display
    //             querySnapshot.forEach(element => {
    //                 var data = element.data();
    //                 setNewData(arr=>[...arr, data]);
                     
    //             });

                
    //         })
    //         setDataLoad(true);

    //     }, 3000);
    // }
    

  
    const fetchData = async () => {
       
        await getDocs(collection(db, "FormData"))
            .then((querySnapshot)=>{               
                const data = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setNewData(data);               
                console.log(newData, data);
            })
            setDataLoad(true);
       
    }

    return (
        <div className="contactPage">
            <h1>Welcome To Contact Page</h1>
            <div className="form">
                    <form action="" method="post">
                        <div>
                            <input type="text" placeholder="First Name" name="firstName" value={user.firstName} onChange={getUserData} />
                            <input type="text" placeholder="Last Name" name="lastName" value={user.lastName} onChange={getUserData} />
                            <input type="text" placeholder="Subject" name="subject" value={user.subject} onChange={getUserData} />
                            <input type="email" placeholder="Email" name="email" value={user.email} onChange={getUserData} />

                        </div>
                        <button type="submit" onClick={postData}>Submit</button>
                   
                    </form>
            </div>
            <br />
            <br />
            <div>
               
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col ">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name </th>
                        <th scope="col">Subject</th>
                        <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                   {
                       dataLoad ? ( newData.map((item,index)=>{
                        return(
                            <tr>
                            <th scope="row">{index}</th>
                            <td>{item.FirstName}</td>
                            <td>{item.LastName}</td>
                            <td>{item.Subject}</td>
                            <td>{item.Email}</td>
                            </tr>
                        )})) : <h3>Loading ...</h3>
                   }
                    
                    </tbody>
                </table>
                   
              
            </div>
            <br />
            <br />
            
        </div>
    )
}
