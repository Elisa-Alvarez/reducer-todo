import {v4 as uuidv4} from 'uuid'
export const intialObj = {
    item: '',
    done: false,
    id: uuidv4() ,
  }

export const reducers = (state,action)=>{
 switch(action.type){
     case `TOGGLE_ADD`:

         return {
            ...state,
            item: action.payload,
            id: uuidv4(),
            
        };
      case 'TOGGLE_CLEARDONE':
       
      return{
        ...state,
       item:'',
        
      };

      case 'TOGGLE_DONE':
        return{
          ...state,
          done: true,
         
        }
   default:
      return state;
    };
}
