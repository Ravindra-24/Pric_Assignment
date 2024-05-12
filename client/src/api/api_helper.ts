import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL

export const createUser = () =>{
   return ` ${baseUrl}/user-createUser `
}

export const deleteUser = (userId:string) =>{
   return ` ${baseUrl}/user-deleteUser?userId=${userId} `
}

export const updateUser = () =>{
   return ` ${baseUrl}/user-updateUser `
}

export const getUser = () =>{
   return ` ${baseUrl}/user-getUser `
}