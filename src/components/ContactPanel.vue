<template>
    <div class="contact-panel">
        <MainTextDisplay :heading1="heading1" :heading2="heading2" :description="description"
                         :showButton="showButton" :showCaption="showCaption"/>
        <div class="picture-placeholder" v-show="onlyTablet"></div>
        <ul>
            <li>I recieve mail : <strong>Empyrean@veeru.me</strong></li>
            <li>I am on Discord:
                <span class="discord-id">
                    <img src= "@/assets/discord-profile-picture.png">
                    <strong>Empyrean#4242</strong>
                </span>
            </li>
            <li><a href="https://github.com/ImmaculateEmpyrean">Have a Github preference?</a></li>
            <li><a href="#">My LinkedIn page</a></li>
            <li><router-link @click="navigateToLeaveMessageHere" to=""><strong>Leave a message here on this site</strong></router-link></li>
        </ul>
    </div>
</template>

<script>
import MainTextDisplay from './MainTextDisplay.vue';
import MainImageDisplay from './MainImageDisplay.vue';

export default {
    name: "ContactPanel",
    components: {
        MainTextDisplay,
        MainImageDisplay
    },
    data (){
        return {
            heading1: "Let",
            heading2: "Us Talk",
            showCaption: false,
            showButton: false,
            description: "I want us to break the ice and communicate with each other."
        }
    },
    computed: {
        onlyTablet: function(){
            if((window.innerWidth <= 1024) && (window.innerWidth >= 768)){
                return true;
            }
            else return false
        }
    },
    methods:{
        async navigateToLeaveMessageHere(){
            await this.$emit("setTransitionZoom");
            this.$router.push('/LeaveMessageHere');
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

    .picture-placeholder{
        flex: 1 1 55%;
        
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('../assets/contact-me.png');

        background-position: center center;
    }

    li{
        transition: color 2s,background-color 2s,border 2s;
        padding: 1vh 1vw;
        margin: 1vh 1vw;
        margin-left: 0;
        cursor: pointer;

        border: 2px solid black;
        color: black;
        background-color: white;

        font-size: 16px;
        font-family: "futura";

        a{
            transition: all 2s;
            color: black;
        }

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

        &:hover{
            color: white;
            border: 2px solid white;
            background-color: black;

            a{
                color: white;
            }

            .discord-id{
                border: 1px solid white;
            }
        }

        @include atleast-desktop{
            font-size: 1.5vw;
        }
    }

    
</style>
