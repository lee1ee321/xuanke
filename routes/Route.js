require('babel-polyfill');
var express=require('express');
var router = express.Router();
var epartmentDB = require('../db/epartment');
var subjectLevelDB = require('../db/subjectLevel');
var topicDB = require('../db/topic');
var subjectTypeDB = require('../db/subjectType');
var subjectDB = require('../db/subject');

router.get('/getAllDepartmentes',function(req,resp){
   epartmentDB.findAll().then(function(results){
        console.log('有')
        resp.send(results)
    }).catch(function(err){
       resp.send(err);
        //console.log('没有')        
    })
})
router.get('/getAllSubjectLevel',function(req,resp){
   subjectLevelDB.findAll().then(function(results){
        //console.log('有')
        resp.send(results)
    }).catch(function(err){
       resp.send(err);
        //console.log('没有')        
    })
})
router.get('/getAllSubjectType',function(req,resp){
   subjectTypeDB.findAll().then(function(results){
        //console.log('有')
        resp.send(results)
    }).catch(function(err){
       resp.send(err);
        //console.log('没有')        
    })
})
router.get('/getAllTopics',function(req,resp){
   topicDB.findAll().then(function(results){
        //console.log('有')
        resp.send(results)
    }).catch(function(err){
       resp.send(err);
        //console.log('没有')        
    })
})
router.post('/getAllSubjects',function(req,resp){
   subjectDB.findAll(req.body).then(function(results){
        //console.log('有')
        resp.send(results)
        // console.log(results)
    }).catch(function(err){
       resp.send(err);
        //console.log('没有')        
    })

})

module.exports = router;