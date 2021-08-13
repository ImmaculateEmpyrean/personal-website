<template>
    <div class="text-box">
        <h1>{{heading1}}</h1>
        <h1>
            {{heading2}}
            <h2 v-show="showCaption">{{caption}}</h2>
        </h1>
        <img src="@/assets/logo-line.svg" alt="logo-line" width = "250">
        <p>{{description}}</p>
        <Button :buttonText="buttonText" :showButton="showButton"/>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
    name: "MainTextDisplay",
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
        buttonText:{
            type: String,
            default: "Tell Me More"
        }
    },

    components:{
        Button
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/_text.scss';

    .text-box {
        flex: 1 1 45%;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1{
        @extend .heading;
    }

    h2{
        @extend .caption;
    }

    p{
       @extend .text-normal;
    }
</style>
