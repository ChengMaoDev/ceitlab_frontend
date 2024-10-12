import request from '../../utils/request';

/**
 * 搜索服务
 * @returns User & Article
 */
export function search(params){
    return request({
        url: `/search/${params}`,
        method: 'get',
    });
}