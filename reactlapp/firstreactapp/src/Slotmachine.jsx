import React from 'react';

const SlotM = (props) =>
{
    let x = props.x;
    let y = props.y;
    let z = props.z;

   
    //let {x,y,x} = props;




    if (x === y && y ===  z)
    {
        return (
            <>
             <div className="slot_inner">
              <h1 className = 'Birju'>{x} {y} {z}</h1>   
              <h1 className = 'Birju'>This is matching</h1>
              <hr className= 'line'></hr>

             </div>
            </>
        )
    }
    else
    {

        return (
            <>
             <div className="slot_inner">
              <h1 className = 'Birju'>{x} {y} {z}</h1>   
              <h1 className = 'Birju'>This is not matching</h1>
              <hr className= 'line'></hr>
             </div>
            </>
        )
    }
    
};


export default SlotM;