// import {} from 'fs-extra'
import * as qiniu from "qiniu";
import request from "request";
import path from 'path'

function send(options: request.Options) {
  return new Promise<request.Response>(function(resolve, reject) {
    request(options, (err, body) => {
      if (err) {
        return reject(err);
      }
      return resolve(body);
    });
  });
}

interface Options {
  token: string;
  key?: string | null;
  filePath: string;
}
function uploadFile(options: Options, _config?: Record<string, any>) {
  const config = { ...new qiniu.conf.Config(), ..._config };
  const formUploader = new qiniu.form_up.FormUploader(config);
  const putExtra = new qiniu.form_up.PutExtra();
  formUploader.putFile(
    options.token,
    options.key,
    options.filePath,
    putExtra,
    function(respErr, respBody, respInfo) {
      if (respErr) {
        throw respErr;
      }
      if (respInfo.statusCode == 200) {
        console.log(respBody);
      } else {
        console.log(respInfo.statusCode);
        console.log(respBody);
      }
    }
  );
}

async function getToken(key: string) {
  const url =
    "https://www.jianshu.com/upload_images/token.json?filename=1.jpg";
  const result = await send({
    json: true,
    url,
    headers: {
      cookie:
        "read_mode=day; default_font=font2; locale=zh-CN; Hm_lvt_0c0e9d9b1e7d617b3e6842e85b9fb068=1532415052,1532483155,1532499058,1532499219; remember_user_token=W1sxMzMwNzI0NF0sIiQyYSQxMSRKUHZxLzJucGpPUUI5U1VPUFc3a3J1IiwiMTUzMjQ5OTI2Ni4xNDEyMTkxIl0%3D--cc7d4a12ee3b9430c6e420e22e8addab6d07c887; _m7e_session=a84a20dc1ab2130b532a3f2e74f583b0; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22163a601e53e2f6-0d4190a7a1be71-3764460c-2073600-163a601e53f52e%22%2C%22%24device_id%22%3A%22163a601e53e2f6-0d4190a7a1be71-3764460c-2073600-163a601e53f52e%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%2C%22first_id%22%3A%22%22%7D; Hm_lpvt_0c0e9d9b1e7d617b3e6842e85b9fb068=1532501170"
    }
  });
  uploadFile({token:result.body.token,filePath:path.resolve(__dirname,'../3.html'),key:result.body.key})
}
// function upload(src){
//     request({
//         url:""
//     })
// }
getToken("ok");
