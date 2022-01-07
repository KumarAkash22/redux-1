const { createStore } = require("redux");
const action = {type : "inc", payload : 1};

// class Store{
//     constructor(reducer,init){
//         this.reducer = reducer;
//         this.state = init; 
//     }
//     getState(){
//         return this.state;
//     }
//     dispatch(action){
//        this.state =  this.reducer(this.state, action)
//     }
// }

const reducer = (state, {type,payload})=>{
    switch (type){
        case "inc":
        return{...state, count: state.count + payload}
    default:
        return state;
    }
}

const init = {count: 1};

const store = createStore(reducer, init);

console.log(store.getState());

store.dispatch({type: "inc", payload: 1});

console.log(store.getState());