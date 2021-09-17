<template>
    <Content :heading1="heading1" :heading2="heading2" :caption="caption" :description="description"
             :showCaption="showCaption" :showButton="true" :showButtonAux="true"  :imagePath="imagePath"
             buttonText="View Portfolio" buttonTextAux="Contact Me" 
             @wheel="wheelEvent" v-touch:swipe.top="swipeUp" 
             @buttonClicked="viewPortfolio" @buttonClickedAux="gotoContactMe"/>
</template>

<script>
import Content from '@/components/Content.vue';

export default {
  name: 'Home',
  components: {
    Content
  },
  data (){
    return {
        heading1:"Veeru",
        heading2:"Empyrean",
        caption: "portfolio",
        showCaption: true,
        description: "I program video games and fullstack websites for a living while pursuing my video game engine as a passionate hobby.",
        imagePath: require("@/assets/home.png"),

        next: "DevJourney",
        prev: null,

        pageNumber: 1
    }
  },
  props:{
        processWheel:{
            type: Boolean,
            default: true
        }
    },
  methods:{
    async wheelEvent(e){
      if(this.processWheel === true){
        if(e.deltaY > 0){
          await this.$emit("renderNextView");
          this.$router.push(this.next);
        }
      }
    },
    async swipeUp(e){
      if(this.processWheel === true){
        await this.$emit("renderNextView");
        this.$router.push(this.next);
      }
    },
    viewPortfolio(){
      this.$emit('renderNextView');
      this.$router.push({
        name: 'DevJourney',
        params: {
          showPortfolioOnMount: true
        }
      });
    },
    gotoContactMe(){
      this.$emit('renderNextView');
			this.$router.push('/ContactMe');
    }
  },

  mounted(){
    //this page cannot be scrolled
    this.$emit('disablePageScrolling');
  
    this.$emit('updateScrollIndicator',{
        showScrollIndicator: true,
        pageNumber: 1
    });
    
    let that = this;
    setTimeout(function(){
      that.$emit('isHomePage');
    },2000)
  },
   beforeUnmount(){
    this.$emit('isNotHomePage');
  }
}
</script>
