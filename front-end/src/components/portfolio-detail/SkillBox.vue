<template>
    <div class="SkillBox">
        <figure class="image is-64x64">
  	        <img :src="iconSrc">
	    </figure>
	    <h3 class="subtitle is-5">{{title}}</h3>
    </div>
</template>

<script>
export default {
    name: "SkillBox",
    props:{
        title:{
            type: String,
            default: "NoTitle"
        },
        iconSrc:{
            type: String,
            default:"https://bulma.io/images/placeholders/64x64.png" 
        }
    }
}
</script>

<style lang="scss" scoped>
@import "bulma/sass/utilities/initial-variables";
@import "bulma/sass/utilities/functions";
@import "@/assets/sass/_settings.scss";

$link: #e12a2a;

@import "bulma/bulma.sass";

    .SkillBox{
        display: flex;
        column-gap: $spacing-large;
        align-items: center;  
    }
</style>