/* 
# 韩剧tv超清
^http:\/\/api\.hanju\.koudaibaobao|.com\/api\/series\/rslvV4 url script-response-body https://raw.githubusercontent.com/seamly01/QuantumultX/master/Script/HanjuTV.js

hostname = api.hanju.koudaibaobao.com


方法1:
var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理
obj.quality=10

body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改

*/


let obj = JSON.parse($response.body);
obj.quality=10
$done({body: JSON.stringify(obj)});