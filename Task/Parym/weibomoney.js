
/*Cookie登录app签到页获取，第一次获取后可以用;注释掉。

公众号iosrule  by 红鲤鱼绿鲤鱼与驴 2020.4.16


[rewrite_local]
#微博签到,微博钱包签到
https:\/\/m\.weibo\.cn\/api\/users\/show url script-request-header weibomoney.js

[task_local]
10 O * * * weibomoney.js

https://m.weibo.cn/api/users/show
MITM=m.weibo.cn

*/





//1.需要申明的变量
const $iosrule = iosrule();//声明必须

//++++++++++++++++++++++++++++++++
const  xxurl="https://m.weibo.cn/api/config";
const  yyurl="https://pay.sc.weibo.com/aj/mobile/home/welfare/signin/do?";
const zzurl="https://m.weibo.cn/c/checkin/ug/v2/signin/signin?&st=";
const cxurl="https://pay.sc.weibo.com/aj/task/signinfo?"
const  xx="微博签到";
const  xx_headname="weibo_head";
var result="";



  const xxhead=$iosrule.read(xx_headname);//转换
  

var  result="";

//++++++++++++++++++++++++++++++++




//2.程序主体部分
function wbst_sign(xkey,wid,mid){
  const WeiUrl = {
  url: zzurl+wid,
headers: {
 Cookie:xkey,
    }
  };
    

  WeiUrl.headers['Referer'] = `https://m.weibo.cn/c/checkin?ua=iPhone11,8__weibo__10.1.2__iphone__os12.4&from=10A1293010`;
  
  WeiUrl.headers['User-Agent'] = `Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Weibo (iPhone11,8__weibo__10.1.2__iphone__os12.4)`;
  
 WeiUrl.headers['X-Requested-With'] = `XMLHttpRequest`;
  
    
  $iosrule.get(WeiUrl, function(error, response, data) {
    

const obj = JSON.parse(data)

if (obj.msg.match("成功")=="成功")
{
result="新浪微博账号id💎"+mid+"签到成功⭕"+"第"+obj.data.sign_in.dayth+"天签到."+"\n";



wbpay_sign(xkey);
}
else

{result="新浪微博账号id💎"+mid+"签到失败。"+obj.msg+"\n";
wbpay_sign(xkey);}

        })
}
//微博钱包
//钱包签到
function wbpay_sign(xkey){
  const wbpay = {
 url:yyurl,

headers: {
      Cookie: xkey,
    }
  };
    
wbpay.headers['User-Agent'] = `Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Weibo (iPhone11,8__weibo__10.1.2__iphone__os12.4)`;
  
 $iosrule.get(wbpay, function(error, response, data) {

const obj = JSON.parse(data)

if (obj.msg.match("成功")=="成功")
{
  if (obj.status==1) {
    result+="微博钱包签到成功⭕";
wbpayx_sign(xkey);}
else if (obj.status==2) {

  result+="微博钱包重复签到⭕";
  wbpayx_sign(xkey);
}


}
else

{result+="微博钱包签到失败@"+obj.msg;
papa(xx,"",result)}

 })
}

//查询钱包签到
function wbpayx_sign(xkey){
  const wbxpay = {
 url:cxurl,
headers: {
      Cookie: xkey,
    }
  };
    
wbxpay.headers['User-Agent'] = `Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Weibo (iPhone11,8__weibo__10.1.2__iphone__os12.4)`;
  
 $iosrule.get(wbxpay, function(error, response, data) {
const obj = JSON.parse(data)

if (obj.msg.match("成功")=="成功")
{
result+="连续"+obj.data.consecutive_days+"天签到";

papa(xx,"",result)
}
})
}
//===================================

//++++++++++++++++++++++++++++++++

//3.需要执行的函数都写这里


function main()
{
const key=JSON.parse(xxhead).Cookie;
const llUrl ={url:xxurl,headers:{
  Cookie:key
}};
  
$iosrule.get(llUrl, function(error, response, data) {

          var obj=JSON.parse(data)
          console.log(data)
  if (obj.data.login==true)
    {
    const wbwid=obj.data.st;
     const wbmid=obj.data.uid;

     console.log(wbmid+":"+wbwid)
wbst_sign(key,wbwid,wbmid)
  
  }})


}















//++++++++++++++++++++++++++++++++++++
//4.基础模板




if ($iosrule.isRequest) {
  GetCookie(xx,xx_headname)
  $iosrule.end()
} else {
  main();
  $iosrule.end()
}



function GetCookie(tt,headname,bodyname) {
  

var signname =tt;

var headval = JSON.stringify($request.headers);

const llUrl ={url:xxurl,headers:JSON.parse(headval)};
  
$iosrule.get(llUrl, function(error, response, data) {

          var obj=JSON.parse(data)
          console.log(data)
  if (obj.data.login==true)
    {var head = $iosrule.write(headval,headname);

console.log(headval)
if(head==true) papa(signname,"账号:"+obj.data.uid,"获取head成功!");}
else
papa(signname,"","获取cookie失败，重新登录网页获取")
  
})


}




function papa(x,y,z)
{
 $iosrule.notify(x,y,z);

 
}


	function timestampToTime(timestamp) {
	    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
	    var Y = date.getFullYear() + '-';
	    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	    var D = date.getDate() + ' ';
	    var h = date.getHours() + ':';
	    var m = date.getMinutes() + ':';
	    var s = date.getSeconds();
	    return Y + M + D;
	}

function iosrule() {
    const isRequest = typeof $request != "undefined"
    const isSurge = typeof $httpClient != "undefined"
    const isQuanX = typeof $task != "undefined"
    const notify = (title, subtitle, message) => {
        if (isQuanX) $notify(title, subtitle, message)
        if (isSurge) $notification.post(title, subtitle, message)
    }
    const write = (value, key) => {
        if (isQuanX) return $prefs.setValueForKey(value, key)
        if (isSurge) return $persistentStore.write(value, key)
    }
    const read = (key) => {
        if (isQuanX) return $prefs.valueForKey(key)
        if (isSurge) return $persistentStore.read(key)
    }
    const get = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "GET"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.get(options, callback)
    }
    const post = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "POST"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.post(options, callback)
    }
    const end = () => {
        if (isQuanX) isRequest ? $done({}) : ""
        if (isSurge) isRequest ? $done({}) : $done()
    }
    return { isRequest, isQuanX, isSurge, notify, write, read, get, post, end }
};


