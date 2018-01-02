//后台配置文件
export default {
    //数据库配置
    mysqlDB : {
		host:'localhost',
        user: 'root',
        password:'root',
        database: 'minjd'
    },
    upPath:'dist/upFile/',//上传路径
    //token 配置
    JWTs : {
        secret : 'scscms', // 指定密钥
        expiresIn:'2h'  //超时设置 m分钟 h小时 d天数
    },
    //邮件服务配置
    emailServer:{
        service: 'SMTP',
        // service: 'POP3',
        host: 'smtp.163.com',
        // host: 'pop.qq.com',
        // port: 465,
        port: 25,
        auth: {
            // user: '您的邮箱',
            // pass: '邮箱密码'
            user: '18786715317@163.com',
            pass: 'wangyan2712686'
        }
    },
    //公用：获取客户端IP
    getClientIP:function(ctx) {
        let req = ctx.request;
        let ip = ctx.ip ||
            req.headers['x-forwarded-for'] ||
            req.ip ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress || '';
        let arr = ip.match(/(\d{1,3}\.){3}\d{1,3}/);
        return arr ? arr[0] : '';
    }
}
