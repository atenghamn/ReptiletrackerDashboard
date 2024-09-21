const authHeader = () => {
    const user = localStorage.getItem('user');

    if (user !== null){
        const authToken = JSON.parse(user);
        if (authToken){
            return {Authorization: 'Bearer ' + authToken };
        }
    } else {
        return {};
    }
};

export default authHeader;