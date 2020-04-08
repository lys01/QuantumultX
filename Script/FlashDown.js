var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理
obj={
  "code": 0,
  "message": "ok",
  "body": {
    "img": "http://thirdqq.qlogo.cn/g?b=oidb&k=U8MUebehQnJKibX0pw82oMQ&s=640&t=1556484069",
    "openid": "075DFD346976A91E54D667AC704184DA",
    "nickname": "seamlly",
    "id": 8269,
    "uuid": "425E70F3-B573-4566-B533-9069E044A83F",
    "isvip": true
  }
}

body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改


