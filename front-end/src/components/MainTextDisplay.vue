<template>
    <div class="text-box">
        <div class="text-box-internal">
            <h1>{{heading1}}</h1>
            <h1>
                {{heading2}}
                <h2 v-show="showCaption">{{caption}}</h2>
            </h1>
            <img src="@/assets/logo-line.svg" alt="logo-line" width = "250">
            <p>{{description}}</p>
            <div class="button-holder">
                <Button buttonName="auxButton"  :buttonText="buttonTextAux" :showButton="showButtonAux"  @buttonClicked="$emit('buttonClickedAux')"/>
                <Button buttonName="mainButton" :buttonText="buttonText"    :showButton="showButton"    @buttonClicked="$emit('buttonClicked')"/>
            </div>
        </div>
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
            default: "Auxillary Button"
        }
    },

    components:{
        Button
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/_settings.scss';
    @import '../assets/sass/_text.scss';

    .text-box {
        flex: 1 1 45%;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        @include atleast-desktop{ justify-content: center; }
    }

    .text-box-internal{
        transition: padding 2s;
        display: flex;
        flex-direction: column;

        &.add-padding-left{
            @include atleast-desktop{
                padding-left: $spacing-large;
            }
        }
    }

    img{
        margin: 0 auto;
        @include atleast-desktop{
            margin: 0
        }
    }

    h1{ @extend .heading; }
    h2{ @extend .caption; }
    p{  @extend .text-normal; }

    button{
        margin-top: $spacing-small;
        margin-bottom: $spacing-small;

        @include atleast-desktop{
            margin-top:    $spacing-normal;
            margin-bottom: $spacing-normal;
        }
    }

    .button-holder{
        display: flex;
        justify-content: flex-end;
    }
</style>
