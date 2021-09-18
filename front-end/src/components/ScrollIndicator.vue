<template>
    <div class="scroll-box">

        <svg width="70" height="140" viewBox="0 0 70 140" fill="none" xmlns="http://www.w3.org/2000/svg" 
             class="animate__animated" v-show="showScrollBar && showVertical">

            <rect y="0"   width="35"  height="5" rx="2.5" fill="black" @click="gotoHome"/>
            <rect y="45"  width="35"  height="5" rx="2.5" fill="black" @click="gotoPortfolio"/>
            <rect y="90"  width="35"  height="5" rx="2.5" fill="black" @click="gotoContact"/>
        </svg>

        <svg width="140" height="70" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg"
             class="animate__animated" v-show="showScrollBar && !showVertical">
            
            <rect y="70" width="35" height="5" rx="2.5" transform="rotate(-90 0 70)" fill="black"/>
            <rect x="45" y="70" width="35" height="5" rx="2.5" transform="rotate(-90 45 70)" fill="black"/>
            <rect x="90" y="70" width="35" height="5" rx="2.5" transform="rotate(-90 90 70)" fill="black"/>
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
        isOverflownY(element) {
            return element.scrollHeight > element.clientHeight;
        },
        hide(){
            if(this.showScrollBar === true){
                let that = this;

                let svg = this.$el.querySelectorAll('svg');
                if(that.showVertical === false)
                    svg = svg[1];
                else svg = svg[0];

                svg.classList.remove('animate__fadeInLeft');
                svg.classList.remove('animate__fadeInUp');

                if(window.innerWidth > 1024)
                     svg.classList.add('animate__fadeOutLeft');
                else svg.classList.add('animate__fadeOutDown');

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

                 let page = document.querySelector('#app > .page');
                    page.style.height = `${window.innerHeight}px`; //this is done so as to allow the calculation of height in phones excluding the url bar
                    page.style.overflowY = "hidden";

                this.$el.classList.remove('collapsed');

                setTimeout(function(){
                    that.showScrollBar = true;
                    that.$forceUpdate();

                    let svg = that.$el.querySelectorAll("svg")
                    if(that.showVertical === false)
                        svg = svg[1];
                    else svg = svg[0];

                    svg.classList.remove('animate__fadeOutLeft');
                    svg.classList.remove('animate__fadeOutDown');

                    if(window.innerWidth > 1024)
                         svg.classList.add('animate__fadeInLeft');
                    else svg.classList.add('animate__fadeInUp');
                },2000)
            }
        },
        gotoContact(){
            this.$emit('setTransitionZoom');
            this.$router.push('/ContactMe');
        },
        gotoPortfolio(){
            this.$emit('setTransitionZoom');
            this.$router.push('/DevJourney');
        },
        gotoHome(){
            this.$emit('setTransitionZoom');
            this.$router.push('/');
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
        flex: 1 1 15%;

        @include atleast-desktop{
            flex: 1 1 5%;
        }

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