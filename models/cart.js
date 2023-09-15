const { json } = require('body-parser');
const { Console } = require('console');
const fs = require('fs');
const path = require('path');
const { uptime } = require('process');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports=class Cart{
    static addproduct(id, productprice){
    //fetch the previous cart
    fs.readFile(p,(err,filecontent) => {
        let cart={products: [], totalprice:0}
        if(!err){
            cart= JSON.parse(filecontent);
        }
        const existingproductindex=cart.products.findIndex(prod=>prod.id===id)
        const existingproduct=cart.products[existingproductindex]
        let updatedproduct;
        if(existingproduct){
            updatedproduct= { ...existingproduct };
            updatedproduct.qty=updatedproduct.qty + 1;
            cart.products=[...cart.products]
            cart.products[existingproductindex]=updatedproduct;
        }
        else{
            updatedproduct={ id: id , qty:1};
            cart.products=[ ...cart.products, updatedproduct]
        }
        cart.totalprice=cart.totalprice+ +productprice;
        fs.writeFile(p,JSON.stringify(cart),err=>{
            console.log(err);
        })
})
    
}
}