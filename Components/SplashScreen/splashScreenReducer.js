const INITIAL_STATE={
    userRegistered:false,
    show:false,
}  
const SplashScreenReducer=(state=INITIAL_STATE,action)=>{
    var SPLASHSCREEN  = 'SPLASHSCREEN'
     switch (action.type) {
         case SPLASHSCREEN:
             return{
                  show:false, userRegistered:false
             }
         default:
             return state;
     }
}
export default SplashScreenReducer;
