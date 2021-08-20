<template>
    <div class="container">
        <MainTextDisplay 
        @buttonClicked="$emit('buttonClicked')"
        @buttonClickedAux="$emit('buttonClickedAux')"
        :heading1="heading1" :heading2="heading2" :caption="caption" :description="description"
        :showCaption="showCaption" :showButton="showButton" :showButtonAux="showButtonAux"
        :buttonText="buttonText" :buttonTextAux="buttonTextAux" />

        <MainImageDisplay :imagePath="imagePath" :imagePosition="imagePosition" :imageInvertColor="imageInvertColor"/>
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
        showButtonAux:{
            type: Boolean,
            default: false
        },
        buttonText:{
            type: String,
            default: "Tell Me More"
        },
        buttonTextAux:{
            type: String,
            default: "Tell Me More"
        },
        imagePath:{
            default: require("@/assets/home.png")
        },
        imagePosition:{
            type: String,
            default: 'center'
        },
        imageInvertColor: {
            type: Boolean,
            default: false
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
        transition: max-height 2s,color 2s, background-color 2s;
        flex: 1 1 100%;
        max-height: 100%;

        display: flex;
        flex-direction: column;

        @include atleast-desktop{
            flex-direction: row;
        }

        &.inverted-color{
            background-color: black;
            color: white;
        }
    }
</style>
