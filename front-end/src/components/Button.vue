<template>
    <button @click="$emit('buttonClicked')" v-show="showButtonInternal"
            :class="'animate__animated '+buttonName" ref="button">
            {{buttonTextInternal}}
    </button>    
</template>

<script>
export default {
    props:{
        buttonText: {
            type: String,
            default: "Tell Me More"
        },
        showButton:{
            type: Boolean,
            default: false
        },
        buttonName:{
            type: String,
            default: "NoCLASS"
        }
    },
    data (){
        return {
            buttonTextInternal: "Tell Me More",
            showButtonInternal: false
        }
    },
    watch: { 
      	buttonText: function(newValue, oldValue) {
            let that = this;

            let button = this.$refs.button;
            button.classList.add('animate__fadeOut');
            
            setTimeout(function(){
                button.classList.remove('animate__fadeOut');
                button.classList.add('animate__fadeIn');
                that.buttonTextInternal = newValue;
            },2000)

            setTimeout(function(){
                button.classList.remove('animate__fadeIn');
            },4000)
        },
        showButton: function(){
            let that = this;
            let button = this.$refs.button;

            if(this.showButton === false){
                button.classList.add('animate__fadeOutLeft');
                setTimeout(function(){
                    button.classList.remove('animate__fadeOutLeft');
                    that.showButtonInternal = false;
                },2000);
            } 
            else if(this.showButton === true) {
                this.showButtonInternal = true;
                button.classList.add('animate__fadeInLeft');
                setTimeout(function(){
                    button.classList.remove('animate__fadeInLeft');
                },2000)
            }
        }
    },
    mounted(){
        this.buttonTextInternal = this.buttonText;
        this.showButtonInternal = this.showButton;
    }
}
</script>

<style lang="scss" scoped>
    button{
        transition: background-color 1s,
                    color 1s, width 2s;

        background-color: #000000;
        color: white;
        padding: 1.8vh 4vh;
        border: 5px solid black;

        //margin-left: auto;
        margin-right: 14px;
        font-size: 20px;

        &:hover{
            color: black;
            background-color: white;
            border: 5px solid black;
        }

        &.color-inverted{
            background-color:white;
            color: black;

            &:hover{
                color: white;
                background-color: black;
                border: 5px solid white;
            }
        }

        &.full-width{
            width: 100%;
        }
    }
</style>

