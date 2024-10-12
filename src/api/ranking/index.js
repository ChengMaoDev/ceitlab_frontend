import request from '../../utils/request';

/**
 * 文章的排名(有算法)
 */

/**
 * 获取文章前100名
 * 有顺序
 * @returns
 *   int64 id = 1;
 *   string title = 2;
 *   int32 status = 3;
 *   string content = 4;
 *   Author author = 5;
 *   google.protobuf.Timestamp ctime = 6;
 *   google.protobuf.Timestamp utime = 7;
 */
export function authurl(params){
    return request({
        url: '/ranking/get',
        method: 'post',
        data: params,
    });
}