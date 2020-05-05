const url = 'http://api.hanju.koudaibaobao.com/api/userPoint/checkin?';
const url1 = 'http://api.hanju.koudaibaobao.com/api/userPoint/dlaunch?';
const method = 'GET';
const headers = {
'uk' : '2Q/904oS/cUmCSsxl4kYgqK09TZ5uAspSVEsECbpBj0=',
'auth-uid' : '26913895',
'Connection' : 'keep-alive',
'Accept-Encoding' : 'gzip, deflate',
'auth-token' : '36667eef9385428184fc146593a33805',
'vc' : 'i_5013',
'vn' : '5.0.1',
'User-Agent' : 'HanjuTV/5.0.1 (iPhone; iOS 13.4.1; Scale/2.00)',
'app' : 'hj',
'Host' : 'api.hanju.koudaibaobao.com',
'Accept-Language' : 'zh-Hans-CN;q=1',
'Accept' : '*/*',
'sign' : 'nCK7pRSPByBEUc4TA9OJH5XjeKtsHcRmIcFUbvsg0jP6BqLzX8zdtp9erbU4a6GFY/fzZGm9ytcKXIlIdvElWC32nWbBuUhhduALqn93HUwp3rVOgJd3hSmIBW/PxLctvmBn6VrxiVm+QnEKFxETD38Ft8HqwM0KuSNIzILWWR9Q2THAykq/UyTffWi+EZRVsVLdsfa7RJ2NNZMKMkqNA8v56CTsC4SXUEtlA16WuGLfe8ZIYc/6cKzrvWIDNRqWzStRwzdmXTqAh4KbSg14S+9O///mAq3TocogGKVfTf0TJJzysEZ+5k2hewLZmNDk6smJFPpURwOBQyX1TycoEqp5KnO5/ZK6UosCPgEQJUhqbA39hoWvupqz1g51cVl69OmnodWlK159DLtEzJ6qYr06Kn8z1D5N+ymkVC3f8N+XPkODO33B9yFysULMAbRcJnTUyjC4sVE59UzNXu49yhgiM7piVmTjuioZV7gnIeOk1uU+k/GmvdXz+2i2jfEKwnxQ5Lf2xdTe4Ncmni4IpTF0G/dV1lfXNot7bb/Qce/67mNd3zYvGxMqQOTz+tB9'
};
const body = '';

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};
const myRequest1 = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(
    response => {
      var msg = JSON.parse(response.body).success;
      console.log(response.body);
    var seamly =JSON.parse(response.body).pointCount
      if (msg == true) {
        var msg = "签到结果: 成功";
      $notify("韩剧TV", msg, "积分+: "+seamly)
      }else{
        var msg = "签到结果: 重复";
      }
      $notify("韩剧TV", msg, "积分+: "+seamly);

    },
    reason => {
      $notify("签到失败", "", JSON.parse(reason.error).msg);
    }
  );
