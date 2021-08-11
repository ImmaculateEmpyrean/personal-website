<template>
    <div class="picture-box" :style="style">
        
    </div>
</template>

<script>
export default {
    name: "MainImageDisplay",
    props:{
        imagePath:{
            type: String,
            default: require('@/assets/check-texture.png')
        }
    },
    computed:{
        style(){
            console.log(`url('${this.imagePath}')`);
            return `background-image: url('${this.imagePath}')`;    
        }
    }
}
</script>

<style lang="scss" scoped>
    .picture-box{
        flex: 1 1 55%;
        //border : 1px solid blue;  

        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
