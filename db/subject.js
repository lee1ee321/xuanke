var pool=require('./pool');
module.exports={
    findAll(obj){
        var sql="SELECT * FROM tbl_exam_subject where department_id="
        +obj['subject.department_id']+" and subjectLevel_id="
        +obj['subject.subjectLevel_id']+" and subjectType_id="
        +obj['subject.subjectType_id']+" and topic_id="
        +obj['subject.topic_id']+";"
        // console.log(obj);
        return pool.execute(sql);
    }
}

