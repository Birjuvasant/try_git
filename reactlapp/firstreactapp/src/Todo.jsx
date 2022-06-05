import React, { useState } from 'react';
import Todolistcompontent from './Todolistcompontent';

const Todo = () =>
{

    const [inputList, setInputList] = useState("");
    const [Items, setItems]= useState([]);


    const itemEvent= (event) =>
    {
       setInputList(event.target.value);
    };


     const listOfItems = () =>
     {
      setItems ((oldItems) =>
      {
         return [...oldItems, inputList];
      });

      setInputList("");
     };



     const deleteItems = (id) =>
    {
        setItems ((oldItems) =>
        {
            return oldItems.filter((arrElem, index)=>{

           return index !== id;

            });
        });
    }
 
  return (
 <>
    <div className = 'main_div'>
      
      <div className="center_div">

        <br/>

        <h1>ToDO List </h1>
        <br/>
         
        <input type="text" placeholder='Add Items'
         value={inputList} onChange={itemEvent}/>
        <button onClick = {listOfItems}> + </button>


        <ol>
          <li> {inputList} </li>
          
         {Items.map ((itemval, index) =>
          {
             return <Todolistcompontent
              
              key= {index} id={index} text = {itemval}
              onSelect = {deleteItems}
              />;
          
          })}

        </ol>

      </div>

    </div>
 </>
)
};


export default Todo;