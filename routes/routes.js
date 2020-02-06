const customer_controller=require('../controller/controller');
const router=require("express").Router();

router.post('/getData',customer_controller.getData)



module.exports=router;