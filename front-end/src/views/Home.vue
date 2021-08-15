<template>
    <Content :heading1="heading1" :heading2="heading2" :caption="caption" :description="description"
             :showCaption="showCaption" :showButton="showButton" :imagePath="imagePath" 
             @wheel="wheelEvent" v-touch:swipe.top="swipeUp" />
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
        showButton: false,
        imagePath: require("@/assets/home.png"),

        next: "DevJourney",
        prev: null,

        pageNumber: 1
    }
  },
  methods:{
    async wheelEvent(e){
             if (e.deltaY > 0) {
                await this.$emit("renderNextView");
                this.$router.push(this.next);
            }
        },
    async swipeUp(e){
          await this.$emit("renderNextView");
          this.$router.push(this.next);
        }
  },

  mounted(){
    this.$emit('updateScrollIndicator',{
        showScrollIndicator: true,
        pageNumber: 1
    });
  },
}
</script>
