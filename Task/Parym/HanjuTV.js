
/**
 
 * 取消跳过Quantumult X的Rewrite模块添加
 opts: {"hints", false}
 
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

const url = `http://api.hanju.koudaibaobao.com/api/userPoint/checkin?_ts=1589213906007`;
const method = `GET`;
const headers = {
'uk' : `2Q/904oS/cUmCSsxl4kYgqK09TZ5uAspSVEsECbpBj0=`,
'auth-uid' : `26913895`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate`,
'auth-token' : `bdd7db97210e83283fee989018c61dbb`,
'vc' : `i_5013`,
'vn' : `5.0.1`,
'User-Agent' : `HanjuTV/5.0.1 (iPhone; iOS 13.5; Scale/2.00)`,
'app' : `hj`,
'Host' : `api.hanju.koudaibaobao.com`,
'Accept-Language' : `zh-Hans-CN;q=1`,
'Accept' : `*/*`,
'sign' : `nCK7pRSPByBEUc4TA9OJHxbRz3z6N/L4I/KrIK0yGSXIJdhGnMhdRfLDsi0vbqao6EvrxvvnqwfYefeSzs0hjznVQeRVRbS9IrZE3xUnNLx/yTugywfKBSLhO+e1IsSZjjN9Vwc2GA9hnN8caE+2Yf2Hl1WNKWe+emsicLTgxgy6fTwE4daQznPF70HXwquPDiN3i242nHQVrhMsYgPd/fn7UVXtlqgYcK773DXhEGip/i676ke4yzFcWPLIAOqKEAmQezo4p+PlD9QRyxy28KBs/AEBB9nt4Q5EhUGlToyE7iuZ0e+F4leU0tTximoJoEM+H5veIhYgX12MAVgZj0T4K5qPsheYoQ7QZkYNwTQrURY18tBwYHe/Y+4VNkVNrote9Ug7SZrOOn+OLqQErPnqGJxW+xFG82yJN99Jpjb1Ucc8PZH8jbE38wwqKSPWgvoJ+mxlY0PXCZQ6XPydhs4yOcHuugoLGprhMJctSJG90PCveCq48fWKx5SXmqqqPMc91/pA/2fqh6N2YW4g+HIBR1wMbuJs3wlkJaWJSEf8ONLlnsBIYIZnuXHG17QV`
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