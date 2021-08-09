<template>
    <div class="page">
      <Navbar />
      <div class="router-content">
        <ScrollIndicator />
        <router-view v-slot="{ Component }">
          <transition 
            name="routerTransition"
            enter-active-class="animate__animated animate__backInDown"
            leave-active-class="animate__animated animate__backOutDown"
            mode="out-in"
          >
              <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue';
import ScrollIndicator from '@/components/ScrollIndicator.vue';
import Content from '@/components/Content.vue';

export default {
  name: "App",
  components: {
    Navbar,
    ScrollIndicator,
    Content
  }
}
</script>


<style lang="scss">
  @import '../src/assets/sass/_font.scss';

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
      font-family: 'Futura', sans-serif;
      overflow: hidden;
  }

  .page{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .router-content{
    flex: 1 1 95%;
    display: flex;
  }
</style>
