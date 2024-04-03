// var prompt=require('prompt-sync')();

// const age=prompt('enter your age');

// console.log(age);

// function add(a,b){
//     return a+b;
// }

// var add=function(a,b){
//     return a+b;
// }

// var add=(a,b)=>a+b;

// var res=add(5,9);
// console.log(res);

// (function(){
//     console.log('rohit');
// })();



// function callback(){
//     console.log('rohit is calling a callback function');
// }
// const add=function(a,b,callback){
//     var res=a+b;
//     console.log('res: ' ,res);
//     callback();
// }
// add(2,6,callback);


// const add=function(a,b,rohit){
//     var res=a+b;
//     console.log('res: ' ,res);
//     rohit();
// }

// add(2,6,function(){
//     console.log('add complete');
// });

// add(2,5,()=>console.log('add complete'));





const { log } = require('console');
// var fs=require('fs');
// var os=require('os');

// var user =os.userInfo();
// log(user.username);

// fs.appendFile('greetings.txt',`hello ${user.username}!\n`,()=>{
//     log('file created');
// })

// log(os);
// log(fs);






// log('node js file loaded');
// const notes=require('./notes');

// var age=notes.age;
// log(age);

// var res=notes.addNum(age+5,9);
// log('result is',res);






// var _=require('lodash');

// var data=["rohit","singh","nik",1,2,3,1,'name','rohit'];
// var filter=_.uniq(data);
// log(filter);

// log(_.isString('rohit'));





// const jsonString=`{"name":"rohit","age":24,"city":"delhi"}`;
// const jsonObject=JSON.parse(jsonString);
// log(jsonObject);


// const objToConvert={
//     name:"rohit",
//     age:24
// };

// const jsonString=JSON.stringify(objToConvert);
// log(jsonString);





const express = require('express')
const app = express();
const db=require('./db');


const MenuItem=require('./models/MenuItem');

const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World...Welcome on my Server')
})

app.get('/paneer',(req,res)=>res.send('sure...i would love to serve you paneer'))

app.get('/idli',(req,res)=>{
    var customized_idli={
        name:"rava idli",
        size:'10 cm of diameter',
        is_chutney:false,
        is_sambhar:true
    }
    
    
    res.send(customized_idli)
    // res.send('welcome to south india...love to serve IDLI')
})


//Import the router files
const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');

app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

app.listen(3000,()=>{
    log('Listening on port 3000')
})