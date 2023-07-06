const express=require('express');
const app=express();
const mongoose=require('mongoose');
const { response } = require("express");
const bodyParser=require('body-parser')
const cors=require("cors");
const exp = require('constants');
const path = require('path');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname,'../Front/build')))
app.set('view engine','ejs')
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions)) 

//database connectivity-------------------------------------------------------------------------------------------------------------
mongoose.connect('mongodb+srv://AfterReact:AfterReact@cluster0.dllf1mj.mongodb.net/?retryWrites=true&w=majority');

const NoteSchema=mongoose.Schema({
    title:String,
    content:String
})
const Note=mongoose.model("Note",NoteSchema);
const DefNote=new Note({
    title:"this is the title",
    content:"This is the content"
})
// DefNote.save();
//====================================================================================================================================

app.get("/api",function(req,res){
  
   Note.find(function(err,foundItems){

    // console.log(foundItems)
    //    foundItems.map(item=>{
       
    //  console.log(foundItems);
     
     
    // });
    
    // res.render("index",{newItems:foundItems})
    res.send(foundItems)
    })
});
   
app.post("/api",function(req,res){
    console.log("req rec");
    // res.send("request received"+req.body.Item)
    const newNote=new Note({
        title:req.body.title,
        content:req.body.content
    })
    newNote.save();
    res.redirect("/api")
})
app.delete("/api:noteTitle",function(req,res){
  console.log(req.params.noteTitle);
})

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../Front/build",'index.html'))
})


   
const port=  7000
app.listen(port,function(){

    console.log("server is running and up my darling 💕 the port"+port);
})