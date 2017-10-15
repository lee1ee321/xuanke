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
    },
    checkSubject(obj){
        var sql="update tbl_exam_subject set checkState='"+obj.subjectState+"' where id="+obj.id+" ";
        // console.log(obj);
        return pool.execute(sql);
    },
    saveSubject(obj){
        var sql="insert into tbl_exam_subject(analysis,answer,checkState,stem,department_id,subjectLevel_id,subjectType_id,topic_id) values('"+obj.answer+"','"+obj.answer+"','未审核','"+obj.stem+"',"+obj['ids[]'][2]+","+obj['ids[]'][1]+","+obj['ids[]'][0]+","+obj['ids[]'][3]+")"
         return pool.execute(sql);
        //  console.log(sql);
    }
}

