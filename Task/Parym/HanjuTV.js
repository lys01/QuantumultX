
/**
 
 * 取消跳过Quantumult X的Rewrite模块添加
 opts: {"hints", false}
  
 * 通知跳转额外参数
var option1 = {"open-url" : "https://bing.com", "media-url" : "https://github.githubassets.com/images/modules/open_graph/github-mark.png"};
var option2 = {"open-url" : "https://bing.com"};
var option3 = {"media-url" : "https://github.githubassets.com/images/modules/open_graph/github-mark.png"};

$notify("Title", "Subtitle", "Body", option1);
$notify("Title", "Subtitle", "Body", option2);
$notify("Title", "Subtitle", "Body", option3);
 
 *示例 
const u = "请求签到的链接";

const h = {"A":"a", "B":"b"} // 字典形式的请求头
          // 如果有Cookie的话一个就行，也就是{"Cookie":"123456"}

const m = "GET" //或者 "POST" 最常用就这两种

// POST的情况一般会有请求消息体，你也得去复制，可能是作为字符串也可能是字典形式的
// 那就再定义一个变量 const b = "字符串请求消息体" 或 {"A":"a", "B":"b" }

var myRequest = {url: u, method: m, headers: h, body: b};
    // 如果还定义了变量b的话就再加后面这对body:b的键值
       
$task.fetch(myRequest).then(response => {  
  if(response.body.indexOf("成功签到的响应消息体内的某个关键词") != -1){
    $notify("今日某app签到", "", "成功👍")
  }else {
    $notify("今日某app签到", "失败👇", "可能要更新一下请求头信息了")
  }  
}
)
const u = "请求签到的链接";

const h = {"A":"a", "B":"b"} // 字典形式的请求头
          // 如果有Cookie的话一个就行，也就是{"Cookie":"123456"}

const m = "GET" //或者 "POST" 最常用就这两种

// POST的情况一般会有请求消息体，你也得去复制，可能是作为字符串也可能是字典形式的
// 那就再定义一个变量 const b = "字符串请求消息体" 或 {"A":"a", "B":"b" }


var myRequest = {url: u, method: m, headers: h, body: b};
    // 如果还定义了变量b的话就再加后面这对body:b的键值
    
    
$task.fetch(myRequest).then(response => {  
  if(response.body.indexOf("成功签到的响应消息体内的某个关键词") != -1){
    $notify("今日某app签到", "", "成功👍")
  }else {
    $notify("今日某app签到", "失败👇", "可能要更新一下请求头信息了")
  }  
}
)
 */

const url = `http://api.hanju.koudaibaobao.com/api/userPoint/checkin?_ts=1591834201004`;
const method = `GET`;
const headers = {
'uk' : `2Q/904oS/cUmCSsxl4kYgqK09TZ5uAspSVEsECbpBj0=`,
'auth-uid' : `26913895`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate`,
'auth-token' : `8d87c3f30d02f788322596f9a9605c80`,
'vc' : `i_5013`,
'vn' : `5.0.1`,
'User-Agent' : `HanjuTV/5.0.1 (iPhone; iOS 13.5; Scale/2.00)`,
'app' : `hj`,
'Host' : `api.hanju.koudaibaobao.com`,
'Accept-Language' : `zh-Hans-CN;q=1`,
'Accept' : `*/*`,
'sign' : `nCK7pRSPByBEUc4TA9OJH9iZPT/YlQLwuhUXO2mWc95IXzIVOUy4kklj7sYvoGPAVypPyg1h3YI884WGrEnbjSejemXKMjVW3K2SQXVZ4DwcygZGs1E7o0jZQ7ozbAdOzyfNaR5cJ6sw5EOnn2zOJ2kGaTTlxQuiaU8JblP3c5y5D3yqRc8YzfrAl+WyVJ1FhPrOTCdovWuK9oedQqJRXs0O9aak5zauuCiYGGY9U/9LtznvmEzQZQQ4De422SsduozizUdBo2eL35fw5GSIIS/vUFfXiBOemq2/ToGZwqFwuqNe0DX9Th6qJl+/g2Tj2j23qter8Tm0qo0EvIUgOFOpz2I5zM4b0i72AOaK5M0HkzWOXT6a0orAAoV/WI4q6soLc2HwLXmf2/OOtQFQEvGIMVE4J4V1VtFtKi3LMpJOrmi5aVlAq3hK5l5a/pjfqo38j1a/H157c5sw7jecWgveztXAlf0BqRKrGnDIu3zDnMgjjszP2if9bHrf1c8CDNwVU0QJ6T1MODepq8GFBwZssaBjnnYaUBRtjceZrfXShJutsuM57AS5Xuw3Zj9S`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};


$task.fetch(myRequest).then(
    response => {
      var msg = JSON.parse(response.body).success;
      console.log(response.statusCode + "\n\n" + response.body);
    var seamly =JSON.parse(response.body).pointCount
      if (msg == true) { 
      $notify("韩剧TV", "签到结果: 成功", "积分总额: "+seamly)
      }else{
              $notify("韩剧TV", "签到结果: 重复", "积分总额: "+seamly);
      }
    },
    reason => {
      $notify("签到失败", "", JSON.parse(reason.error).msg);
    }
  );