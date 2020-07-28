import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

export default compose(applyMiddleware(thunkMiddleware))(createStore)(reducers);    