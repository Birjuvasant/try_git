import React, { useState } from 'react';
import Heading from './Heading';
import Para from './Para';
import Ol from './Ol';
//import {youtuber1, myNames, BirjuVasant} from './App';
import * as ques from './App';
//import {youtuber} from "./App";
import add, {sub, mult, div} from './Cal';
import SlotM from './Slotmachine';
import Todo from './Todo';
import Todolistcompontent from './Todolistcompontent';
  


  












//console.log(state);

    //const name = ['vi', 'no', 'd'];

   //const[name1, name2, name3] = name;
   
   //name[name1]; 


    
    //let count =1;


  const Time = () =>
  {


     let newTime = new Date().toLocaleTimeString();


     const [ctime, settime] = useState(newTime);
     const UpdateTime = () =>
     {
       newTime = new Date().toLocaleTimeString();
       settime(newTime); 
    }
      return (
      <> 
        <div className='forms'>
        <h1 className='formsheader'> {ctime}</h1>
        <button onClick ={UpdateTime}>Get time</button>
        </div>
      </>


      )

  }


 







 
  const LiveTime = ()=>
  {
   
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);
     
    const LiveTime = () =>
    {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }


  setInterval (LiveTime, 1000  )
  
  return (
     <>
     <div className='forms'>
     <h1 className='formsheader'> {time} </h1>
     </div>
     </>

     )

  }



    

const Forms = () =>
{

 const [name, setName] = useState("Birju");
 const [fullName, setFullName] = useState();

  const inputEvent = (event)=>
  {
   console.log("event.target.value");
   setName(event.target.value);
  }
  const onSubmit = () =>
  {
      setFullName(name);
  }
    return (
    <>
        <div className='forms'>
        <h1 className='formsheader'>Hello {fullName} </h1>
        <input type="text" placeholder ="Enter your name"
         onChange ={inputEvent} />

         value = {name}
        <button onClick ={onSubmit} > Click Me</button>
        </div>
    </>
    );
}



const Appe = () =>
{
  
  const state = useState();
    
  const [count, setCount] = useState(50);

    const IncNum =() =>
    {
        setCount(count - 1);
        //console.log("clicked" + count++);
    };



 return(
 <>
  <div className='forms'>
  <h1 className='formsheader'> {count}</h1>  
  <button className='newbutton' onClick={IncNum}> Click Me</button>
  </div>
 </>

 );

};




const fname ="Birju";
//const currDate = new Date().toLocaleDateString(); 
//const CurrTime = new Date().toLocaleTimeString();
const img1 ="https://picsum.photos/200/300";
const img2 ="https://picsum.photos/250/300";
const img3 ="https://picsum.photos/300/300";
const links ="https://www.digitaltechiees.com";
const youtuber1="thapa technical";


const heading ={

 color: '#fa9191',
 textTransform: 'capitalize',
 textAlign: "center",
 fontWeight: "bold",
 margin:'50px 0',
}

;



function App ()
{

    let curDate =new Date(2021, 2, 12, 23);
    curDate = curDate.getHours();
    let greeting = '';
    let cssStyle = {};

    if(curDate >= 1 && curDate < 14){
        greeting ='Good Morning';
        cssStyle.color ='green';
    }else if (curDate>= 14 && curDate < 22)
    {
        greeting = "Good Afteroon";
        cssStyle.color ='orange';
    }else
    {
        greeting ="Good Night";
        cssStyle.color ="pink";
    }




   


    return (
   <>



    <h1 style = {heading}>My first name is {fname}   </h1>
    
    <hr className= 'line'></hr>
    <p className = 'Birju'>My first reat app </p>
    <br/><br/><br/><br/>
  
    <h1 style ={heading}>Welcome to <span style = { {fontWeight: 'bold'}}> Slot machine game </span></h1>
     <div className="slotmachine">

         <SlotM x = "Birju"/>
         <SlotM y = "Birju"/>
         <SlotM z = "Birju"/>

     </div>
    <SlotM/>
   
    <br/><br/> <br/>

   <h1 style = {heading} >Hello sir current time is <span style={cssStyle}> {greeting}</span></h1>
   <br/>
    <Heading/>
    <Para/>
    <Ol/>
   

    <p className = 'Birju'>{ques.youtuber1} </p>
    <p className = 'Birju'>{ques.myNames()}</p>
    <p className = 'Birju'>{ques.BirjuVasant()}</p>
    <br/> <br/> <br/>

    <p className = 'Birju'>{youtuber1} </p>
    <p className = 'Birju'>{myNames()}</p>
    <p className = 'Birju'>{BirjuVasant()}</p>
    
 
     <br/> <br/> <br/>

     <ul>
        <li  className = 'Birju'> Sum of two no is  {add (40, 4)}</li>    
        <li  className = 'Birju'> Sub of two no is  {sub (40, 4)}</li>    
        <li  className = 'Birju'> Multiplication of two no is  {mult (40, 4)}</li>    
        <li  className = 'Birju'> Divison of two no is  {div (40, 3)}</li>    

         
     </ul> 
     <br/> <br/> <br/>

     <div className="img_div">
   
   
   <img src={img1} alt="randomImages" />           
   <img src={img2} alt="randomImages" />
   <a href={links} target="_blank">
   <img src={img3} alt="randomImages" /> 
    </a>  
    </div> <br/><br/><br/>
   

   <div className="img_div">
   <img src={img1} alt="randomImages" />           
   <img src={img2} alt="randomImages" />
   <a href={links} target="_blank">
   <img src={img3} alt="randomImages" />
   </a>  
   </div>

   <br/><br/><br/>
   <Appe/>
   <Forms/>
   <Time/>
   <LiveTime/>
  
   
   


   </>


    )
}

function myNames ()
{
    let name = 'Birju'
    return name;
}

function BirjuVasant()
{
let names ='Birjut'
return names; 
}


export default App; 
export {youtuber1, myNames, BirjuVasant};
