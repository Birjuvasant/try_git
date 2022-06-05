import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import App from './App';
//import {Card} from './Card';
//import Sdata from './sdata';
import Netflix from './Netflix';
import Amazon from './Amazon';
import Todo from './Todo';



const favSeries = 'amazon';

//const FavS = () =>{

//if(favSeries == 'netflix')
//{
//return <Netflix/>;
//}
//else
//{
//return <Amazon/>;
    

//}
//}


const Appu = () =>
(
<>

{favSeries === "netflix" ? <Netflix/> : <Amazon/>}

<br/><br/>
<br/>



</>

);





function Appi(){
return(
 <>
 <App/>
 <br/> <br/> <br/>

 </>
 )
}


 //function ncard(val)
{
    
}//
    


//
    




ReactDOM.render(

<>

<Appi/>
<Todo/>
<Appu/>





</>
    , document.getElementById("root"));
