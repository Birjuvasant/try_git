import React from 'react';

const Todolistcompontent= (props) =>
{
  

    



     return (
     
     <>
      <div className="todo_style"> 
      <i className="fa fa-times" area-hidden="true"
     onClick = { () =>
        {
          props.onSelect(props.id); 
        }}

         />
  
     <li>{props.text}</li>
     </div>
      </>
     );

};

export default Todolistcompontent;