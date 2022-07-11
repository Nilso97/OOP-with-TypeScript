"use strict";
// Generics from TypeScript
function useState() {
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
const newState = useState();
// number
newState.setState(123);
console.log(newState.getState());
// string
newState.setState("Hello");
console.log(newState.getState());
