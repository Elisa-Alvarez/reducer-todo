import React, {useState,useReducer} from 'react'
import { intialObj , reducers} from '../reducers/reducer'



const TodoList = () => {
    const [newItemValue, setNewItemvalue] = useState("");
    const [state, dispatch] = useReducer(reducers,  intialObj );
    console.log(state);

    
    const handleChange = e => {
        setNewItemvalue(e.target.value);
      };
    return(
        <div className='todo-container'>
          <div className='todo-input'>
             
              <label>Getting Stuff Done</label>
             
              <input type='text'name='newItemValue' placeholder='Important Stuff'value={newItemValue} onChange={handleChange}/>
              
              <button onClick={()=>dispatch({type:'TOGGLE_ADD', payload: newItemValue })} >Add Stuff</button>
          </div>
        
         <section className="list-container">
             {!state.done ?(
             <p onClick={()=>dispatch({type:'TOGGLE_DONE'})}>{state.item}</p>)
             : <p className="done" style={{textDecoration:'line-through'}}>{state.item}</p>
             }
            <div>
            <button onClick={()=>dispatch({type:'TOGGLE_CLEARDONE'})}>Clear Completed</button>
            </div>
         </section>
        </div>
    )
}

export default TodoList