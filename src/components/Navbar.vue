<template>
    <div class="nav-bar">
        <div class="left">
            <img src="@/assets/logo.svg" alt="logo-icon">
            <h1 class="text">Veeru Empyrean</h1>
        </div>
        
        <div class="right">
            <div class="icons">
                <ul>
                    <li><span class="iconify" data-inline="false" data-icon="akar-icons:github-fill"></span></li>
                    <li><span class="iconify" data-inline="false" data-icon="ph:discord-logo-light"></span></li>
                    <li><span class="iconify" data-inline="false" data-icon="bx:bxl-firefox"></span></li>
                    <li v-show="showLinkedInIcon"><span class="iconify" data-inline="false" data-icon="akar-icons:linkedin-fill"></span></li>
                    <li> <a href="#" class="text">LinkedIn</a></li>
                </ul>
            </div>
            <div class="hamburger-menu" @click="hamburgerIconClicked">
                <svg viewBox="0 0 75 50" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect           width="75" height="5" rx="2.5" class="hamburger-bar-one"/>
                    <rect y="22.5"  width="75" height="5" rx="2.5" class="hamburger-bar-two"/>
                    <rect y="45"    width="75" height="5" rx="2.5" class="hamburger-bar-three"/>
                </svg>
            </div>
        </div>
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
        //padding: 0px $spacing-normal;
        margin: $spacing-normal;
        position: relative;
        z-index: 3;

        .left{
            display: flex;
            align-items: center;
            column-gap: $spacing-normal;

            img{
                @extend .main-logo;
            }
        }

        .right{
            display: flex;
            align-items: center;
            column-gap: $spacing-normal;

            .icons > ul{
                transition: color 2s;
                align-items: flex-end;

                display: flex;
                column-gap: 7px;
                font-size: 30px;

                color: black;

                .text{
                    transition: color 2s;
                    color: black;
                }
            }

            svg{
                cursor: pointer;

                .hamburger-bar-one{
                    transition: fill 2s, transform 2s;
                    fill: black;
                }
                .hamburger-bar-two{
                    transition: fill 2s, transform 2s;
                    fill: black;
                }
                .hamburger-bar-three{
                    transition: fill 2s, transform 2s, transform-origin 2s;
                    fill: black;
                }
            }
        }

        .text{
           @extend .subtitle;
        }
    }

    .nav-bar.color-inverted{
        color: white;
        background: black;

       .right .icons > ul{
            color: white;

            .text{
                color: white;
            }
        }

        svg{
            .hamburger-bar-one{
				transform: rotateZ(45deg);

                fill: white;
            }
            .hamburger-bar-two{
                transform: translateX(20vw);

                fill: white;
            }
            .hamburger-bar-three{
                transform-origin: left bottom;
                transform: rotateZ(-45deg);

                fill: white;
            }
        }
    }
</style>