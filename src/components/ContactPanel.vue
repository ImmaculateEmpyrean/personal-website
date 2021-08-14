<template>
    <div class="contact-panel">
        <MainTextDisplay :heading1="heading1" :heading2="heading2" :description="description"
                         :showButton="showButton" :showCaption="showCaption"/>
        <ul>
            <li>I recieve mail : <strong>ImmaculateEmpyrean@gmail.com</strong></li>
            <li>I am on Discord:
                <span class="discord-id">
                    <img src= "@/assets/discord-profile-picture.png">
                    <strong>empyrean#4242</strong>
                </span>
            </li>
            <li><a href="">Have a Github preference?</a></li>
            <li>My LinkedIn page</li>
            <li>Leave a message here on this site</li>
        </ul>
    </div>
</template>

<script>
import MainTextDisplay from './MainTextDisplay.vue';

export default {
    name: "ContactPanel",
    components: {
        MainTextDisplay
    },
    data (){
        return {
            heading1: "Let",
            heading2: "Us Talk",
            showCaption: false,
            showButton: false,
            description: "I want us to break the ice and communicate with each other."
        }
    }
}

</script>

<style lang="scss" scoped>
    @import '../assets/sass/_settings.scss';

    .contact-panel{
        flex: 1 1 45%;

        display: flex;
        flex-direction: column;
    }

    li{
        padding: 1vh 1vw;
        margin: 1vh 1vw;
        margin-left: 0;
        cursor: pointer;

        border: 2px solid black;
        font-size: 16px;
        font-family: "futura";
        

        .discord-id{
            display: inline-flex;
            align-items: center;
            column-gap: 7px;

            border: 1px solid black;
            padding: 7px;

            img{
                width: 75px;
                border-radius: 50%;
            }
        }

        @include atleast-desktop{
            font-size: 1.5vw;
        }
    }

    
</style>
