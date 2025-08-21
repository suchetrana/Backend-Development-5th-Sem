const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.json({
        success: true,
        message: 'all blogs fetched'
    })
})
router.get('/:id', (req, res)=>{
    res.json({
        success: true,
        message: 'blog with id fetched'
    })
})
module.exports=router