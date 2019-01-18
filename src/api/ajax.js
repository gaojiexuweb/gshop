/* 
    ajax请求函数模块
    返回值：promise对象(异步返回的数据是：response.data)
*/
import axios from 'axios'
import { error } from 'util';
export default function ajax (url,data={},type='GET'){
    //resolve  reject  两个函数
    // new 一个新的Promise，在里面返回response.data这样就直接拿到数据，不用res.data.data
    return new Promise(function(resolve,reject){
        //执行异步ajax请求
        let promise
        if (type === 'GET') {
            // 准备 url query 参数数据
            let dataStr = '' //数据拼接字符串
                Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
                }
            // 发送 get 请求
            promise = axios.get(url)
        } else {
            // 发送 post 请求
            promise = axios.post(url, data)
        }

        promise.then(function(response){
            // then调用成功的函数
            resolve(response.data)
        })
        .catch(function(error){
            reject(error)
        })
        // 成功调用resolve

        // 失败调用reject
    })

    

        return promise
}


/* 
原来调用ajax是这样
response = await ajax()
result = response.data

希望实现  
response = await ajax().data

那就套用一层
*/