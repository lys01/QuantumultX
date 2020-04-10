Eval范例

# 远程京东签到（jd_eval.js）
$task.fetch({ url: ”https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js“ }).then(response => {eval(response.body);});