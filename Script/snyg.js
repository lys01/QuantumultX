/*
苏宁易购自动签到脚本，使用QX

[task_local]
2 0 * * * snyg.js

[rewrite_local]
https://luckman.suning.com/luck-web/sign/api/clock_sign.do* url script-request-header snyg.js

[mitm]
hostname = hostname
*/

const userCheckinURL = 'https://luckman.suning.com/luck-web/sign/api/clock_sign.do?';
const userCookieKey  = 'snyg_userCookieKey';
const userAgentKey   = 'snyg_userAgentKey';
const userTokenKey   = 'snyg_userTokenKey'

let isGetCookie = typeof $request !== 'undefined';

if (isGetCookie) {
    // 获取 Cookie
    if ($request.headers['Cookie']) {
        var cookie = $request.headers['Cookie'];
        var userAgent = $request.headers['User-Agent'];

        var userToken = $request.url;
        //console.log($request.url);
     $prefs.setValueForKey(cookie, userCookieKey);
        $prefs.setValueForKey(userAgent, userAgentKey);
        $prefs.setValueForKey(userToken, userTokenKey);
        $notify("成功获取苏宁易购 Cookie 🎉", "", "请禁用该脚本")
    }
    $done({});
} else {
    // 签到
    
    var request = {
        url: $prefs.valueForKey(userTokenKey),
        method: 'GET',
        headers: {
            'Cookie': $prefs.valueForKey(userCookieKey),
            'Accept': 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Referer': 'https://luckman.suning.com/luck-web/sign/app/index_sign.htm?wx_navbar_transparent=true',
            'Host': 'luckman.suning.com',
            'User-Agent': $prefs.valueForKey(userAgentKey),
            'Accept-Language' : 'en-us',
            'X-Requested-With': 'XMLHttpRequest',
        },
        //body: JSON.stringify({})
    };
//console.log(request);
    $task.fetch(request).then(response => {
    //console.log(request);
        const obj = JSON.parse(response.body);
        if (obj.respCode == 70512) {
            $notify("苏宁易购", "", "重复签到！");
        } else {
            $notify("苏宁易购", "", "签到成功！"+obj.respData.resList[0].remark+":"+obj.respData.resList[0].amount);
        }
        $prefs.setValueForKey(obj.data, userDataKey); 
    }, reason => {
        $notify("苏宁易购", "", reason.error)
    });
}
