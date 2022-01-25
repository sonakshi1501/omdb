/* eslint-disable no-async-promise-executor */
/* eslint-disable no-unused-vars */
import userInfo from "../utils/userInfo";

const userBaseApi = "https://jsonplaceholder.typicode.com/users";

let userService = {
    loginUser: (email, password) => {
        return new Promise(async (resolve, reject) => {
            try{
                const response = await fetch(`${userBaseApi}?email=${email}`);
                if(response.status != 200) throw "Api Does not returned response";
                const users = await response.json();
                if(users.length <= 0) throw "No Such User exist with This Email and Password";
                userInfo.setUser(users[0]);
                resolve({success: true, user: users[0]});
            }catch(e){
                reject({success: false, message: e});
            }
        });
    },
};


export default userService;