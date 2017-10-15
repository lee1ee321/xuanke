var pool=require('./pool');
module.exports={
    findAll(id){
        var sql="select * from tbl_exam_choice where subject_id="+id+";"
       // console.log(sql);
        // var sql="select * from tbl_exam_choice;"
        return pool.execute(sql);
    },
    saveData(obj){
        var sql="insert into tbl_exam_choice(content,correct,subject_id) values('"+obj['content[]'][0]+"',"+obj['corrects[]'][0]+","+obj.subject_id+"),('"+obj['content[]'][1]+"',"+obj['corrects[]'][1]+","+obj.subject_id+"),('"+obj['content[]'][2]+"',"+obj['corrects[]'][2]+","+obj.subject_id+"),('"+obj['content[]'][3]+"',"+obj['corrects[]'][3]+","+obj.subject_id+")";
        return pool.execute(sql);
    }
}

