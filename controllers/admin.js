const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing:false
   
  });
};
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null,title, imageUrl, description, price);
  product
  .save()
  .then(()=>{
    res.redirect('/');
  })
  .catch(err=>console.log(err))
 
};

exports.geteditProduct = (req, res, next) => {
  const editMode=req.query.edit;
  if(!editMode){
   return res.redirect('/')
  }
  const prodId=req.params.productId;
  Product.findbyid(prodId,product=>{
    if(!product){
      return res.redirect('/')
    }

  res.render('admin/edit-product', {
    pageTitle: 'Edit Product',
    path: '/admin/edit-product',
    editing:editMode,
    product:product
  })
  });
};

exports.posteditproducts=(req,res,next)=>{
  const prodId=req.body.productId;
  const updatedtitle=req.body.title;
  const updatedprice=req.body.price;
  const updatedimageurl=req.body.imageUrl;
  const updateddesc=req.body.description;
  const updatedproduct=new Product(prodId,
    updatedtitle,
    updatedprice,
    updateddesc,
    updatedimageurl
    );
  updatedproduct.save();
  res.redirect('/admin/products')
}




exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.postdeleteproduct =(req,res,next)=>{
  const prodId=req.body.productId;
  Product.deletebyid(prodId)
  res.redirect('/admin/products');
}
