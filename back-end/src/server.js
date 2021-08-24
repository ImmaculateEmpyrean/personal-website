//aquiring required modules and setting up the app
const path = require("path");
const { readFile, writeFile } = require("fs").promises;
const { parse } = require("node-html-parser");

const express = require("express");
const app = express();

//use express to handle post requests..
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//node mailer is required for the server to contact me
const nodemailer = require("nodemailer");

//setup a static directory to be served
app.use(express.static("./www"));

//setup the server
let port = process.env.PORT || 4001;
app.listen(port, function () {
	console.log(`server running on port ${process.env.PORT} and if not on 4001`);
});

//get requests
app.get('/',function(req,res){
	res.sendFile(path.resolve(__dirname,'www/index.html'));
});
app.get('/DevJourney',function(req,res){
	res.sendFile(path.resolve(__dirname,'www/index.html'));
})
app.get('/Me',function(req,res){
	res.sendFile(path.resolve(__dirname,'www/index.html'));
})
app.get('/ContactMe',function(req,res){
	res.sendFile(path.resolve(__dirname,'www/index.html'));
});
app.get('/LeaveMessageHere',function(req,res){
	res.sendFile(path.resolve(__dirname,'www/index.html'));
});


app.get('/download-resume', function(req, res){
	const file = `${__dirname}/www/docs/resume-veeru.pdf`;
	res.download(file);
});


//leave-message-here
app.post("/leaveMessageHere", async function (req, res) {
	//get all the information passed to me
	let {name,email,phone,phoneCountryCode,phoneCountryName,messageCategory,newContact,subject,message} = req.body;

	//send a mail to master..
	let subjectToMaster = "NULL";
	if(newContact === true){
		subjectToMaster = `${messageCategory} : somebody NEW named ${name} has left a message on the portfolio website`;
	} else subjectToMaster = `${messageCategory} : ${name} has left a message on the portfolio website`;

	let newContactLine = "NULL";
	if(newContact === true){
		newContactLine = "The Contact Claims To Have Previous Correspondence";
	} else newContactLine = "The Contact Claims To Be Making Acquaintaince Now..";

	let messageToMaster = `<p>somebody named ${name} has sent a message master,</p>
							<p>subject - ${subject}</p>
                            <p>the message reads :- </p>
                            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                            <p>${message}</p>
                            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                            <p>they have left an email adress should you wish to contact them back : ${email}</p>
							<p>they have left a phone number should you wish to contact them back  :+${phoneCountryCode} ${phone}</p>
							<p>Itseems the contact is from  ${phoneCountryName} as the phone code provided was ${phoneCountryCode}</p>
							<p>The Message Category Is Marked : ${messageCategory}</p>
							<p>${newContactLine}</p>`

	await sendMail(
		"immaculateempyrean@gmail.com",
		 subjectToMaster,
		 messageToMaster
	);
	await sendMail(
		"sriveer2000@gmail.com",
		 subjectToMaster,
		 messageToMaster
	);

	//send an acknowledgement to the sender..
	let subjectToSender = `Thank You On Leaving A Message For Empyrean`;
	let messageToSender = `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;900&display=swap" rel="stylesheet"> 
		<title>Acknowledgement</title>
	</head>
	<body style="
		font-family: 'Nunito', sans-serif;
	
		">
		
		<h1>THANK YOU!</h1>
		<h1>FOR LEAVING A MESSAGE</h1>
		<img src="https://i.ibb.co/gdjkJvT/logo.png" alt="logo" border="0">
		<p>This is an acknowledgement that you have left a message for me on my <a href="#">site</a>.</p>
		<p>I am very grateful that you have chosen to leave a message here
			dear ${name}. The next time you hear from me will be in person
			after I finish reviewing the contents of the message you left me.
		</p>
		<p>I hope to get back to you as soon as possible. a reply within
			2-3 business days is typical in normal circumstances.I take
			replying to the mail I recieve very seriously and hopefully I can prove that
			to you too.
		</p>
		<p>Should you require any assistance from my bot, please send in an email to 'empyreanbot@zohomail.in' the bot watches this mail address regularly.
			The bot is extremely smart and can help you out in most cases without even notifying me.
			read the bot-help page for assistance on how to communicate with the bot.
		</p>
		<h2>
			The message you have left reads-
		</h2>
		<p style=" width: 70%; margin-left: auto;  ">
			${message}
		</p>
	
		<br/>
		<h6 style=" display: inline-block; margin-left: auto;">
			If you are not the one who has posted this message. please let me know <a href="#">here</a> 
		</h6>
	</body>
	</html>
	`;

	await sendMail(email, subjectToSender, messageToSender);

	res.status(200).send("success!");
});

async function sendMail(to, subject, message) {
	let transporter = nodemailer.createTransport({
		host: "smtp.zoho.in",
		port: 465,
		secure: true, // true for 465, false for other ports
		auth: {
			user: "empyreanbot@zohomail.in", 
			pass: "a0EBTFvWHwfp"
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	// send mail with defined transport object
	await transporter.sendMail({
		from: '"bot empyrean" <empyreanbot@zohomail.in>', // sender address
		to: to, //reciever
		subject: subject,
		html: message,
	});
}
