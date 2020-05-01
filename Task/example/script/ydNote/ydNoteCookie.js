/*
Update 2020.04.28

It  will update for someday.

[task_local]

0 9 * * * dreverlyu/script/ydNote/ydSign.js

[rewrite_local]
# Get Cookie
https:\/\/www\.youdao\.com\/yms\/api\/self url script-response-body dreverlyu/script/ydNote/ydNoteCookie.js

# MITM = note.youdao.com
*/

var YDC = $request.headers["Cookie"];

if (YDC) {
    if ($prefs.valueForKey("CookieYD") != undefined) {
        if ($prefs.valueForKey("CookieYD") != YDC) {
            var cookie = $prefs.setValueForKey(YDC, "CookieYD");
            if (!cookie) {
                $notify("更新有道云笔记 Cookie失败‼️", "", "")
            } else {
                $notify("更新有道云笔记Cookie成功 🎉", "", "")
            }
        } else {
            console.log("有道云笔记签到cookie", "无变化,无需获取")
        }
    } else {
        var cookie = $prefs.setValueForKey(WAPJ, "CookieYD");
        if (!cookie) {
            $notify("首次写入有道云笔记Cookie失败‼️", "", "")
        } else {
            $notify("首次写入有道云笔记Cookie成功 🎉", "", "")
        }
    }
}
$done({})