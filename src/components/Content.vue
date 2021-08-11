<template>
    <div class="container">
        <MainTextDisplay 
        :heading1="heading1" :heading2="heading2" :caption="caption" :description="description"
        :showCaption="showCaption" :showButton="showButton"/>
        <MainImageDisplay :imagePath="imagePath"/>
    </div>
</template>


<script>
import MainTextDisplay  from '@/components/MainTextDisplay.vue' ;
import MainImageDisplay from '@/components/MainImageDisplay.vue';

export default {
    name: "Content",
    components: {
        MainTextDisplay,
        MainImageDisplay
    },

    props:{
        heading1:{
            type: String,
            default: "Veeru"
        },
        heading2:{
            type: String,
            default: "Empyrean"
        },
        caption:{
          type: String,
          default: "portfolio"  
        },
        showCaption:{
            type: Boolean,
            default: true
        },
        description:{
            type: String,
            default: "video game programmer & full stack web and database designer as well as developer"
        },
        showButton:{
            type: Boolean,
            default: false
        },
        imagePath:{
            default: require("@/assets/sharpended-home-image.png")
        }
    },

    data(){
        return {
            
        }
    }
}
</script>


<style lang="scss" scoped>
    .container{
        flex: 1 1 100%;
        //border: 1px solid red;

        display: flex;
    }
</style>
