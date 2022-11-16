import React, { useState } from 'react'
import Cricketers from '../Cricketers';
import './Contact.css';
import { Link, useNavigate } from 'react-router-dom';


 const  Form =()=>{
  const [position, setposition] = useState('');
  const [player, setplayer] = useState('');
  const [rating, setrating] = useState('');
  const[role,setrole]=useState('');

  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = position, b = player, c = rating,d =role;
    Cricketers.push({ a, b, c, d });
    // console.log(Cricketers);
    alert("Thank You!")


  }

  return (
    <div>
      <h1 id="bsk">Contact Me </h1>
      <form className='containeri'>
      <label>Name</label><br></br>
        <input type="text"   placeholder='Enter Name' onChange={(e) => setplayer(e.target.value)} required></input><br></br>
        <label>Phone no.</label><br></br>
        <input type="number"   placeholder='Enter Phone no.' onChange={(e) => setposition(e.target.value)} required></input><br></br>
        <label>Company Name</label><br></br>
        <input type="etext" placeholder='Enter company' onChange={(e) => setrating(e.target.value)} required></input><br></br>
        <label >Work</label><br></br>
        <input type="text" placeholder='Enter Work' onChange={(e) => setrole(e.target.value)} required></input><br></br>

       
          <input className='btnop' type="submit" onClick={handleSubmit}></input>
        

      </form>

      {/* <img className='imagecup' src={cup}></img>
      <img className='image' src={cricketer}></img> */}

    </div>
  )
}
export default Form