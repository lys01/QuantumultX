
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://hybrid.ximalaya.com/web-activity/task/drawTaskAward`;
const method = `POST`;
const headers = {
'Origin' : `https://m.ximalaya.com`,
'Cookie' : `wxopenid_wxb63203ca8ecbc8fc_1=oeNgX0VKayhdg0G-jrQAOdccRo0o; wxopenid_18_1_secure=oeNgX0VKayhdg0G-jrQAOdccRo0o&1605455089675&3ebfa72fdf0448564cc6e24e655bdeaf; wxtime=1605455089675; wxopenid_wx3a4b4454f28a932b_1=oeNgX0VKayhdg0G-jrQAOdccRo0o; wx_nickname_18=seamly; wx_avatar_18=https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKRTRKY71IuU52RSVliaL6IpmfpPoTTcT2vznw5ZysKTUoJNg7o7Pf4vQWkzKIIcVFNTl5jTkIiasHA/132; wxh5_18=oDD9zuJv-ciZ7eJIQbfyDBP6tC5s; wxunionid_18_1_secure=oDD9zuJv-ciZ7eJIQbfyDBP6tC5s&1605455089675&a6360e15fd3c6b0856559136330721a9; fds_otp=6338677132814443935; 1&remember_me=y; 1&_token=173559709&B6754D90340N8547F137E9423161B8ECBD5C271EF9C026B234A3BA4FFB436A924D0D13C89CA3174MF7B49FABDE80E49_; login_type=password_mobile`,
'Accept' : `*/*`,
'Content-Type' : `application/json`,
'Referer' : `https://servicewechat.com/wxb63203ca8ecbc8fc/171/page-frame.html`,
'Host' : `hybrid.ximalaya.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.15(0x17000f31) NetType/WIFI Language/zh_CN`,
'Accept-Language' : `zh-cn`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`
};
const body = `{"aid":6,"taskId":20}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    var msg = JSON.parse(response.body).data.taskStatus
    var tody = JSON.parse(response.body).data.awardCount
    console.log(response.body);
    $notify("喜马拉雅（微信小程序）", "签到结果: 成功   连签天数:  "+msg, "当天获得积分："+tody); // Success!
     $done();
}, reason => {
    // reason.error
    $notify("喜马拉雅", "签到结果: 失败", reason.error); // Error!
     $done();
});
