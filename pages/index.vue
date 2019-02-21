<template>
  <article class="landing">
    <header class="entry-header">
      <h1>
        <span>40North</span>
        <br/>
        <span>Studio</span>
      </h1>
    </header>
    <div class="entry-content">
      <ul>
        <li>Ideas</li>
        <li>Collaboration</li>
        <li>Developement</li>
        <li>Reading, PA</li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {

  head() {
    return {
      title: '40North Studio | Ideas | Collaboration | Development',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ],
      bodyAttrs: {
        class: 'page landing'
      }
    }
  }
}
</script>