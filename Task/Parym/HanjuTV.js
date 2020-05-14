
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `http://api.hanju.koudaibaobao.com/api/userPoint/checkin?_ts=1589213906007`;
const method = `GET`;
const headers = {
'uk' : `2Q/904oS/cUmCSsxl4kYgqK09TZ5uAspSVEsECbpBj0=`,
'auth-uid' : `26913895`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate`,
'auth-token' : `a1149e0b2cb1e7f861de7df8909704ce`,
'vc' : `i_5013`,
'vn' : `5.0.1`,
'User-Agent' : `HanjuTV/5.0.1 (iPhone; iOS 13.4.1; Scale/2.00)`,
'app' : `hj`,
'Host' : `api.hanju.koudaibaobao.com`,
'Accept-Language' : `zh-Hans-CN;q=1`,
'Accept' : `*/*`,
'sign' : `nCK7pRSPByBEUc4TA9OJHzIxD+ou4xoXDMdTUomMzMHfmp1rAKfNGnX5Hf8xhxciXtUEzrNx8uvkybqB/H15x/IYzs9p91FFe7fU0MRcq9n4Kh73K8OS39Nux4TSAbwYsCcTMOxrKILMUq1ljeP8y+X+oXtQmeHOqOmOCI1Pw4oMw13UriPAnlHyn+5qv8NTUI0cxxar8L8C5nVRvEwcSOQaRoisLVE4YLXaGjF0bTFHBNBWSTbRlcc27Rvd/Hke7qGh4ePyHCjp5YoHh7/I0ziyubn57XCrddC/Ul8eP7byKXPvLN1jGPCUcwcw0Czm7e7sEd3ow4vzF3WM6yt7ccIbtaHAi179rQ20GnxMTb4yWIlGMNf74+vyh2VoL1UuaAHwt0EiwqNB3lBP+QMmptPeRzTStOaMYxoHtfqsGhdX7yuAL54Vh8/L9VTh2gEp0YuaSt46pyrTaNM8zndsEu4ZHrleUcirPWGGHPPj2xW1nWLc0AWOU9xLob5iCY+QFYFJ7TLsd+MQfVDnfAumDTa3nRXjptmUvuC2gwxJjykiz1zFyJJPMciQXhk1r3Gw`
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
        var msg = "签到结果: 成功";
      $notify("韩剧TV", msg, "积分总额: "+seamly)
      }else{
        var msg = "签到结果: 重复";
      }
      $notify("韩剧TV", msg, "积分总额: "+seamly);

    },
    reason => {
      $notify("签到失败", "", JSON.parse(reason.error).msg);
    }
  );
