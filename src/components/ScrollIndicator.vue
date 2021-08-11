<template>
    <div class="scroll-box">
        <svg width="70" height="140" viewBox="0 0 70 140" fill="none" xmlns="http://www.w3.org/2000/svg" 
             class="animate__animated" v-show="showScrollBar">

            <rect width="70" height="5" rx="2.5" fill="black"/>
            <rect y="45" width="35" height="5" rx="2.5" fill="black"/>
            <rect y="90" width="35" height="5" rx="2.5" fill="black"/>
            <rect y="135" width="35" height="5" rx="2.5" fill="black"/>

        </svg>
    </div>
</template>


<script>
export default {
    name: "ScrollIndicator",
    props:{
        currentPage:{
            type: Number,
            default: 2
        }
    },
    data() {
      return {
          showScrollBar: true
      }  
    },
    watch:{
        currentPage:function(){
            console.log('current page changed in the component scroll Indicator.. rendering the new page');
            this.setCurrentPage();
        }
    },

    methods:{
        setCurrentPage(){
            // I have to add animation to this function in the future
            let number = this.currentPage;
            let indicators = this.$el.querySelectorAll('rect');

            //initialize all the rects to their default size
            indicators.forEach(function(element){
                element.setAttribute("width","35");
            });

            //the required rect must be long..
            indicators[number -1].setAttribute("width","70"); 
        },
        hide(){
            if(this.showScrollBar === true){
                let that = this;

                let svg = this.$el.querySelector('svg')
                svg.classList.remove('animate__fadeInLeft');
                svg.classList.add('animate__fadeOutLeft');

                setTimeout(function(){
                    that.showScrollBar = false;
                    that.$forceUpdate();
                    that.$el.classList.add('collapsed');
                },2000);
            }
        },
        show(){
            if(this.showScrollBar === false){
                let that = this;
                this.$el.classList.remove('collapsed');

                setTimeout(function(){
                    that.showScrollBar = true;
                    that.$forceUpdate();

                    let svg = that.$el.querySelector("svg")
                    svg.classList.remove('animate__fadeOutLeft');
                    svg.classList.add('animate__fadeInLeft');

                },2000)
            }
        }
    },
      mounted(){
         this.setCurrentPage();
     },
}
</script>


<style lang="scss" scoped>
    .scroll-box {
        transition: flex-basis 2s;
        flex: 1 1 5%;
        border : 1px solid blue;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &.collapsed{
           flex-basis: 0%;
        }
    }
</style>