var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'shuman',
  database : 'shuman_lx'
});
 
connection.connect();

// 查询
connection.query('SELECT * from student', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
})

// 新增
// var  userAddSql = 'INSERT INTO student(id,name) VALUES(?,?)'
// var  userAddSql_Params = [2, '李四']
// connection.query(userAddSql,userAddSql_Params, function (error, results, fields) {
//   if(error){
//     console.log('[INSERT ERROR] - ',error.message)
//     return
//    }       
//    console.log('-------INSERT----------')   
//    console.log('INSERT ID:',results)
//    console.log('#######################')
// })

// 修改
// var userModSql = 'UPDATE student SET name = ? WHERE id = ?';
// var userModSql_Params = ['张三', 1]
// connection.query(userModSql,userModSql_Params, function (error, results) {
//   if(error){
//     console.log('[INSERT ERROR] - ',error.message)
//     return
//    }       
//    console.log('----------UPDATE-------------')
//    console.log('UPDATE affectedRows',results.affectedRows)
//    console.log('******************************')
// })

// 删除
var userDelSql = 'DELETE FROM student WHERE id = 2'
connection.query(userDelSql, function(error, results){
  if(error){
    console.log('[DELETE ERROR] - ',error.message);
    return
  }       
  console.log('-------------DELETE--------------');
  console.log('DELETE affectedRows',results.affectedRows);
  console.log('&&&&&&&&&&&&&&&&&')
})