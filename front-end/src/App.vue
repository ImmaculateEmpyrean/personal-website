<template>
    <div class="page">
      <transition 
        name="scrollPromptTransition"
        enter-active-class="animate__animated animate__fadeInUp"
        leave-active-class="animate__animated animate__fadeOutDown"
        mode="out-in"
      >
        <ScrollPrompt v-show="isHomePage"/>
      </transition>

      <MainMenu ref="MainMenu" @menuButtonClicked="menuButtonClicked" />
      <Navbar   ref="Navbar"   
        @hamburgerButtonClicked="hamburgerButtonClicked" 
        @setTransitionZoom="setTransitionZoom"
      />
      <div class="router-content">
        <ScrollIndicator v-if="atleastTablet" ref="ScrollIndicator"/>
        <router-view v-slot="{ Component }">
          <transition 
            name="routerTransition"
            :enter-active-class="pageEnterAnimation"
            :leave-active-class="pageLeaveAnimation"
            mode="out-in"
          >
              <component 
                :is="Component" :processWheel="processWheel"
                @renderPreviousView="renderPreviousView"
                @renderNextView="renderNextView"
                @setTransitionZoom="setTransitionZoom"
                @updateScrollIndicator="updateScrollIndicator"
                @enablePageScrolling="enablePageScrolling" @disablePageScrolling="disablePageScrolling"
                @hideScrollIndicator="hideScrollIndicator" @showScrollIndicator="showScrollIndicator"

                @enableProcessWheel="processWheel=true" @disableProcessWheel="processWheel=false"
                @isHomePage="isHomePage = true" @isNotHomePage="isHomePage = false"
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
import ScrollPrompt from '@/components/ScrollPrompt.vue';
import Content from '@/components/Content.vue';

export default {
  name: "App",
  components: {
    Navbar,
    ScrollIndicator,
    ScrollPrompt,
    Content,
    MainMenu
  },
  data(){
    return {
      pageEnterAnimation: "animate__animated animate__backInDown",
      pageLeaveAnimation: "animate__animated animate__backOutDown",
      testVar: true,
      processWheel: true,
      isHomePage: false
    }
  },
  computed:{
    atleastTablet: function(){
      if(window.innerWidth >= 768)
        return true;
      else return false;
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
    setTransitionZoom(){
        this.pageEnterAnimation = "animate__animated animate__zoomIn";
        this.pageLeaveAnimation = "animate__animated animate__zoomOut";
    },
    updateScrollIndicator(obj){
      if(this.$refs.ScrollIndicator != null){
        if(obj.showScrollIndicator === true){
          this.$refs.ScrollIndicator.show();
          this.$refs.ScrollIndicator.setCurrentPage(obj.pageNumber);

          this.disablePageScrolling();
        }
        else{
            this.$refs.ScrollIndicator.hide();
        }
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
    },

    disablePageScrolling(){
      let htmlElement = document.querySelector('html');
      let page = document.querySelector('#app > .page');

      htmlElement.style.overflow = "hidden";
      page.style.height = `${window.innerHeight}px`;
    },
    enablePageScrolling(){
      let htmlElement = document.querySelector('html');
      let page = document.querySelector('#app > .page');

      htmlElement.style.overflow = "auto";
      page.style.height = "auto";
    },
    hideScrollIndicator(){
      if(this.$refs.ScrollIndicator != null){
        this.$refs.ScrollIndicator.hide();
      }
    },
    showScrollIndicator(){
      if(this.$refs.ScrollIndicator != null){
        this.$refs.ScrollIndicator.show();
      }
    }

  },
}
</script>


<style lang="scss">
  @import '../src/assets/sass/_font.scss';
  @import '../src/assets/sass/_settings.scss';

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
  }

  //these variables are used to setup the animate.css framework defaults.. removing these MAY CAUSE DANGEROUS UNFORSEEN PROBLEMS AS IT WILL LIKELY BREAK A SERIES OF SETTIMEOUTS SOMEWHERE
  :root {
    --animate-duration: 2s;
    --animate-delay: 0s;
  }

  .page{
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .router-content{
    flex: 1 1 95%;
    display: flex;
    flex-direction: column;

    z-index: 1;

    @include atleast-desktop{
      flex-direction: row;
      column-gap: $spacing-normal;
    }
  }
</style>
