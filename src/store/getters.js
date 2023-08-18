const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  sidebarOpened: (state) => state.app.sidebarOpened,
  tagsViewList: (state) => state.app.tagsViewList,
  roles: (state) => state.user.roles,
  buttons: (state) => state.user.buttons,
  hasRoles: (state) => {
    return state.user.roles && state.user.roles.length > 0;
  }
};
export default getters;
