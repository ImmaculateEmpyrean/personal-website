<template>
    <button @click="$emit('buttonClicked')" v-show="showButton"
            class="animate__animated" ref="button">
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
        }
    },
    data (){
        return {
            buttonTextInternal: "Tell Me More"
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
        }
    },
    mounted(){
        this.buttonTextInternal = this.buttonText;
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

        margin-left: auto;
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

