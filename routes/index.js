const express=require('express');
const router=express.Router();
// const fetch_controller=require('../controllers/fetch_controller');

// router.get('/movies',fetch_controller.init);


router.get("/movies/:lang",function(req,res){
    console.log('hre')
    return res.json(req.params.lang)
});
// router.get('/movies/:genre',fetch_controller.init);

module.exports=router;