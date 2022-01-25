import userInfo from "./userInfo";

const userLoggedin = () => {
    const user = userInfo.getUser();
    if(user && user.id > 0) return true;
    return false;
};

export default userLoggedin;