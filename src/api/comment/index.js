import request from '../../utils/request';

/**
 * 获取评论列表
 */
export function list(params){
    return request({
        url: '/comment/list',
        method: 'post',
        data: params,
    });
}

/**
 * 删除评论
 */
export function del(params){
    return request({
        url: '/comment/delete',
        method: 'post',
        data: params,
    });
}

/**
 * 创建评论
 */
export function create(params){
    return request({
        url: '/comment/create',
        method: 'post',
        data: params,
    });
}

/**
 * 展开评论
 */
export function replies(params){
    return request({
        url: '/comment/replies',
        method: 'post',
        data: params,
    });
}