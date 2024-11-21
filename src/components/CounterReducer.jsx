const intialState={count:0}

function counterReducer(state,action)
{
    switch (action.type) {
        case 'increment':
            return{count:state.count+1}
           
        case 'decreament':
            return{count:state.count-1}
        
        case'incrementByAmount':
            return{count:state.count + action.payload}
        
        
        case'decreamenttByAmount':
            return{count:state.count - action.payload}
    
        default:
            return state
            break;
    }
}
export {counterReducer,intialState}