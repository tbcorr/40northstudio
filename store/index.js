import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      pages: {}
    },

    getters: {
      getPageBySlug: (state) => (slug) => {
        const pages = Object.values(state.pages);

        return pages.find((page) => {
          return page.slug === slug;
        });
      },

      hasPage: (state, getters) => (slug) => {
        return !!getters.getPageBySlug(slug);
      }
    },

    mutations: {
      updatePages: (state, pages) => {
        const updates = {};

        pages.forEach((page) => {
          updates[page.id] = page;
        });
        
        state.pages = {...state.pages, ...updates};
      },
    },

    actions: {
      async nuxtServerInits({ dispatch }) {
        await dispatch('initial');
      },

      async initial({ commit }) {
        try {
          const pages = await this.$axios.$get('/pages');

          commit('updatePages', pages);
        } catch(e) {
          console.log(e);
        }
      },

      async fetchPage({ commit }, slug) {
        try {
          const page = await this.$axios.$get(`/pages?slug=${slug}`);

          commit('updatePages', page);
        } catch(e) {
          console.log(e);
        }
      }
    }
  });
}

export default createStore;