import { defineStore } from 'pinia';
import { ref } from 'vue';
import { login, getPermission } from '@/api/api';
import { setItem, getItem, removeAllItem } from '@/utils/storage';
import { TOKEN, USERINFO } from '@/config';
import { setTimeStamp } from '@/utils/auth';
import { formatPermissionList } from '@/utils/index';
import router, { resetRouter } from '@/router/index';

export const useUser = defineStore(
  user,
  () => {
    const token = ref(getItem(TOKEN) || '');
    const userInfo = ref(getItem(USERINFO) || {});
    const roles = ref([]);
    const buttons = ref([]);

    function setToken(state, token) {
      token.value = token;
      setItem(TOKEN, token);
    }

    function setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
      setItem(USERINFO, userInfo);
    }
    function setRoles(state, roles) {
      state.roles = roles;
    }
    function setButtons(state, buttons) {
      state.buttons = buttons;
    }

    function login(context, userInfo) {
      const { username, password, captcha_code, code_key } = userInfo;
      return new Promise((resolve, reject) => {
        login({
          username,
          password,
          captcha_code,
          code_key
        })
          .then((data) => {
            this.commit('user/setToken', data.bizobj.sys_token);
            this.commit('user/setUserInfo', data.bizobj);
            // 保存登录时间
            setTimeStamp();
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
    function getPermissionData(context) {
      return new Promise((resolve, reject) => {
        getPermission()
          .then((data) => {
            let obj = formatPermissionList(data.bizobj);
            let role_arr = obj.role_arr; //菜单权限
            let button_arr = obj.button_arr; //button权限
            role_arr.push({ url: '/third' });
            role_arr.push({ url: '/third/editor' });
            role_arr.push({ url: '/third/markdown' });
            let info = {
              roles: role_arr
            };
            console.log(role_arr);
            this.commit('user/setRoles', role_arr);
            this.commit('user/setButtons', button_arr);
            resolve(info);
          })
          .catch((err) => {});
      });
    }
    function logout() {
      resetRouter();
      this.commit('user/setToken', '');
      this.commit('user/setUserInfo', {});
      this.commit('user/setRoles', []);
      this.commit('user/setButtons', []);
      this.commit('app/removeTagsView', {
        type: 'all'
      });
      removeAllItem();
      router.push('/login');
    }
  },
  {
    persist: true
  }
);
