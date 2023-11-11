// 对于用户操作的借口管理

import axios from '@/axios';

export default {
  login(params) {
    return axios.post('/passport/login', params);
  },
};
