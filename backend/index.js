const port=2000;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const multer=require("multer");
const path=require("path");
const cors=require("cors");

app.use(express.json());
app.use(cors());
//database connection with mongodb
mongoose.connect("mongodb+srv://moviestackdiv:geri1996@cluster0.d7hydlz.mongodb.net/movies");


//api creation
app.get('/' ,(req , res)=>{
    res.send("Express App is Running")
})
//schema for creating products
const Product=mongoose.model("Product" , {
    id:{
        type:Number,
        required:true,

    },
    title:{
        type:String,
        required:true,

    },
    director:{
        type:String,
        required:true,

    },
    actors:{
        type:String,
        required:true,

    },
    plot:{
        type:String,
        required:true,

    },
    posterUrl:{
        type:String,
        required:true,
    },
    genres:{
        type:[String],
        required:true,
    },
    year:{
        type:Number,
        required:true,
    },
    runtime:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avilable:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct', async (req , res)=>{
    let products=await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0];
        id=last_product.id+1;
    } else{
        id=1;
    }
    const product=new Product({
        id:id,
        title:req.body.title,
        director:req.body.director,
        actors:req.body.actors,
        plot:req.body.plot,
        posterUrl:req.body.posterUrl,
        genres:req.body.genres,
        year:req.body.year,
        runtime:req.body.runtime,

    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        title:req.body.title,
    })
})


//Image storage engine
const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req , file , cb)=>{
        return cb(null , `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload=multer({storage:storage})

// creating upload endpoint for images
app.use('/images' , express.static('upload/images'))
app.post("/upload" , upload.single('product'), (req , res)=>{
    res.json({
      success:1,
      image_url:`http://localhost:${port}/images/${req.file.filename}`
    })  
})



//creating api for deleting products
app.post("/removeproduct" , async (req , res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("removed");
    res.json({
        success:true,
        title:req.body.title
    })
})

// creaing api for getting all product
app.get("/allproducts" , async (req , res)=>{
    let products=await Product.find({});
    console.log("all products fetch");
    res.send(products);
})

app.listen(port ,(error)=>{
    if(!error){
        console.log("Server running in port"+port)
    } else{
        console.log("error:"+error)
    }
})

