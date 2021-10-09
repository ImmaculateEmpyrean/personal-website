<template>
    <div id="SnekCard">
        <ProjectCard
				:projectImage="require('@/assets/snek-website-min.png')"
				projectTitle="Snek Online"
				projectLiveVersionLink="https://snek-online.herokuapp.com/"
				projectSourceLink="https://github.com/ImmaculateEmpyrean/snek-game.git"
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
						This project tested out my skills in reusing code and archietecture. Since I used the basic framework I Initially used for flappy-bird, I had to rapidly adjust myself to the constraints posed by that project and archietect out a workable solution keeping in mind the ticking clock.
					</p>
				</template>

				<template v-slot:mySolution>
					<p>
						I used my intuition and good judgement to recycle components from my previous games while keeping in mind both time complexity as well as the need to innovate and achieve beauty.
					</p>
				</template>

				<template v-slot:notableFeatures>
					<ul
						style=" list-style-type: square !important; display: flex; flex-direction: column; row-gap:10px;"
					>
						<li style=" list-style-type: square !important">Play Snek Game in Desktop.</li>
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
    name: "SnekCard",
    components:{
        ProjectCard
    }
}
</script>