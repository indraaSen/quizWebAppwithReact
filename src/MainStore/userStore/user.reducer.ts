import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name:'user-reducer',
    initialState: {
        userData: {name: 'no name'}
    },
    reducers:{
        setUserData : (state, action) =>{
            state.userData = action.payload.userData
        }
    }
});

export const {setUserData} = userReducer.actions;
export default userReducer.reducer;