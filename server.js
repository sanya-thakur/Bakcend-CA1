const express= require('express');
const app=express();
const port=3000;
app.use(express.json());
app.post('/signup',(req,res)=>{
    const {username, email, password, dob}=req.body;
    if (!username){
        return res.status(400).json({error: "Username cannot be empty"})
    }
    if (!email){
        return res.status(400).json({error: "Email cannot be empty"})
    }
    if (!dob || isNaN(Date.parse(dob))){
        return res.status(400).json({error: "Date of Birth is not valid"})
    }
    if(!password || password.length < 8 || password.length > 16){
        return res.status(400).json({ error: "Password length should be greater than 8 or less than or equal to 16"})
    }
    res.status(200).json({ message: "Signup successful" });
})

app.get("/",(req,res)=>{
    res.send('<h1>Welcome to the signup page</h1>')
})

app.listen(port, ()=>{
    console.log(`Signup page is running on http://localhost:${port}`);
});