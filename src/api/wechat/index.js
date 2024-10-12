import request from '../../utils/request';


/**
 * 微信二维码
 * 返回的url转成二维码
 * @returns url string
 */
export function authurl(params){
    return request({
        url: '/oauth2/wechat/authurl',
        method: 'post',
        data: params,
    });
}