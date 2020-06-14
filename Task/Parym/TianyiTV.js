
/**
 * @fileoverview Example to compose HTTP reqeuest
 * and handle the response.
 *
 */

const url = "http://h5.nty.tv189.com/api/portal/task/integralpresentforsign?0.6794422616645464";
const method = "GET";
const headers = {"Accept": "application/json, text/javascript, */*; q=0.01","Accept-Encoding": "gzip, deflate","Accept-Language": "zh-cn","Connection": "close","Cookie": "PHPSESSID=f6c6b7cdaac4019d28241bb98347de65; c_a_id=111010310225; c_a_l_tykvs=tyk%3DpoJ4bqXzLuvP06%252FIhR785hClaLXbjlyJvs3yShnEzt1as%252Bz9b5bVdSFpE13dMzaYGbDSMEYW4iOTuK78tWw2sfWiZjUw1AKxc1TBiUDQZpa8aUjvN%252BE1UA%253D%253D%26time%3D20200614203302; c_n_t=1-4G; c_t_id=2fd65b9d0e8257746325c039c537d9a2; channelID=01834721; c_u_i=ZIHOooDb5WT8GT9Sn58tM67HxrdwbNHHxzKuRW%2FW73AG6Ur5yC4gy2eMJWfrqG4vUQ11DSFpUtBUAcbqKOVlCmWsKjrSHkYgXJuJtP7oUPvpGfwAj0yjaNy%2FJKyN8IuaqbbUyX%2F9mTAtvkCubw5IJrC8bVM8VbKsaHbObeMhFFSqmrnRMZT0foBGOjRsAF%2BEZxgqDGXhARfAWKT%2B6a7Ej%2FXZm8QsPxBfBAvSAA3cXB8ljq%2FuA6OWAVBPm1Oahdf9MxQVqwcXTFhRwXXUN3mHXdKptzYqjHK5E6d6srIp2cqv2kfnPgWZMUCwn99ps6wWXmIbHVnTdRZnAJfH6cihA2PqimFFwvXXbMVwDP6xW1Du3aqx5iOAzLK9AyjBkbOHBFdSG5g1kzk3tMBuAtzo9LPfrrp%2F6Mtw1JwnL6JCnKe9rdyk8TCAhyuC3nLNL8jjdcWSUs1sKp4GyxmWGUg18fCLAUAbFPOajud8HWG%2BNr03Xe%2FLTm2M2kxTUnqQ912VKtLnr8dO1a%2FwYj8abZLMHN2spfpONkn2rtl08TJUL0Vk8ZKFETIvvfMmpBhoLXp1WOafzYGj9%2BYHCV%2Fk9egwJn5%2BcIIauk2Kh5wB2Q3expfrHqMvPSbc10J4vLvnjzfrQtifjqlsre36G%2FcwdKSyoR1XBypQanN1K7I5AUvyFhM%3D; h5_cuserid=1592137983809170; sto-id-20480-h5-menhu=FADEKIMAFAAA","Host": "h5.nty.tv189.com","Referer": "http://h5.nty.tv189.com/csite/tysx/task/index?token=2fd65b9d0e8257746325c039c537d9a2&appid=111010310225&devid=000001&version=2.7.2.4&channelid=01834721&NetType=1-4G&tyk=poJ4bqXzLuvP06%2FIhR785hClaLXbjlyJvs3yShnEzt1as%2Bz9b5bVdSFpE13dMzaYGbDSMEYW4iOTuK78tWw2sfWiZjUw1AKxc1TBiUDQZpa8aUjvN%2BE1UA%3D%3D&time=20200614203302","User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/appstore-newtysx-ios-UA-2.7.2.4","X-Requested-With": "XMLHttpRequest",};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    var msg = JSON.parse(response.body).data.continueSignCnt
    var tody = JSON.parse(response.body).data.todayPresentValue
    console.log(response.body);
    $notify("天翼超高清", "签到结果: 成功   连签天数:  "+msg, "当天获得元气值："+tody); // Success!
}, reason => {
    // reason.error
    $notify("天翼超高清", "签到结果: 失败", reason.error); // Error!
});

