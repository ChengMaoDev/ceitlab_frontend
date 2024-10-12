import request from '../../utils/request';

/**
 * 登录api接口集合
 * @method signIn 用户登录
 */
export function login(params){
    return request({
        url: '/api/v1/system/login',
        method: 'post',
        data: params,
    });
}

/**
 * 退出登录
 */
export function logout(){
    return request({
        url: '/api/v1/system/logout',
        method: 'get',
    });
}
