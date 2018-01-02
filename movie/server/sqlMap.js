// sql语句
var sqlMap = {
    user: {
        add: 'insert into minjd_users( username, password) values ( ?, ?)',
        select_name: 'SELECT * from minjd_users where username = ?',    //查询 username
        select_password: 'SELECT * from minjd_users where password = ?',      //查询 password
        select_user: 'select * from minjd_users where username=? and password=?'

    }
}
module.exports = sqlMap;