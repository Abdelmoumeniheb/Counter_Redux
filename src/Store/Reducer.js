const initialstate={
    count:0
}
const counter =(state=initialstate,action)=>{
    switch(action.type){
        case 'INC':return {...state,count:state.count+action.payload};
        case 'DEC':return {...state,count:state.count-action.payload};
        default : return state;
    }
}
export default counter;