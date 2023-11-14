import axios from "axios";

const api_key = "AIzaSyDQ4vzCnFNkbONlDM1-c2rRWnkZICJggzs";

export const createUser = async ({ email, password }) => {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + api_key,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
  
};
