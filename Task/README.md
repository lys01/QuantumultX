# 京东eval远程
00 8,20 * * * jd_eval.js

$task.fetch({ url: ”https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js“ }).then(response => {eval(response.body);});