const express = require("express");
const router= express.Router();

// Import all the functions from brand-handler.js
const { addBrand, updateBrand, deleteBrand, getBrand, getBrands } = require("../handlers/brand-handler");

router.post("", async(req,res)=>{
    console.log("here");
     let model = req.body;
     let result = await addBrand(model)
     res.send(result);
});

// update 
router.put("/:id", async(req,res)=>{
    console.log("here");
     let model = req.body;
     let id = req.params["id"];
      await updateBrand(id,model)
     res.send({message : "updated"});
});

// delete 
router.delete("/:id", async(req,res)=>{
    console.log("here");
     let id = req.params["id"];
      await deleteBrand(id)
     res.send({message : "deleted"});
});

//  single brand
router.get("/:id", async(req,res)=>{
    console.log("here");
     let id = req.params["id"];
     let brand = await getBrand(id)
     res.send(brand);
});

//  list all brands
router.get("", async(req,res)=>{
    console.log("here");
     let brands = await getBrands()
     res.send(brands);
});

module.exports = router;