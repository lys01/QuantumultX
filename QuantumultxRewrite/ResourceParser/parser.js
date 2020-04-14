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

var sampleA = "shadowsocks=cn2.flushingx.com:1526, method=rc4-md5, password=7278918662, fast-open=false, udp-relay=false, tag=HK";
var sampleB = "shadowsocks=p5.22332e.com:8333, method=rc4-md5, password=passfw2xs4e!, fast-open=false, udp-relay=false, tag=台湾
shadowsocks=p4.22332e.com:8333, method=rc4-md5, password=passfw2xs4e!, fast-open=false, udp-relay=false, tag=香港";
var total = sampleA + "\n" + sampleB;
$done({content : total});
