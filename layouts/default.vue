<template>
  <div class="site-container">
    <Header/>
    <div class="site-inner">
      <main>
        <nuxt/>
      </main>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
}
</script>
