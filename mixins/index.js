export const api = {
  fetch: async ({ route, store }) => {
    let matches;

    // extract just the page slug, required when using .html extension on routes
    if(route.params.slug) {
      matches = route.params.slug.match(/(.+(?=\.html)).html$/);
    } else {
      matches = route.path.match(/\/(.+(?=\.html)).html$/);
    }

    if(matches) {
      const slug = matches[1];

      // fetch page from API if not present in store
      if(!store.getters.hasPage(slug)) {
        return await store.dispatch('initial');
      }
    }
  }
};

export const page = {
  head() {
    return {
      title: this.page._yoast_wpseo_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page._yoast_wpseo_metadesc
        }
      ],
      bodyAttrs: {
        class: `page ${this.page.slug}`
      }
    }
  },

  computed: {
    page () {
      let matches;

      if(this.$route.params.slug) {
        matches = this.$route.params.slug.match(/(.+(?=\.html)).html$/);
      } else {
        matches = this.$route.path.match(/\/(.+(?=\.html)).html$/);
      }
  
      if(matches) {
        return this.$store.getters.getPageBySlug(matches[1]);
      }
      
      return {};
    }
  }
};