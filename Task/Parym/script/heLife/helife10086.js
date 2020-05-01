/**
 *@Author summer
 *@Date 2020/5/1  上午 10:36
 *@Describe github.com/dreverlyu
 *
 * 山西移动和生活签到
 */
function sign_heLife() {
    let cookieVal = $prefs.valueForKey('glory_cookie_HE10086');
    if (!cookieVal) {
        $notify("山西移动和生活", "无法签到", "请先获取cookie");
    }
    var url = {
        url: "http://he.sx.chinamobile.com/h/rest/v1/sign/process",
        method: 'POST',
        headers: {
            "Content-Type": `application/json;charset=utf-8`,
            "User-Agent": `Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 oncon(iphone;13.3.1;com.MobileCommunicationSX.iHeYueSX;1.0.4) he`,
            "Host": `he.sx.chinamobile.com`,
            "Origin": `http://he.sx.chinamobile.com`,
            "Referer": `http://he.sx.chinamobile.com/h/index.html`,
            "Accept-Language": `zh-cn`,
            "Accept-Encoding": `gzip, deflate`,
            Cookie: cookieVal
        },
        body: JSON.stringify({'channel': 'heapp'})
    };
    console.log(url)
    $task.fetch(url).then(response => {
        var body = JSON.parse(response.body);
        console.log(response.body);
        if (body.retMsg == "OK" && body.retCode == "0000") {
            $notify("山西移动和生活", "签到成功 🎉");
        } else if (body.retMsg == "重复提交签到") {
            $notify("已进行签到 ‼️", `${body.retMsg}`);
        } else {
            $notify("山西移动和生活", "签到失败");
        }
    }, reason => {
        $notify("山西移动和生活", "签到失败", `${reason.error}`);
    })
}
sign_heLife();
