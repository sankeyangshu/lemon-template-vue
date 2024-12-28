import { defineMock } from 'vite-plugin-mock-dev-server';
import { resultError, resultSuccess } from '../util';

interface userType {
  id: number;
  username: string;
  password: string;
  nickname: string;
  avatar: string;
  sign?: string;
  token: string;
}

const mockUsers: userType[] = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    nickname: '三棵杨树',
    avatar: 'https://avatars.githubusercontent.com/u/64878070?v=4',
    sign: '从来没有真正的绝境，只有心灵的迷途',
    token: 'adminToken',
  },
  {
    id: 2,
    username: 'test',
    password: '123456',
    nickname: '测试账号',
    avatar: 'https://avatars.githubusercontent.com/u/2?v=4',
    sign: '水光潋滟晴方好，山色空蒙雨亦奇',
    token: 'testToken',
  },
  {
    id: 3,
    username: 'guest',
    password: '123456',
    nickname: '访客',
    avatar: 'https://avatars.githubusercontent.com/u/3?v=4',
    token: 'guestToken',
  },
];

export default defineMock([
  {
    url: '/api/auth/login',
    method: 'POST',
    delay: 500,
    body: ({ body }) => {
      const { username, password } = body;
      const userData = mockUsers.find(
        (item) => item.username === username && item.password === password
      );
      if (!userData) {
        return resultError('帐号或密码不正确');
      }

      const { token, ...rest } = userData;
      return resultSuccess({
        user: rest,
        token,
      });
    },
  },
]);
