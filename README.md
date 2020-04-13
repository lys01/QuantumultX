# 京东eval远程
00 8,20 * * * jd_eval.js

$task.fetch({ url: ”https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js“ }).then(response => {eval(response.body);});


[policy]
static=Apple, direct, proxy, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Apple.png
static=Global, proxy, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Global.png
static=YouTube, proxy, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/YouTube.png
static=Advertising, reject, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Domestic.png
static=Final, direct, proxy, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Final.png