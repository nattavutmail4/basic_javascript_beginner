const express  = require('express')
const ejs = require('ejs')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const session = require('express-session')

const  db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"node_project",
    charset:"utf8"
})
// connect ฐานข้อมูลสำเร็จไหม
db.connect((error)=>{
    if(error) {
        console.log(error.stack);
    }
});

// function
const isProductInCart =(cart,id)=>{
  for(let i = 0; i < cart.length; i++){
      if(cart[i].id == id){
         return true
      }
  }
  return false
}

const calculateTotal = (cart,req)=>{
    console.log(req);
    total = 0
    for(let i =0; i<cart.length; i++){
        // if we're offering a discounted price
        if(cart[i].sale_price){
            total = total + (cart[i].sale_price * cart[i]*quantity)
        }else{
            total = total + (cart[i].price * cart[i]*quantity)
        }
    }
    req.session.total = total
    return total
}

app.use(express.static('public'))
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({secret:"secret"}))

app.get('/',(req,res)=>{
   db.query('SELECT * FROM products',(err,result)=>{
        if(!err){
            res.render('pages/index',{result:result})
        }else{
            console.log(err);
        }
   })
})

app.get('/about',(req,res)=>{
   res.render('pages/about')
})
app.get('/brand',(req,res)=>{
   res.render('pages/brand')
})
app.get('/special',(req,res)=>{
   res.render('pages/special')
})
app.get('/contact',(req,res)=>{
    res.render('pages/contact')
})

app.post('/add_to_cart',(req,res)=>{
    const product = {
        id:req.body.id,
        name:req.body.name,
        price:req.body.price,
        sale_price:req.body.sale_price,
        quantity:req.body.quantity,
        image:req.body.image
    }
    if(req.session.cart){
        // console.log('e');
        var cart = req.session.cart

        if(!isProductInCart(cart,product.id)){
            cart.push(product)
        }
    }else{
        req.session.cart = [product]
        var cart = req.session.cart
    }
    // console.log(cart);
    //calculate total
    calculateTotal(cart,req)
    //return  to cart page
    res.redirect('/cart')
})

app.get('/cart',(req,res)=>{
    var cart  = req.session.cart
    var total = req.session.total
    res.render('pages/cart',{cart:cart,total:total})
})
app.listen(8080,()=>{console.log(`Start is server runing`);})
