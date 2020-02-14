const  express=require('express')
const {MongoClient,ObjectID}=require('mongodb')
const bodyParser =require('body-parser')
const assert=require('assert')
const app= express()

app.use(bodyParser.json())

const mongo_url='mongodb://localhost:27017'
const dataBase ="first-api"

MongoClient.connect(mongo_url ,{useUnifiedTopology: true},(err,client)=>{
    assert.equal(err,null,"data base correction")

    const db = client.db(dataBase)
    console.log("connected")

    app.post("/new-contact",(req,res)=>{
        let newProduct=req.body
        db.collection('products').insertOne(newProduct).
            then(data=>res.send(data)).catch(err=>res.send("error")) 
            // 2ieme methode
        // db.collection('products').insertOne(newProduct,(err,data)=>{
        //     err?res.send("error add list"):res.send(`succes ${data}`)
    })
    app.get ("/list-contact",(req,res)=>{
            db.collection('products').find().toArray().then(data=>res.send(data)).catch(err=>res.send("cant not fetch contact list"))
        
    })
    app.get('/product/:id',(res,req)=>{
        let searchProductId=ObjectID(res.params.id)
        db.collection('products').findOne(searchProductId,(err,data)=>{
            if(err)res.send('cant fetch product')
            else res.send(data)
        })
    })
    app.put('/modify_products/:id',(req,res)=>{
        let id= ObjectID(req.params.id)
        let modifiedProduct=req.body
        db.collection('products').findOneAndUpdate({_id:id},{$set:{...modifiedProduct}},(err,data)=>{
            if(err)res.send('cant modify product')
            else res.send('product was modified')
        })
    })
    app.delete("/delete_product/:id",(req,res)=>{
        let idUser=ObjectID(req.params.id)
        db.collection('products').findOneAndDelete({_id:idUser},(err,data)=>{
            if(err)res.send('cant delete the product')
            else res.send('products was deleted')
        })
    })

    
})


// const tab=[
//     { name:"product1",
//     price:20,
//     qty:10
//     },
//     { name:"product2",
//     price:50,
//     qty:5
//     },
//     { name:"product3",
//     price:10,
//     qty:0
//     }
// ]





app.listen(5001,(err)=>{
    err?console.log('server is not runnig'):console.log('server is runnig in port 5001')
})