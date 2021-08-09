<template>
    <Content /> 
</template>

<script>
import Content from '@/components/Content.vue';

export default {
    name: 'DevJourney',
    components: {
        Content
    },
    data (){
        return {
        heading1:"Dev",
        heading2:"Journey",
        caption: "NULL",
        showCaption: false,
        description: "My adventure in the land of computer\
                     science is filled with exciting tales of\
                     full-stack web, video games,video game engines ending\
                     also with a strong foray into the land of \
                     embeded programming and databases.",
        showButton: true,
        imagePath: require("@/assets/sharpended-home-image.png")
    }
    }
}
</script>