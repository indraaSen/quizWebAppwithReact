export const  allUserData:any = [
    {
        fullName:"Dhinchak Pooja",
        email:"user1@gmail.com",
        password: "user1@gmail.com",
        department: "CS/IT",
        userType: 'user'
    },
    {
        fullName:"Kamlesh",
        email:"user2@gmail.com",
        password: "user2@gmail.com",
        department: "CS/IT",
        userType: 'user'
    },
    {
        fullName:"Anvish kumar",
        email:"admin@gmail.com",
        password: "admin@gmail.com",
        userType: 'admin'
        
    },
    {
        fullName:"Aaditya Kumar",
        email:"user3@gmail.com",
        password: "user3@gmail.com",
        department: "CS/IT",
        userType: 'user'
    }
];

export const checkUser = (email:string, password:string) =>{
    return new Promise((res, rej) =>{
        return setTimeout(() => { 
            const user = allUserData.filter((user:any) => {
                if(user.email === email && user.password === password){
                    return user;
                }
            });
            
            if(user.length > 0){
                res({code : 200, userData : user[0] , msg : "logged in"});
            }else{
                rej({code : 401, msg : "user not found"});
            }

        }, 500);
    })
}