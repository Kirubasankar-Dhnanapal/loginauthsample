

const Reducers = (state, action) => {
    switch (action.type) {
        case 'login': return {
            // name: action.name,
            // password : action.password
        }
        case 'register': return {
        //    if(action.username && action.password){

        //    }
        }
        default: return {
            state
        }
    }
}

export default Reducers;