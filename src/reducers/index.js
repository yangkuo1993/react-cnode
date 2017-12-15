import {combineReducers} from 'redux'
import * as types from '../constans/ActionTypes'
function listTopic(state = {list: []}, action) {
    switch (action.type) {
        case types.GET_TOPIC_LIST:
            return Object.assign({},state, {
                list: action.bklist
            });
        default:
            return state
    }
}
const App = combineReducers({
    listTopic
});
export default App