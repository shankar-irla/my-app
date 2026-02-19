import React,{useState,useEffect, use} from 'react';
const UseEffect=()=>{
  const [message,setMessage]=useState('Hi there,how are you?');
  useEffect(()=>{
    console.log('trigger use effect ook');
  })
  setTimeout(()=>{
    setMessage('I am fine, thank you!');
  },4000)
  return <h1>{message}</h1>
}
export default UseEffect;