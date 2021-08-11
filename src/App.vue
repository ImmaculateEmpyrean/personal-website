<template>
    <div class="page" @click="test">
      <MainMenu ref="MainMenu" @menuButtonClicked="menuButtonClicked" />
      <Navbar   ref="Navbar"   @hamburgerButtonClicked="hamburgerButtonClicked" />
      <div class="router-content">
        <ScrollIndicator ref="ScrollIndicator"/>
        <router-view v-slot="{ Component }">
          <transition 
            name="routerTransition"
            :enter-active-class="pageEnterAnimation"
            :leave-active-class="pageLeaveAnimation"
            mode="out-in"
          >
              <component 
                :is="Component"
                @renderPreviousView="renderPreviousView"
                @renderNextView="renderNextView"
              ></component>
          </transition>
        </router-view>
      </div>
    </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue';
import MainMenu from '@/components/MainMenu.vue';
import ScrollIndicator from '@/components/ScrollIndicator.vue';
import Content from '@/components/Content.vue';

export default {
  name: "App",
  components: {
    Navbar,
    ScrollIndicator,
    Content,
    MainMenu
  },
  data(){
    return {
      pageEnterAnimation: "animate__animated animate__backInDown",
      pageLeaveAnimation: "animate__animated animate__backOutDown",
      testVar: true
    }
  },
  methods:{
    renderPreviousView(){
        this.pageEnterAnimation = "animate__animated animate__backInDown";
        this.pageLeaveAnimation = "animate__animated animate__backOutDown";
    },
    renderNextView(){
        this.pageEnterAnimation = "animate__animated animate__backInUp";
        this.pageLeaveAnimation = "animate__animated animate__backOutUp";
    },
    test(){
      if(this.testVar === true){
          this.$refs.ScrollIndicator.hide();
          this.testVar=false;
      }
      else{
        this.$refs.ScrollIndicator.show();
        this.testVar=true;
      }   
    },
    hamburgerButtonClicked(){
        this.$refs.MainMenu.$el.classList.toggle('hidden');
    },
    menuButtonClicked(){
        this.$refs.MainMenu.$el.classList.add('hidden');
        this.$refs.Navbar.$el.classList.remove('color-inverted');

        this.pageEnterAnimation = "animate__animated animate__zoomIn";
        this.pageLeaveAnimation = "animate__animated animate__zoomOut";
    }
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

  //these variables are used to setup the animate.css framework defaults.. removing these MAY CAUSE DANGEROUS UNFORSEEN PROBLEMS AS IT WILL LIKELY BREAK A SERIES OF SETTIMEOUTS SOMEWHERE
  :root {
    --animate-duration: 2s;
    --animate-delay: 0s;
  }

  .page{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .router-content{
    flex: 1 1 95%;
    display: flex;

    z-index: 1;
  }
</style>
