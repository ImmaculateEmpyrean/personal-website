<template>
<div class="row" id="ProjectsShowcase">
  <ul class="tabs tabs-fixed-width z-depth-1">
    <li class="tab col"><a href="#Front-End">Front-End Web</a></li>
    <li class="tab col"><a class="active" href="#Full-Stack">Full-Stack Web</a></li>
    <li class="tab col"><a href="#Video-Game">Video-Game</a></li>
    <li class="tab col"><a href="#Game-Engine">Game-Engine</a></li>
    <li class="tab col"><a href="#Miscellenous">Misc</a></li>
  </ul>
  <div id="Front-End" class="col s12">
    <h1>Front-End Placeholder</h1>
  </div>
  <div id="Full-Stack" class="col s12">
    <h1>Full-Stack Placeholder</h1>
  </div>
  <div id="Video-Game" class="col s12">
    <h1>Video-Game Placeholder</h1>
  </div>
  <div id="Game-Engine" class="col s12">
    <h1>Game-Engine Placeholder</h1>
  </div>
  <div id="Miscellenous" class="col s12">
    <h1>Misc Placeholder</h1>
  </div>
</div>
</template>

<script>
export default {
    name: 'ProjectsShowcase',
    mounted(){
        $('ul.tabs').tabs();
        $(".fainted").click(function(){ $(".active").css("border","none"); $(".indicator").css("display","block"); });
    }
}
</script>

<style lang="scss" scoped>
    $primary-color: #e12a2a;
    @import 'materialize-css/sass/materialize.scss';

    .tabs .indicator { display: none; }
    .tabs .tab a.active { 
      border-bottom: 2px solid #e12a2a; 
    }
</style>