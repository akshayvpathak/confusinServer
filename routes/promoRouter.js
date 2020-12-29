const express = require('express');
const bodyParser = require('body-parser');


const promoRouter = express.Router();
promoRouter.use(bodyParser.json());
promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will Send all promotions to You!');
})
.post((req,res,next)=>{
    res.end('Will add the promotion: '+req.body.name + 'with detail :' + req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('Put Operation Not Supported on promotions');
})
.delete((req,res,next)=>{
    res.end('Deleting All the Promotion');
});
promoRouter.route('/:promoId')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will Send Details of the '+ req.params.promoId +' to You!');
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation does not Supported on \promotions'+ req.params.promoId);
})
.put((req,res,next)=>{
    res.write('Updating the promotion  '+ req.params.promoId + '\n')
    res.end('Will add the promotion: '+req.body.name + 'with detail :' + req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting The promo' + req.params.promoId);
});
module.exports = promoRouter;