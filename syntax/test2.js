const http = require("http");
const { URL } = require("url");

// function requset(host, path, callback) {
//   return http.request(
//     {
//       path,
//       host,
//       port: 3000,
//       headers: {
//         "Upgrade-Insecure-Requests": 1,
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.62 Safari/537.36"
//       }
//     },
//     callback
//   );
// }

// const num = 10;
// let errNum = 0;
// let okNum = 0;

const options = new URL("http://47.106.201.148/");
function testReq(num, times) {
  if (times === 0) {
    return;
  }
  let errNum = 0;
  let okNum = 0;
  const start = process.hrtime();
  const set = new Set();
  for (let i = 0; i < num; i++) {
    const req = http.request(options, res => {
      res.on("data", chunk => {
        if (!set.has(res.$id)) {
          okNum += 1;
          res.$id = `okNum+${okNum}`;
          set.add(res.$id);
        
          if (errNum + okNum === num) {
            console.log({ okNum, errNum });
            console.log(start, process.hrtime(start));
            testReq(num, times - 1);
          }
        }
      });
    });

    req.on("error", e => {
    //   console.log(e);
      if (!set.has(req.$id)) {
        errNum += 1;
        req.$id = `errNum+${errNum}`;
        set.add(req.$id);
        // console.log({ okNum, errNum });
        if (errNum + okNum === num) {
          console.log(start, process.hrtime(start));
          testReq(num, times - 1);
        }
      }
    });
    req.write("\r\n");
  }
}

testReq(10,20)
//   const options = {
//     hostname: 'www.baidu.com',
//     port: 80,
//     path: '/upload',
//     method: 'get'
//   };

//   http.get

// const options = new URL("http://www.baidu.com");
//   const req = http.request(options, (res) => {
//     console.log(`状态码: ${res.statusCode}`);
//     console.log(`响应头: ${JSON.stringify(res.headers)}`);
//     res.setEncoding('utf8');
//     res.on('data', (chunk) => {
//       console.log(`响应主体: ${chunk}`);
//     });
//     res.on('end', () => {
//       console.log('响应中已无数据。');
//     });
//   });

//   req.on('error', (e) => {
//     console.error(`请求遇到问题: ${e.message}`);
//   });
//   req.write('\r\n')
