/**
 * @fileoverview Example to parse the resource to the format of Quantumult X.
 *
 * @supported Quantumult X (v1.0.8-build253)
 */


// $resource, $notify(title, subtitle, message)
// HTTP reqeust and persistent storage related APIs are not supported in resource parser.

// $resource.link contains the original URL of the resource or the path if the resource is local.
// $resource.content contains the response(UTF8) from the URL .

// $done({error : "error description"});
// $done({content : "the modified content"});

var sampleA = "vmess = 185.101.139.29:54204, method=chacha20-ietf-poly1305, password=fdc2527e-12fd-4e52-f97c-78f35fe1acae, obfs=ws, obfs-host=185.101.139.29, obfs-uri=/youku, tag=荷兰🇳🇱";
var sampleB = "shadowsocks=app1.windmilltest.xyz:443, method=aes-256-cfb, password=lt8mh6rd, obfs=tls1.2_ticket_auth, fast-open=false, udp-relay=false, tag=美国";
var total = sampleA + "\n" + sampleB;
$done({content : total});
