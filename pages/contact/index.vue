<template>
  <article class="entry">
    <div class="entry-left">
      <header class="entry-header">
        <h1>{{ page.title.rendered }}</h1>
      </header>
      <div class="entry-content" v-html="page.content.rendered"></div>
    </div>
    <div class="entry-right">
      <form>
        <label>Name</label>
        <input type="text" name="name"/>
      </form>
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