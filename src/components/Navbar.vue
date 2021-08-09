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
                        <li> <a href="#" class="text">LinkedIn</a> </li>
                    </ul>
                </div>
                <div class="hamburger-menu">
                    <img src="@/assets/hamburger-icon.svg" alt="hamburger-icon">
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    .nav-bar{
        flex: 1 1 5%;
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        padding: 0px 14px;

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
                display: flex;
                column-gap: 7px;
                font-size: 30px;
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
</style>