const mongoose = require("mongoose");

const url = "mongodb+srv://mshrivastava43082:eGlg1NOL1bVHDBq8@cluster0.6gopi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const con = mongoose
	.connect(url)
	.then(() => {
		console.log("i am connected");
	})
	.catch((err) => console.log(err));
module.exports = con;
