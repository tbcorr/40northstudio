<template>
  <footer class="site-footer">
    <p>&copy; {year} 40North Studio, LLC | All Right Reserved</p>
    <ul>
      <li><i class="icon vue"></i></li>
      <li><i class="icon nuxt"></i></li>
      <li><i class="icon wordpress"></i></li>
    </ul>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      const now = new Date();

      return now.getFullYear();
    }
  }
}
</script>