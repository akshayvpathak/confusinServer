const express = require('express');
const bodyParser = require('body-parser');


const dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will Send all dishes to You!');
})
.post((req,res,next)=>{
    res.end('Will add the dish: '+req.body.name + 'with detail :' + req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('Put Operation Not Supported on Dishes');
})
.delete((req,res,next)=>{
    res.end('Deleting All the Dishes');
});
dishRouter.route('/:dishId')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will Send Details of the '+ req.params.dishId +' to You!');
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation does not Supported on \dishes'+ req.params.dishId);
})
.put((req,res,next)=>{
    res.write('Updating the dish  '+ req.params.dishId + '\n')
    res.end('Will add the dish: '+req.body.name + 'with detail :' + req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting The dish' + req.params.dishId);
});
module.exports = dishRouter;