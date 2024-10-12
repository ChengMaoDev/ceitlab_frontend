import request from '../../utils/request';


/**
 * 注册api接口集合
 * Email           string `json:"email"`
 * Password        string `json:"password"`
 * ConfirmPassword string `json:"confirmPassword"`
 */
export function signup(params){
    return request({
        url: '/users/login',
        method: 'post',
        data: params,
    });
}



/**
 * 登录api接口集合
 * Email    string `json:"email"`
 * Password string `json:"password"`
 */
export function login(params){
    return request({
        url: '/users/login',
        method: 'post',
        data: params,
    });
}

/**
 * 退出登录
 */
export function logout(){
    return request({
        url: '/users/logout',
        method: 'post',
    });
}


/**
 * 刷新token
 */
export function refresh_token(){
    return request({
        url: '/users/refresh_token',
        method: 'post',
    });
}