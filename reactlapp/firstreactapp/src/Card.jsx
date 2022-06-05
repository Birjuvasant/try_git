import React from 'react';



function Card(props){

    return(
        <>

 
<div className="img_div1">       
 <div className ="cards">
  <div className ="card">
    <img src ={props.imgsrc} alt="myPic" className="card_img"/>
    <div className="card_info">
        <span className ="card_category">{props.title}</span> 
        <h3 className="card_title"></h3>

        <span className ="card_namecategory">{props.sname}</span> 
        <h3 className="card_sname"></h3>

        <a href={props.link} target="_blank">
          <button>Watch Now</button>
        </a>
    </div>
  </div>
 </div>
 </div>



 <div className="img_div1">       
 <div className ="cards">
  <div className ="card">
    <img src ={props.imgsrc} alt="myPic" className="card_img"/>
    <div className="card_info">
        <span className ="card_category">{props.title}</span> 
        <h3 className="card_title"></h3>

        <span className ="card_namecategory">{props.sname}</span> 
        <h3 className="card_sname"></h3>

        <a href={props.link} target="_blank">
          <button>Watch Now</button>
        </a>
    </div>
  </div>
 </div>
 </div>




 <div className="img_div1">       
 <div className ="cards">
  <div className ="card">
    <img src ={props.imgsrc} alt="myPic" className="card_img"/>
    <div className="card_info">
        <span className ="card_category">{props.title}</span> 
        <h3 className="card_title"></h3>

        <span className ="card_namecategory">{props.sname}</span> 
        <h3 className="card_sname"></h3>

        <a href={props.link} target="_blank">
          <button>Watch Now</button>
        </a>
    </div>
  </div>
 </div>
 </div>






 </>
 )
}
    

export {Card}; 