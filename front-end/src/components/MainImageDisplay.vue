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
        },
        imageInvertColor: {
            type: Boolean,
            default: false
        }
    },
    computed:{
        style(){
            return `background-image: url('${this.imagePath}');`;
        },
        getClass(){
            let cls = "";
            if(this.imagePosition === 'left')
                cls = cls + 'picture-box left ';
            else cls = cls + "picture-box ";

            if(this.imageInvertColor == true)
                cls = cls + "inverted-color ";
            
            return cls;
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/_settings.scss';

    .picture-box{
        transition: filter 2s;
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

        &.inverted-color{
            filter: invert(1);
        }
    }
</style>
