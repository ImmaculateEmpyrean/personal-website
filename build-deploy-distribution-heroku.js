const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");

let deploymentTracker = require("./heroku-deployment-tracker.json");

require("./build-distribution.js");

fs.copySync(
	path.resolve(__dirname, "./back-end/Procfile"),
	path.resolve(__dirname, "dist/Procfile")
);

execSync("git init", {
	cwd: path.join(__dirname, "dist"),
	stdio: "inherit",
});

execSync("heroku git:remote -a veeru-empyrean", {
	cwd: path.join(__dirname, "dist"),
	stdio: "inherit",
});

execSync("git add -A", {
	cwd: path.join(__dirname, "dist"),
	stdio: "inherit",
});

let latestIndex = deploymentTracker.nextVersion;
deploymentTracker.nextVersion++;
fs.writeFileSync(
	"./heroku-deployment-tracker.json",
	JSON.stringify(deploymentTracker),
	"utf8"
);

execSync(`git commit -m "Version : ${latestIndex} being deployed"`, {
	cwd: path.join(__dirname, "dist"),
	stdio: "inherit",
});

execSync(`git push heroku master --force`, {
	cwd: path.join(__dirname, "dist"),
	stdio: "inherit",
});
