<template>
    <div class="scroll-box">

        <svg width="70" height="140" viewBox="0 0 70 140" fill="none" xmlns="http://www.w3.org/2000/svg" 
             class="animate__animated" v-show="showScrollBar && showVertical">

            <rect y="0"   width="35"  height="5" rx="2.5" fill="black"/>
            <rect y="45"  width="35"  height="5" rx="2.5" fill="black"/>
            <rect y="90"  width="35"  height="5" rx="2.5" fill="black"/>
            <rect y="135" width="35"  height="5" rx="2.5" fill="black"/>

        </svg>

        <svg width="140" height="70" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg"
             class="animate__animated" v-show="showScrollBar && !showVertical">
            
            <rect y="70" width="35" height="5" rx="2.5" transform="rotate(-90 0 70)" fill="black"/>
            <rect x="45" y="70" width="35" height="5" rx="2.5" transform="rotate(-90 45 70)" fill="black"/>
            <rect x="90" y="70" width="35" height="5" rx="2.5" transform="rotate(-90 90 70)" fill="black"/>
            <rect x="135" y="70" width="35" height="5" rx="2.5" transform="rotate(-90 135 70)" fill="black"/>
            
        </svg>


    </div>
</template>


<script>
export default {
    name: "ScrollIndicator",
    data() {
      return {
          showScrollBar: true,
          currentPage: null,
          lastPage: null
      }  
    },
    computed:{
        showVertical: function(){
            if(window.innerWidth < 1024)
                return false;
            else return true; 
        }
    },
    methods:{
        setCurrentPage(recieved){
            this.lastPage = this.currentPage;
            this.currentPage = recieved;

            let indicators = this.$el.querySelectorAll('rect');
            let startIndex = 0;
            if(this.showVertical === false){
                startIndex = 4
            }

            if (this.lastPage !== this.currentPage) {
                let timeline = new TimelineLite();

                if (this.lastPage != null) {
                    timeline.to(indicators[this.lastPage - 1 + startIndex], 0.4, {
                        width: 35,
                    });
                }
                if (this.currentPage != null) {
                    timeline.to(indicators[this.currentPage - 1 + startIndex], 0.4, {
                        width: 70,
                    });
                }
            }
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
    @import '../assets/sass/_settings.scss';

    .scroll-box {
        transition: flex-basis 2s;
        flex: 1 1 5%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        order: 1;
        @include atleast-desktop{
            order: -1;
        }

        &.collapsed{
           flex-basis: 0%;
        }
    }
</style>