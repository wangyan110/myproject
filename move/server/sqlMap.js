// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into minjd_u(id, name, age) values (0, ?, ?)'
    }
}

module.exports = sqlMap;