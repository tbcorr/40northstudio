<template>
  <header class="site-header">
    <router-link to="/" class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 537.46 304.4">
        <polygon points="385.37 72.67 357.92 107.83 412.81 107.83 385.37 72.67" fill="#318d43"/>
        <path d="M531.14,108.75,463.32,21.53A152.16,152.16,0,0,0,236.83,185.7H221.08V1.19H165.15L0,192.59l33.16,46.87H157.85V304.4h63.23V239.46h39.54A152.19,152.19,0,0,0,531.14,108.75ZM157.85,185.7h-80l80-93.76Zm227.42,55.16a88.67,88.67,0,1,1,88.67-88.67A88.66,88.66,0,0,1,385.27,240.86Z" fill="#4d4d4f"/>
      </svg>
    </router-link>
    <no-ssr>
      <Menu/>
    </no-ssr>
  </header>
</template>

<script>
import Menu from '@/components/Navigation/Menu.vue';

export default {
  components: {
    Menu
  }
}
</script>