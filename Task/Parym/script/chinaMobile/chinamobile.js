/**
 *@Author summer
 *@Date 2020/3/28  上午 10:36
 *@Describe github.com/dreverlyu
 *
 * 中国移动官方app获取cookie
 */

//http://wap.sx.10086.cn/h/v1/sign/process  result.retCode == '0000'
var bonus = {
  url: 'http://wap.sx.10086.cn/h/v1/sign/process',
  headers: {
    "Cookie": $prefs.valueForKey("CookieYD"),
  },
  body:{
    "chnanel":"wt"
  }
};

$task.fetch(bonus).then(response => {
  if (response.body.data.retCode=="0000") {
    $notify("中国移动官方app签到成功 🎉")
  } else {
      $notify("中国移动官方app签到失败")
  }
}, reason => {
  $notify("中国移动官方app签到失败‼️‼️‼️", "", reason.error)
});
