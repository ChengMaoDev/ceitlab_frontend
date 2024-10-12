import request from '../../utils/request';

/**
 * 查看收件箱
 * @params
 *   int64 Uid = 1;
 *   int64 Limit = 2;
 *   int64 timestamp = 3;
 * @returns
 *   int64 id = 1;
 *   User user = 2;
 *   string type = 3;
 *   string content = 4;
 *   int64 ctime = 5;
 */
export function find(params){
    return request({
        url: '/feed/find',
        method: 'post',
        data: params,
    });
}