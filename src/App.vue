<template>
    <div class="page">
      <Navbar />
      <Content />>
    </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue';
import Content from '@/components/Content.vue';

export default {
  name: "App",
  components: {
    Navbar,
    Content
  }
}
</script>


<style lang="scss">
  *,*::before,*::after{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  ul{
      list-style-type: none;
  }
  a{
      text-decoration: none;
      color: black;
  }

  body{
      font-family: 'Nunito', sans-serif;
      overflow: hidden;
  }

  .page{
    display: flex;
    flex-direction: column;
    height: 100vh;

    row-gap: 1vh;
  }
</style>
