const url = 'http://api.hanju.koudaibaobao.com/api/userPoint/infoV2?_ts=1589213905755';
const url1 = 'http://api.hanju.koudaibaobao.com/api/userPoint/dlaunch?';
const method = 'GET';
const headers = {
'uk' : '2Q/904oS/cUmCSsxl4kYgqK09TZ5uAspSVEsECbpBj0=',
'auth-uid' : '26913895',
'Connection' : 'keep-alive',
'Accept-Encoding' : 'gzip, deflate',
'auth-token' : 'a1149e0b2cb1e7f861de7df8909704ce',
'vc' : 'i_5013',
'vn' : '5.0.1',
'User-Agent' : 'HanjuTV/5.0.1 (iPhone; iOS 13.4.1; Scale/2.00)',
'app' : 'hj',
'Host' : 'api.hanju.koudaibaobao.com',
'Accept-Language' : 'zh-Hans-CN;q=1',
'Accept' : '*/*',
'sign' : 'nCK7pRSPByBEUc4TA9OJHzIxD+ou4xoXDMdTUomMzMHfmp1rAKfNGnX5Hf8xhxciXtUEzrNx8uvkybqB/H15xx1ii49tjn1FgQROjnoUZijNhEbWz75EZhLObWCpNMxsPuIL8ApQfkAkOW6mji5XvMcEcWeZhoz+OUllkyJtm9nN0HPyOjneVRSI/UvVFQFGJNUeFdUwBnYq0nf1yghkHZb7ugG46JLq0Yvqd9NwAzA+/Hvcw+WwUzovUeIOvEhfs5/sdVMoSkLBYhlldXTkST2mCtLkQGF4I4pRs1kOajhY/cifn9KLBTjDZsLxaW3SSJyqjP01uVHqPB1qQBEnho08c5wN7fsiYSLa/yF7xyxBH+kYI4wNd66QjKxHwHJguoW4UfuSS7pfr2git/YNQeVk6K86DubvuLNurZqx7CS4vWwgN3zQAluRu+IFg2vYPtFO9u4CQymNRTMfQHKVA2hfaESPfZK48HEZCJJlF4Hlxkxh81fXbht6ymXTIun/8QbWkJG2tElAwOcJgsDc2/HZtmI+WGBEKD/ePmlY5Wclqp6n6bH2er+C+vHEMkc7'
};
const body = '';

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};
const myRequest1 = {
    url: url1,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(
    response => {
      var msg = JSON.parse(response.body).success;
      console.log(response.body);
    var seamly =JSON.parse(response.body).pointBalance
      if (msg == true) {
        var msg = "签到结果: 成功";
      $notify("韩剧TV", msg, "积分总额: "+seamly)
      }else{
        var msg = "签到结果: 重复";
      }
      $notify("韩剧TV", msg, "积分总额+: "+seamly);

    },
    reason => {
      $notify("签到失败", "", JSON.parse(reason.error).msg);
    }
  );
