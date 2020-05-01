var body = $response.body;
var url = $request.url;
const path = 'vnjoy/offers';
let obj = JSON.parse(body)
if (url.indexOf(path) != -1) {
    obj.vnjoy.at = 1;
    obj.vnjoy.as = 1;
    obj.vnjoy.expireDate = "2020-08-26";
    obj.vnjoy.grade.exp = 1598430380;
    obj.vnjoy.grade.level = 1;
    obj.vnjoy.autoRenewal = 1;
    obj.vnjoy.products = " ";

    obj.grade.current.exp = 1598430380;
    obj.grade.current.level = 1;
    obj.grade.current.level = 2;
    body = JSON.stringify(obj);
}

$done({body});
