import request from '../../utils/request';

/**
 * 编辑用户信息
 * Nickname string `json:"nickname"`
 * // 2023-01-01
 * Birthday string `json:"birthday"`
 * AboutMe  string `json:"aboutMe"`
 */
export function edit(params){
    return request({
        url: '/users/edit',
        method: 'post',
        data: params,
    });
}

/**
 * 获取用户信息
 * Email    string `json:"email"`
 * Phone    string `json:"phone"`
 * Nickname string `json:"nickname"`
 * Birthday string `json:"birthday"`
 * AboutMe  string `json:"aboutMe"`
 */
export function profile(params){
    return request({
        url: '/users/profile',
        method: 'get',
        data: params,
    });
}
