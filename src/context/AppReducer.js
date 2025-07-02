export default (State, action) =>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...State,
                transactions: State.transactions.filter(transactions => transactions.id !==action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...State,
                transactions:[action.payload,...State.transactions]
            }
        default:
            return State;
    }
}