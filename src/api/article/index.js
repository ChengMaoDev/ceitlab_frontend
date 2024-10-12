import request from '../../utils/request';

/**
 * 获取文章
 * id int64
 */
export function get(params){
    return request({
        url: `/pub/${params}`,
        method: 'get',
    });
}

/**
 * 点赞文章
 * Id   int64 `json:"id"`
 * Like bool  `json:"like"`
 */
export function like(params){
    return request({
        url: `/pub/like`,
        method: 'post',
        data: params,
    });
}