require('babel-polyfill');
var express=require('express');
var router = express.Router();
var epartmentDB = require('../db/epartment');
var subjectLevelDB = require('../db/subjectLevel');
var topicDB = require('../db/topic');
var subjectTypeDB = require('../db/subjectType');
var subjectDB = require('../db/subject');
var choiceDB = require('../db/choice');
//获取所有方向信息
router.get('/getAllDepartmentes',function(req,resp){
   epartmentDB.findAll().then(function(results){
        resp.send(results)
    }).catch(function(err){
       resp.send(err);       
    })
})
//获取所有题目难易信息
router.get('/getAllSubjectLevel',function(req,resp){
   subjectLevelDB.findAll().then(function(results){
        resp.send(results)
    }).catch(function(err){
       resp.send(err);      
    })
})
//获取所有题目类型信息
router.get('/getAllSubjectType',function(req,resp){
   subjectTypeDB.findAll().then(function(results){
        resp.send(results)
    }).catch(function(err){
       resp.send(err);        
    })
})
router.get('/getAllTopics',function(req,resp){
  // req.query
   topicDB.findAll().then(function(results){   
        resp.send(results)
    }).catch(function(err){
       resp.send(err);       
    })
})
//获取所有题目信息
router.post('/getAllSubjects',function(req,resp){
   subjectDB.findAll(req.body).then(function(results){
        resp.send(results)
    }).catch(function(err){
       resp.send(err);     
    })

})
//获取一个题目的所有选项
router.get('/getAllChoices',function(req,resp){
   choiceDB.findAll(req.query.id).then(function(results){
        resp.send(results)
    }).catch(function(err){
       resp.send(err);        
    })
})
//检查是否审核通过
router.post('/checkSubject',function(req,resp){
    subjectDB.checkSubject(req.body).then(function(results){
        resp.send(results);
    }).catch(function(err){
        resp.send(err);
    })
})
//保存题目
router.post('/saveSubject',function(req,resp){
    subjectDB.saveSubject(req.body).then(function(results){
        resp.send(results);
    }).catch(function(err){
        resp.send(err);
    })
})
//保存选项
router.post('/saveChoice',function(req,resp){
    choiceDB.saveData(req.body).then(function(results){
        //resp.send(results);
        console.log(req.body);
    }).catch(function(err){
        //resp.send(err);
    })
})
module.exports = router;