<template>
  <article class="entry">
    <div class="entry-left">
      <header class="entry-title">
        <h1>{{ page.title.rendered }}</h1>
      </header>
      <div class="entry-content" v-html="page.content.rendered"></div>
    </div>
    <div class="entry-right">
      <nav>
        <ul>
          <li>    
            <nuxt-link to="/services/custom-website-development.html">Custom Web Development</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services/custom-wordpress-development.html">Custom WordPress Development</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services/custom-interactive-experiences.html">Custom Interactive Experiences</nuxt-link>
          </li>
          <li>    
            <nuxt-link to="/services/custom-offline-web-experiences.html">Custom Offline Web Experiences</nuxt-link>
          </li>
          <li>    
            <nuxt-link to="/services/single-page-experiences.html">Single Page Experiences</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </article>
</template>

<script>
import {api, page} from '@/mixins';

export default {

  mixins: [
    api,
    page
  ]
}
</script>