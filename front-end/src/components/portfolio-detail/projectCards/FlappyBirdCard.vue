<template>
    <div id="FlappyBirdCard">
        <ProjectCard
				:projectImage="require('@/assets/flappy-bird-website-min.png')"
				projectTitle="Flappy-Bird Online"
				projectLiveVersionLink="https://bird-flap-game.herokuapp.com/"
				projectSourceLink="https://github.com/ImmaculateEmpyrean/flappy-bird"
			>
				<template v-slot:projectDescription>
					<p>
						This app is hosted on
						<a
							href="https://devcenter.heroku.com/articles/free-dyno-hours#dyno-sleeping"
							style="color:#e12a2a"
							>Heroku Free Dyno Plan</a
						>, meaning that on the initial load, the server may need to start
						which can cause a small delay of 15-20 seconds or so. Thank you.
					</p>
				</template>

				<template v-slot:listSkillsLeft>
					<li>Vue3</li>
					<li>MaterializeCss</li>
					<li>JQuery</li>
					<li>
						<a href="https://www.countryflags.io/" style="color:#e12a2a"
							>FlagApi</a
						>
					</li>
					<li>
						<a
							href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
							style="color:#e12a2a"
							>Canvas API</a
						>
					</li>
				</template>
				<template v-slot:listSkillsRight>
					<li>Nodejs</li>
					<li>Expressjs</li>
					<li>Heroku</li>
					<li>JSON</li>
					<li>
						<a href="https://www.npmjs.com/package/axios" style="color:#e12a2a"
							>Axios</a
						>
					</li>
					<li></li>
					<li></li>
				</template>

				<template v-slot:myRole>
					<p>
						I was entirely responsible for all facets of this project.<br />
						From Initial design and sketches to back-end server code everything
						was carefully planned out written and bug-tested by me.
					</p>
				</template>

				<template v-slot:projectDifficulties>
					<p>
						This project tested out my skills in archietecting out a workable
						solution. I had to to make a lot of descisions ranging from planning
						out everything from the layout to the video-game while also keeping
						in mind important constraints like time and complexity.
					</p>
				</template>

				<template v-slot:mySolution>
					<p>
						To solve this struggle, I decided to kick it old school with some
						good old Object Oriented Design And Analysis. Following a planning
						structure, I was able to improve my work efficiency and reach my set
						goals efficiently.
					</p>
				</template>

				<template v-slot:notableFeatures>
					<ul
						style=" list-style-type: square !important; display: flex; flex-direction: column; row-gap:10px;"
					>
						<li style=" list-style-type: square !important">Play Flappy-Bird in Desktop Tablet and Mobile.</li>
						<li style=" list-style-type: square !important">Able To View Personal HighScore As It Is Being Saved.</li>
						<li style=" list-style-type: square !important">
							View HighScores From Around The World As HighScores Are Uploaded
							To The Server Automatically.
						</li>
						<li style=" list-style-type: square !important">
							Save Your Name And Country Of Origin With Your HighScore For
							Viewing Around The World.
						</li>
						<li style=" list-style-type: square !important">
							View Tips and Improvement Techniques To Further Improve One's
							Game.
						</li>
					</ul>
				</template>
			</ProjectCard>
    </div>
</template>

<script>
import ProjectCard from '../ProjectCard.vue';

export default {
    name: "FlappyBirdCard",
    components:{
        ProjectCard
    }
}
</script>

<style lang="scss" scoped>

</style>