https://raw.githubusercontent.com/seamly01/QuantumultX/master/QuantumultxRewrite/EvalRewrite/Eval.conf

1.设置任务

[task_local]
0 0 * * * eval_script.js

2.配置脚本

[Remote]
# 可以使用 QuanX 远程重写（如果远程重写不包含 hostname，需配置 [Hostname] ）

https://raw.githubusercontent.com/yichahucha/surge/master/sub_script.conf

[Local]
# 可以使用 Surge 或者 QuanX 格式脚本（需配置 [Hostname]）

# jd（Surge）
# http-response ^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig) requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/jd_price.js

[Hostname]

# api.m.jd.com, trade-acs.m.taobao.com

3.配置 GitHub
# GitHub Token（如果使用账号密码 Token 请设置为空 ”“）
const __token = ”“
# GitHub 账号
const __username = ”xxx“
# GitHub 密码
const __password = ”xxx“
# GitHub 用户名
const __owner = ”yichahucha“
# GitHub 仓库名
const __repo = ”surge“
# GitHub 分支（不指定就使用默认分支）
const __branch = ”master“
# GitHub 文件路径（没有文件新创建，已有文件覆盖更新）
# 默认生成两个文件，不需要的路径设置为空 “”
const __quanxPath = ”eval_sub/quanx.txt“
const __surgePath = ”eval_sub/surge.txt“

4.执行任务更新脚本

5.使用 GitHub 生成的文件链接，在 QuanX 添加远程重写





