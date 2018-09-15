
import {FETCH_USER} from '../actions/types';
// when the app boots up we return a null
// if action.payload is empty wev return false
// if we get user we return the user data
export default function(state=null,action){
    console.log('action',action);
    switch(action.type){
         case FETCH_USER:
          return action.payload || false;

        default:
          return state;

    }
}