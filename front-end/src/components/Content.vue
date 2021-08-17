<template>
    <div class="container">
        <MainTextDisplay 
        @buttonClicked="$emit('buttonClicked')"
        :heading1="heading1" :heading2="heading2" :caption="caption" :description="description"
        :showCaption="showCaption" :showButton="showButton"/>

        <MainImageDisplay :imagePath="imagePath" :imagePosition="imagePosition"/>
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
        },
        imagePosition:{
            type: String,
            default: 'center'
        }
    },

    data(){
        return {
            
        }
    }
}
</script>


<style lang="scss" scoped>
    @import '../assets/sass/_settings.scss';

    .container{
        transition: max-height 2s;
        flex: 1 1 100%;
        max-height: 100%;

        display: flex;
        flex-direction: column;

        @include atleast-desktop{
            flex-direction: row;
        }
    }
</style>
