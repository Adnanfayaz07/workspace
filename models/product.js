const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const Product=sequelize.define('product',{
  id:{
    type:Sequelize.INTEGER,
    autoincrement:true,
    allowNULL:false,
    primaryKey:true
  },
  title:Sequelize.STRING,
  price:{
    type:Sequelize.DOUBLE,
    allowNULL:false
  },
  imageUrl:{
    type:Sequelize.STRING,
    allowNULL:false
  },
  description:{
    type:Sequelize.STRING,
    allowNULL:false
  }
});

module.exports=Product