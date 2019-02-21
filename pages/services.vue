<template>
  <nuxt-child :key="page.slug"/>
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