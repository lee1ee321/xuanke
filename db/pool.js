var mysql=require('mysql');
var pool=global.pool;

if(!pool){
    pool=mysql.createPool({
        database:'exam2',
        user:'root',
        password:'root',
    })
    global.pool=pool
}
function getConnection(){
    return new Promise(function(resolve,reject){
        pool.getConnection(function(err,connection){
            if(!err){
                resolve(connection)
            }else{
                reject(err)
            }
        })
    })
}
// function execute(sql){
//     return new Promise(function(resolve,reject){
//         getConnection().then(function(connection){
//             connection.query(sql,function(err,results){
//                 if(!err){
//                     resolve(results)
//                 }else{
//                     reject(err)
//                 }
//             })
//         })
//     })
// }
//通过传入的ｓｑｌ语句进行查询
function execute(sql){
    return new Promise(function(resolve,reject){
        var conn;
        getConnection().then(function(connection){
            conn=connection
            conn.query(sql,function(err,results){
                if(!err){
                    resolve(results);
                }else{
                    reject(err)
                }
            })
        }).catch(function(err){
            reject(err)
        }).finally(function(){
            if(conn){
                conn.release();
                console.log('释放成功');
            }
        })
    })
}
module.exports={
    getConnection,
    execute
}