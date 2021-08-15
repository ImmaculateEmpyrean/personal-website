<template>
    <div class="page">
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
                @setTransitionZoom="setTransitionZoom"
                @updateScrollIndicator="updateScrollIndicator"
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
    setTransitionZoom(){
        this.pageEnterAnimation = "animate__animated animate__zoomIn";
        this.pageLeaveAnimation = "animate__animated animate__zoomOut";
    },
    updateScrollIndicator(obj){
        if(obj.showScrollIndicator === true){
            this.$refs.ScrollIndicator.show();
            this.$refs.ScrollIndicator.setCurrentPage(obj.pageNumber);
        }
        else{
            this.$refs.ScrollIndicator.hide();
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
  },
  mounted(){
    console.log('mounted app');

    let fixedHeightPage = this.$refs.ScrollIndicator.showScrollBar;
    document.addEventListener('resize',function(){
      if(fixedHeightPage === true ){
        let page = document.querySelector('#app > .page');
        page.style.height = `${window.innerHeight}px`; //this is done so as to allow the calculation of height in phones excluding the url bar   
        page.style.overflowY = "hidden";
      }
      else {
        let page = document.querySelector('#app > .page');
        page.style.height = "auto"; //this is done so as to allow the calculation of height in phones excluding the url bar   
        page.style.overflowY = "auto";
      }  
    })

    //the home page as I know is not scrollable by normal means
    let page = document.querySelector('#app > .page');
    page.style.height = `${window.innerHeight}px`; //this is done so as to allow the calculation of height in phones excluding the url bar
    page.style.overflowX = "hidden";
    page.style.overflowY = "hidden";
  }
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
      //overflow: hidden;
  }

  //these variables are used to setup the animate.css framework defaults.. removing these MAY CAUSE DANGEROUS UNFORSEEN PROBLEMS AS IT WILL LIKELY BREAK A SERIES OF SETTIMEOUTS SOMEWHERE
  :root {
    --animate-duration: 2s;
    --animate-delay: 0s;
  }

  .page{
    display: flex;
    flex-direction: column;
    //height: 100vh;
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
