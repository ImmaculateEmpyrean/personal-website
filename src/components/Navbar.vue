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
                    <li> <a href="#" class="text">LinkedIn</a></li>
                </ul>
            </div>
            <div class="hamburger-menu" @click="hamburgerIconClicked">
                <svg width="75" height="50" viewBox="0 0 75 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="75" height="5" rx="2.5" class="hamburger-bar-one"/>
                    <rect y="22.5" width="75" height="5" rx="2.5" class="hamburger-bar-two"/>
                    <rect y="45" width="75" height="5" rx="2.5" class="hamburger-bar-three"/>
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
    }
}
</script>



<style lang="scss" scoped>
    .nav-bar{
        transition: color 2s, background-color 2s;

        flex: 1 1 5%;
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        padding: 0px 14px;
        position: relative;
        z-index: 3;

        .left{
            display: flex;
            align-items: center;
            column-gap: 14px;
        }

        .right{
            display: flex;
            align-items: center;
            column-gap: 14px;

            .icons > ul{
                transition: color 2s;

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
                    transition: fill 2s;
                    fill: black;
                }
                .hamburger-bar-two{
                    transition: fill 2s;
                    fill: black;
                }
                .hamburger-bar-three{
                    transition: fill 2s;
                    fill: black;
                }
            }
        }

        .text{
            font-family: Futura Bk;
            font-style: normal;
            font-weight: normal;
            font-size: 1.5vw;
            line-height: 135.8%;
            /* or 33px */
            letter-spacing: 0.2em;
            text-transform: capitalize;
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
                fill: white;
            }
            .hamburger-bar-two{
                fill: white;
            }
            .hamburger-bar-three{
                fill: white;
            }
        }
    }

</style>