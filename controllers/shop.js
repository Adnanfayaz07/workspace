const Product = require('../models/product');
const cart =require('../models/cart');
const Cart = require('../models/cart');
exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then(products=>{
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  })
  .catch(err=>{console.log(err)})
}
exports.getproduct=(req,res,next)=>{
  const prodid=req.params.productid
  Product.findByPk(prodid)
  .then(product=>{
    res.render('shop/product-detail',{
      product:product,
      pageTitle:product.title,
      path:'/products'
    })
  })
  .catch(err=>console.log(err))
}

exports.postcart=(req,res,next)=>{
  const prodId=req.body.productId;
  let fetchedcart;
  let newquantity=1;
  req.user.getCart()
  .then(cart=>{
    fetchedcart=cart;
    return cart.getProducts({where:{id:prodId}})
})
.then(products=>{
  let product;
  if(products.length>0){
    product=products[0]
  }
  if(product){
    const oldquantity=product.cartItem.quantity;
    newquantity=oldquantity+1;
    return product;
  }
  return Product.findByPk(prodId)
})
.then(product=>{
  return fetchedcart.addProduct(product,{through:{quantity:newquantity}})
})
.then(()=>{
  res.redirect('/cart')
})
.catch(err=>console.log(err))
}
exports.postcartdeleteproduct=(req,res,next)=>{
  const prodId=req.body.productId;
  req.user
  .getCart()
      .then(cart=>{
        return cart
        .getProducts({where:{id:prodId}})
      })
        .then(products=>{
          const product=products[0];
         return product.cartItem.destroy();
        })
        .then(result=>{
          res.redirect('/cart')
        })
        .catch(err=>console.log(err))
  
}
 
exports.getIndex = (req, res, next) => {
  Product.findAll()
  .then(products=>{
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  })
  .catch(err=>{console.log(err)})

};

exports.getCart = (req, res, next) => {
  req.user
  .getCart()
      .then(cart=>{
        return cart
        .getProducts()
        .then(products=>{
        res.render('shop/cart', {
          path: '/cart',
          pageTitle: 'Your Cart',
          products: products,
        });
      })
      .catch(err =>console.log(err))
      })
      .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
