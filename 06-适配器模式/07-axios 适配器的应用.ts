// import axios from 'axios';

// todo 所有any类型都是暂时给的


axios({
    url: 'localhost:8080/user/info?id=1',
    method: 'GET'
})


function axios(config: any) {
    const Params = {
        url: config.url,
        method: config.method
    }
    const adapter = getDefaultAdapter(Params);
    return adapter;
}


// 适配返回对应端的请求对象
function getDefaultAdapter(config: any) {
    // 浏览器
    if(typeof XMLHttpRequest !== 'undefined') {
        return xhr
    } 
    // node
    if(typeof window === 'undefined') {
        return adapter
    }

}

function xhr() {}

function adapter() {}