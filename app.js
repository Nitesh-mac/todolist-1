

const express = require("express");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewUrlParser:true});
const itemsSchema={
  name:String
};
const item=mongoose.model("list",itemsSchema);
const item1=new item({
  name:"Buy Food"

});
const item2=new item({
  name:"Cook Food"

});
const item3=new item({
  name:"Eat Food"

});
const defaultitems=[item1,item2,item3];


app.get("/", function(req, res) {


  item.find({},function(err,founditems){
    if(founditems.length==0)
    {
      item.insertMany(defaultitems,function(err){
        if(err)
        console.log("error");
        else
        console.log("saved succesfully");
      });
      res.redirect("/")


    }
    else{
    res.render("list", {listTitle: day, newListItems: founditems});
  }

  });



const day = date.getDate();



});

app.post("/", function(req, res){

  const iteming = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(iteming);
    res.redirect("/work");
  } else {
    const item4=new item({
      name:iteming

    });
    item4.save();

    res.redirect("/");
  }
});
app.post("/delete",function(req,res){
  const dlt=req.body.checkbox;
  item.findByIdAndRemove(dlt,function(err){
    if(!err)
    {
      console.log("deleted successfully");
      res.redirect("/")
    }

  });

});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
