import { defineStore } from 'pinia';
import { ref } from 'vue';
import { postLoginAPI, type loginDataType, type userInfoType } from '@/api/System/user';
import { router } from '@/router';

export const useUserStore = defineStore(
  'userState',
  () => {
    const userInfo = ref<userInfoType | null>(null); // 用户信息
    const token = ref<string | null>(null); // 用户token

    const setUserInfo = (value: userInfoType) => {
      userInfo.value = value;
    };

    const setToken = (value: string) => {
      token.value = value;
    };

    const login = async (loginForm: loginDataType) => {
      const { username, password } = loginForm;

      return new Promise<void>((resolve, reject) => {
        postLoginAPI({ username: username.trim(), password })
          .then(({ data }) => {
            setToken(data.token); // 保存用户token
            setUserInfo(data.user);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    };

    const logout = (goLogin = false) => {
      userInfo.value = null;
      token.value = null;
      if (goLogin) {
        router.push('/login');
      }
    };
    return {
      userInfo,
      token,
      setUserInfo,
      setToken,
      login,
      logout,
    };
  },
  {
    persist: true, // 进行持久化存储
  }
);
