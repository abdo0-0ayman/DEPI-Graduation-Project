import express from 'express';
import router from 'express' ;  


const port = 5555  ; 
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})