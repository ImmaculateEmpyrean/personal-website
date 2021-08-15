<template>
    <div :class="getClass" :style="style">
        
    </div>
</template>

<script>
export default {
    name: "MainImageDisplay",
    props:{
        imagePath:{
            type: String,
            default: require('@/assets/check-texture.png')
        },
        imagePosition : {
            type: String,
            default: "center"
        }
    },
    computed:{
        style(){
            return `background-image: url('${this.imagePath}');`;
        },
        getClass(){
            if(this.imagePosition === 'left')
                return 'picture-box left';
            else return "picture-box";
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/_settings.scss';

    .picture-box{
        flex: 1 1 55%;

        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;

        &.left{
            background-position: center left;
        }

        @include atleast-desktop{
            background-size: cover;
            background-position: center center;
        }
    }
</style>
