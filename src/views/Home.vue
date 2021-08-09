<template>
    <Content :heading1="heading1" :heading2="heading2" :caption="caption" :description="description"
             :showCaption="showCaption" :showButton="showButton" :imagePath="imagePath" 
             @wheel="wheelEvent"/>
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
        description: "Video game programmer & full stack web and database designer as well as developer",
        showButton: false,
        imagePath: require("@/assets/home.png"),

        next: "DevJourney",
        prev: null
    }
  },
  methods:{
    async wheelEvent(e){
             if (e.deltaY > 0) {
                await this.$emit("renderNextView");
                this.$router.push(this.next);
            }
        }
  }
}
</script>
