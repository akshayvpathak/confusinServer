const express = require('express');
const bodyParser = require('body-parser');


const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will Send all leaders to You!');
})
.post((req,res,next)=>{
    res.end('Will add the leader: '+req.body.name + 'with detail :' + req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('Put Operation Not Supported on leaders');
})
.delete((req,res,next)=>{
    res.end('Deleting All the Leaders');
});
leaderRouter.route('/:leaderId')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will Send Details of the leader with leaderID'+ req.params.leaderId +' to You!');
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation does not Supported on \leaders'+ req.params.leaderId);
})
.put((req,res,next)=>{
    res.write('Updating the dish  '+ req.params.leaderId + '\n')
    res.end('Will add the leader: '+req.body.name + 'with detail :' + req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting The leader' + req.params.leaderId);
});
module.exports = leaderRouter;