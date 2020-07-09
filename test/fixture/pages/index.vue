<template>
  <div class="container">
    <div>
      <h1 class="title">
        <i class="fontagon-icons ft-icons ft-accessible_forward-black-18dp"/>
      </h1>
    </div>
  </div>
</template>

<script>
  import '../assets/font/fontagon-icons.css'

  export default {
    name: 'index',
    components: {}
  }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: bold;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
    color: #61b2a7;
  }

  .sub-title {
    color: #00c58e;
  }
</style>
