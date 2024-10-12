import request from '../../utils/request';


/**
 * 关注某人
 *   // 被关注者
 * int64 followee = 1;
 *   // 关注者
 * int64 follower = 2;
 * @param params
 * @returns {*}
 */
export function follow(params){
    return request({
        url: '/follow/add',
        method: 'post',
        data: params,
    });
}

/**
 * 取关某人
 *   // 被关注者
 * int64 followee = 1;
 *   // 关注者
 * int64 follower = 2;
 * @param params
 * @returns {*}
 */
export function del(params){
    return request({
        url: '/follow/del',
        method: 'post',
        data: params,
    });
}

/**
 * 获得某个人的关注列表
 *  @params int64 follower = 1;
 *   int64 offset = 2;
 *   int64 limit =3;
 *
 *  @returns int64 id = 1;
 *   int64 follower = 2;
 *   int64 followee = 3;
 */
export function followeeList(params){
    return request({
        url: '/follow/followeeList',
        method: 'post',
        data: params,
    });
}


/**
 * 获得某个人的关注列表
 *  @params int64 followee = 1;
 *
 *  @returns int64 id = 1;
 *   int64 follower = 2;
 *   int64 followee = 3;
 */
export function followerList(params){
    return request({
        url: '/follow/followerList',
        method: 'post',
        data: params,
    });
}

/**
 * 获取默认的关注人数
 * @params followee = 1
 * @returns
 *   // 被多少人关注
 *   int64 followers =  1;
 *   // 自己关注了多少人
 *   int64 followees = 2;
 */
export function num(params){
    return request({
        url: '/follow/num',
        method: 'post',
        data: params,
    });
}