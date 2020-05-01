const url = 'https://note.youdao.com/yws/mapi/user?method=checkin';
const method = 'POST';
const headers = {
'Cookie' : 'YNOTE_CSTK=QaKAVJew; YNOTE_FORCE=true; YNOTE_LOGIN=1||1588298887357; YNOTE_SESS=v2|tkcVB_mkTcpFnH6z64p40e4P4UERHOERlY0MYGnLTF0PBPMPFRMPu0Pyh4kGRL6FRq4nMQ4PLOA06S0fQFRHl506yOMe4P4eFR; JSESSIONID=aaaxiWRadtR-OcuBsZjhx; yms:sess=W-qxtxYcaArR6FalpqqyDEAMKovaZi0aPP38Pd-hH5fxtC2Gki2XWYc0KdHqJw94TNfEyt7fsJlKpy3A6apjEub2DxHyhjXNxruLypatM3_S-as09a7BZLbv7I-xjaTW24vhd_XSU4RvOuibw7CAvJdu55aHN_zPrrue9jeUT4rYCcRNd4dmKuDL4RK7bUg_SEWfqfOqjq8XeWEmTlmy7rLnyTwCP7huYCVI47etLz6mfkvwviL0WD-yPCQlj18h1TUIzcC-fAjgqFpHDgi85Q==',
'Accept' : '*/*',
'Connection' : 'keep-alive',
'Content-Type' : 'application/x-www-form-urlencoded',
'Accept-Encoding' : 'gzip, deflate, br',
'Host' : 'note.youdao.com',
'User-Agent' : 'you dao yun bi ji/6.9.21 (iPhone; iOS 13.4.1; Scale/2.00)',
'Accept-Language' : 'zh-Hans-CN;q=1'
};
const body = 'IDFA=7A091B20-AE21-4518-AB46-7ABDA9DCE260&client_ver=6.9.21&device_id=iPhone8%2C1-058BF09C-2560-41F2-9960-726224B3B6D5&device_model=iPhone&device_name=iPhone&device_type=iPhone&imei=%2530%2535%2538%2542%2546%2530%2539%2543%252D%2532%2535%2536%2530%252D%2534%2531%2546%2532%252D%2539%2539%2536%2530%252D%2537%2532%2536%2532%2532%2534%2542%2533%2542%2536%2544%2535&keyfrom=%256E%256F%2574%2565%252E%2536%252E%2539%252E%2532%2531%252E%2569%2550%2568%256F%256E%2565&level=user&login=qq&mid=%2531%2533%252E%2534%252E%2531&model=%2569%2550%2568%256F%256E%2565%2538%2C%2531&net=wifi&os=iOS&os_ver=13.4.1&phoneVersion=%2569%2550%2568%256F%256E%2565&vendor=%2541%2570%2570%2553%2574%256F%2572%2565';

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    var body = JSON.parse(response.body);
    console.log(response.body);
    var seamly =body.success
    var seamly1=body.space
    // response.statusCode, response.headers, response.body
    if (body.success==1){
        $notify("有道云笔记","签到: 成功",seamly1)
    }else{
        $notify("有道云笔记","签到: 重复","有道云空间总额: "+seamly1)// Success!
    }
}, reason => {
    // reason.error
    $notify("有道云笔记签到. Interface error‼️‼️‼️", "", reason.error)
}); // Error!

