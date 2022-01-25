const getUser = () => {
    let user = localStorage.getItem("user");
    if(user)
        user =  JSON.parse(user);
    return user;
};

const setUser = (user) =>{
    localStorage.setItem("user", JSON.stringify(user));
};

export default {
    getUser,
    setUser
};