<template>
    <div class="nav-bar">
        
        <div class="left">
            <img src="@/assets/logo.svg" alt="logo-icon">
            <h1 class="subtitle">Veeru Empyrean</h1>
        </div>
        
        <ul class="center icons">
            <li><span class="iconify" data-inline="false" data-icon="akar-icons:github-fill"></span></li>
            <li><span class="iconify" data-inline="false" data-icon="ph:discord-logo-light"></span></li>
            <li><span class="iconify" data-inline="false" data-icon="bx:bxl-firefox"></span></li>
            <li v-show="showLinkedInIcon"><span class="iconify" data-inline="false" data-icon="akar-icons:linkedin-fill"></span></li>
            <li> <a href="#" class="subtitle">LinkedIn</a></li>
        </ul>
        
       <svg class="right hamburger-menu" @click="hamburgerIconClicked"
            width="50" height="34" viewBox="0 0 50 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="30.006" width="50" height="3.334" rx="1.667" fill="black"/>
                <rect width="50" height="3.334" rx="1.667" fill="black"/>
                <rect y="15.0031" width="50" height="3.334" rx="1.667" fill="black"/>
        </svg>

    </div>
</template>

<script>
export default {
    name: "Navbar",
    methods:{
        hamburgerIconClicked(){
            this.$el.classList.toggle('color-inverted');
            this.$emit('hamburgerButtonClicked');
        }
    },
    computed:{
        showLinkedInIcon: function(){
            if(window.innerWidth < 768){
                return true;
            }
            else return false;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/_text.scss';
    @import '../assets/sass/_settings.scss';

    @import '../assets/sass/_navbar.scss';

    .nav-bar{
        transition: color 2s, background-color 2s;
        flex: 1 1 5%;

        display: flex;
        justify-content: space-between;
        margin: $spacing-small;

        position: relative;
        z-index: 3;
    }

    .left{
        display: flex;
        align-items: center;
        column-gap: $spacing-normal;

        img{ @extend .main-logo; }
    }

    .center{
        display: flex;
        transition: color 2s;

        display: flex;
        align-items: center;

        column-gap: $spacing-small;
        font-size: 30px;

        @include atleast-tablet{
            margin-left: auto;  
            margin-right: $spacing-normal; 
        }
    }

    .right{
        display: flex;
        margin-top: auto;
        margin-bottom: auto;
    }
</style>
