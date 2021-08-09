<template>
    <div class="container">
        <MainTextDisplay  />
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
        
    },

    data(){
        return {
            imagePath: require("@/assets/sharpended-home-image.png")
        }
    }
}
</script>


<style lang="scss" scoped>
    .container{
        flex: 1 1 93%;
        border: 1px solid red;

        display: flex;
    }
</style>
