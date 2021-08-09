<template>
    <div class="contact-panel">
        <MainTextDisplay :heading1="heading1" :heading2="heading2" :description="description"
                         :showButton="showButton" :showCaption="showCaption"/>
        <ul>
            <li>Send me an Email at <strong>immaculateEmpyrean@gmail.com</strong></li>
            <li>I am on Discord: <img src= "@/assets/discord-profile-picture.png"> <strong>empyrean#4242</strong></li>
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
            description: ""
        }
    }
}

</script>

<style lang="scss" scoped>
    .contact-panel{
        flex: 1 1 45%;

        display: flex;
        flex-direction: column;
    }

    li{
        img{
            border-radius: 50%;
        }
    }
</style>
