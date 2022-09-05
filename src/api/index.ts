import request from './request'

interface Test {
  pageNum?: number
  pageSize?: number
}

// test
export const getListOfGoods = (data: Test) => {
  return request({
    url: 'test',
    method: 'get',
    data
  })
}
