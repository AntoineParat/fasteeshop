export const state = () => ({
  cookies: null,
  test: "there is cookies",
  count: 0
});

export const mutations = {
  cookies(state, cookie) {
    state.count++;
    state.cookies = cookie + " " + state.count;
  }
};

export const actions = {
  nuxtServerInit(vuexContext, context) {
    if (context.req.headers.cookie) {
      vuexContext.commit("cookies", context.req.headers.cookie);
      vuexContext.dispatch("User/isConnected");
    } else {
      vuexContext.commit("cookies", "pas de cookies");
    }
  }
};
