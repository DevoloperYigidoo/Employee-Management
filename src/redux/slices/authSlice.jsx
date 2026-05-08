import { createSlice } from '@reduxjs/toolkit'

const getUsersFromStorage = () => {
    const savedUsers = localStorage.getItem("users");

    return savedUsers ? JSON.parse(savedUsers) : [];

}

const getCurrentUserFromStorage = () => {
    const savedCurrentUsers = localStorage.getItem("currentUser");

    return savedCurrentUsers ? JSON.parse(savedCurrentUsers) : null;

}


const initialState = {
    users:getUsersFromStorage(),
    currentUser:getCurrentUserFromStorage()
}

const writeUserToStorage = (user) => {
    localStorage.setItem("users",JSON.stringify(user));
}

const writeCurrentUserToStorage = (currentUser) => {
    localStorage.setItem("currentUser",JSON.stringify(currentUser));
}



export const authSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        addNewUser:(state,action) => {
            state.users = [...state.users,action.payload];
            writeUserToStorage(state.users);
        },
        setCurrentUser:(state,action) => {
            state.currentUser = action.payload;
            writeCurrentUserToStorage(state.currentUser)
        },
        deleteCurrentUser:(state) => {
            state.currentUser = null;
            writeCurrentUserToStorage(state.currentUser)
        }
    }
})

export const {addNewUser,setCurrentUser,deleteCurrentUser} = authSlice.actions

export default authSlice.reducer