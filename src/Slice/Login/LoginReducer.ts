import { createSlice } from "@reduxjs/toolkit";

export const LoginReducer:any = createSlice({
    name:'LoginData',
    initialState: {
        userdata :null,
        isSignUp : false
    },
    reducers:{
        setUserData : (state, action)=>{
            state.userdata = action.payload.userdata
        },
        setIsSignUp:(state, action) =>{
            state.isSignUp = action.payload.isSignUp
        }
    }
});

export const {setUserData, setIsSignUp} = LoginReducer.actions;

export default LoginReducer.reducer;