/* Quantumult X 脚本: 闪电下载vip  下载链接🔗 http://bbs.flashdown365.com/download.html

#闪电下载vip
^http\:\/\/app\.flashdown365\.com\/ios\/login url script-response-body sdxz.js

hostname = app.flashdown365.com,


范例1:
var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理
obj.body.isvip = true

body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改


*/

let obj = JSON.parse($response.body);
obj.body.isvip = true
$done({body: JSON.stringify(obj)});
