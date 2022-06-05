import React from 'react'
import { useEffect, useState } from 'react';
import {db} from '../firebase-config';
import {collection, addDoc, getDocs, deleteDoc, updateDoc, doc, documentId, FieldPath, Firestore,setDoc, getDoc} from 'firebase/firestore';
//import flatpickr from "flatpickr";
import { Ref } from 'react';

export default function Homecomponent() {
    
    const [trains, setTrains] = useState([]);
   

    useEffect(() => {
        getTrains();
    }, []);
    
    
   

    const getTrains = async () => {
        const querySnapshot = await getDocs(collection(db, "Trains"));
        setTrains(querySnapshot.docs.map((doc) => ({
            ...doc.data()
            
            
        })));
        
    }

   

    return (
        <div>
            <div className="container">
                <div className="row">
                   
                    <div className="col">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">From</th>
                                    <th scope="col">To</th>
                                    <th scope="col">Departure</th>
                                  
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    trains.map((train) => {
                                        return (
                                            <tr>
                                                <td>{train.from}</td>
                                                <td>{train.to}</td>
                                                <td>{train.departure}</td>
                                               
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div> 
                </div>
            </div>
        </div>
    );
}
