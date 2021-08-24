<template>
    <div v-if="atleastTablet" class="ScrollPrompt">
        <h3></h3>
        <img src="../assets/scroll-prompt.svg" alt="scroll-down">
    </div>
</template>

<script>
export default {
  name: "ScrollPrompt",
  computed: {
    atleastTablet(){
      if(window.innerWidth >= 1024){
        return true;
      }
      else return false;  
    }
  },
  mounted(){
    if(this.atleastTablet){
      let textField = this.$el.querySelector('h3');
      let Typewriter = require('typewriter-effect/dist/core');

      let typewriter = new Typewriter(textField, {
        loop: false,
      });

      typewriter
        .changeCursor(" ")
        .pauseFor(1500)
        .typeString('SCROLLDOWN')
        .start();
    }  
  }
}
</script>

<style lang="scss" scoped>
  .ScrollPrompt{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0;
    left: 5%;
  }

  h3{
    font-family: Futura Bk;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 135.8%;

    letter-spacing: 0.2em;
    text-transform: uppercase;

    color: #000000;

    writing-mode: tb-rl;
  }

</style>