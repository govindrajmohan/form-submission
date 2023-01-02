// import React from 'react'
// import './contact-form.css'
// import { useState, useEffect} from 'react';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore'; //v9
// import 'firebase/compat/auth'; //v9
// import { docRef, getDoc } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyB2qCIWuajP8iH6fGtxDV9_LvZ4hCmvyLE",
//     authDomain: "fetchdata-48fac.firebaseapp.com",
//     projectId: "fetchdata-48fac",
//     storageBucket: "fetchdata-48fac.appspot.com",
//     messagingSenderId: "990717463792",
//     appId: "1:990717463792:web:574a32b440d3bb925d8635"
//   };
  

// // // Initialize Firebase



// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();


// export const Firestore = () => {


    

//     const [name  , setName] = useState("");
//     const [age , setAge] = useState("");
//     const [course , setCourse] = useState("");
//     const [info , setInfo] = useState([]);
//     const sub = (e) => {
//         e.preventDefault();
         
//         // Add data to the store
//         db.collection("todo").add({
//             Name: name,
//             Age: age,
//             CourseEnrolled: course
//         })
//         .then((docRef) => {
//             console.log("Data Successfully Submitted");
//         })
//         .catch((error) => {
//             console.error("Error adding document: ", error);
//         });

//         db.collection("todo").get().then((querySnapshot) => {
            
//             // Loop through the data and store
//             // it in array to display
//             querySnapshot.forEach(element => {
//                 var data = element.data();
//                 setInfo(arr => [...arr , data]);
                 
//             });
//         })
//     }

   
//     return (
//         <div>
//         <center>
//             <form style={{marginTop:"50px" }}
//               onSubmit={(event) => {sub(event)}}>
//                 <input type="text" placeholder="your name"
//                   onChange={(e)=>{setName(e.target.value)}} />
//                   <br/><br/>
//                 <input type="number" placeholder="your age"
//                   onChange={(e)=>{setAge(e.target.value)}}/>
//                   <br/><br/>
//                 <input type="text" placeholder="Course Enrolled"
//                   onChange={(e)=>{setCourse(e.target.value)}}/>
//                   <br/><br/>
//                 <button type="submit" onClick={sub}>Submit</button>
//             </form>
//             <div>
//         {info.map((data,index)=>{
//             return(
//                 <ul>
//                 <li key={index}>{data.Name}</li>
//                 <li key={index}>{data.CourseEnrolled}</li>
//                 <li key={index}>{data.Age}</li>

//                 </ul>
//             )
//         })}
//         </div>
//         </center>
        
//     </div>
//     )
// }

