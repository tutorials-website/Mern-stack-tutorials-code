var passCatModel = require('../../modules/password_category');
var passModel = require('../../modules/add_password');

const mongoose = require('mongoose');

exports.getCategory=function(req,res,next){

    var id=req.params.userid;
    var getPassCat= passCatModel.find({user_id:id},{'password_category':1,'_id':1});
    getPassCat.exec()
    .then(data=>{
        res.status(200).json({
            message:"OK",
            results:data
        });
    })
    .catch(err=>{
        res.json(err);
    })
    
    
    }

    // add category controller

    exports.addCategory=function(req,res,next){
       
        var passCategory=req.body.pass_cat;
        var user_id=req.body.user_id;

        var passCatDetails=new passCatModel({password_category:passCategory,user_id:user_id});
        passCatDetails.save()
        .then(doc=>{
            res.status(201).json({
                message:"Category Inserted Successfully",
                results:doc
            });
        })
        .catch(err=>{
            res.json(err);
        });
        
        
        }

        // add update put controller
        exports.addUpdateCategory=function(req,res,next){

            var id=req.params.id;
            var passCategory= req.body.pass_cat;
            passCatModel.findById(id,function(err,data){
        
             data.password_category=passCategory?passCategory:data.password_category;
                 data.save()
                 .then(doc=>{
                    res.status(201).json({
                        message:"Category Updated Successfully",
                        results:doc
                    });
                 })
                 .catch(err=>{
                     res.json(err);
                 })
        
            });
          
        
        }

        // update category controller
        exports.updateCategory=function(req,res,next){

            var id=req.body._id;
             var passCategory= req.body.pass_cat;
             passCatModel.findById(id,function(err,data){
         
              data.password_category=passCategory?passCategory:data.password_category;
             
                data.save()
                  .then(doc=>{
                     res.status(201).json({
                         message:"Category Updated Successfully",
                         results:doc
                     });
                  })
                  .catch(err=>{
                      res.json(err);
                  })
                 
             });
         
         }

         // delete category controller
         exports.deleteCategory=function(req,res,next){
            var cat_id=req.body.cat_id;
              passCatModel.findByIdAndRemove(cat_id)
              .then(doc=>{
               res.status(201).json({
                   message:"Category Deleted Successfully",
                   results:doc
               });
              })
              .catch(err=>{
                  res.json(err)
              })
           
           }