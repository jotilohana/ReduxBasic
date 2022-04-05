// const Name = {
//     name:'jk',
//     email:'jklohana'
// }

// export default (STATE= Name) =>{
//     return STATE;
// }

import app_reducer from './app_reducer';
import Home_reducer from './Home_reducer';
import {combineReducers} from 'redux';

export default combineReducers({
  app: app_reducer,
  home: Home_reducer,
});
