// DEVELOPER : ABHISHEK V. SAVANI
// DATE : 23-01-2019

const  express = require('express');
const fs = require('fs');

const port = process.env.PORT || 3000;



var app = express();
app.use(express.static(__dirname + '/public'));
app.use((req,res,next1)=>{
    next1();
});

app.get('/' , (req,res) => {
    res.send({
        name : 'abhiraj',
        surname : 'savani',
        address: {
            area : 'bapunagae',
            city : 'ahmedabad',
        },
    });
});

app.get('/help',(req,res)=>{

});
app.listen(port,() => {
    console.log(`port number is ${port}`);
    
});
