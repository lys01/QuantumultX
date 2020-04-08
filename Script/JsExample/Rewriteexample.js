/*
https://sapi.beingfine.cn/v3/report/launch/
sapi.beingfine.cn
*/
var body = $response.body;
function re(reg, str) {
  body = body.replace(reg, str);
}
var reg1 = /\\"granted\\":\d/g;
var reg2 = /\\"expire_date\\":\d+/g;
re(reg1, '\\"granted\\":1'); 
re(reg2, '\\"expire_date\\":4079167311000');
$done(body);