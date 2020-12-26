const cron = require("node-cron");
const express = require("express");
var nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

// import file
const scrapper = require('./scrapper');

const app = express();

const server = app.listen(process.env.PORT);

console.log("Running Server On Port " + process.env.PORT);

const COMMIT_MESSAGE = process.env.COMMIT_MESSAGE ? process.env.COMMIT_MESSAGE : "Bleep Bloop, bot commit"
const COMMIT_CHANGE = process.env.COMMIT_CHANGE ? process.env.COMMIT_CHANGE : "Good Day, Sir!"


const activateScrapper= async () => {
    await scrapper.initialize();
    // // Login 
    await scrapper.login(process.env.USERNAME, process.env.PASSWORD)
    console.log("Log In Success")
    console.log("Going to repo", process.env.REPO)

    await scrapper.commit(COMMIT_MESSAGE, COMMIT_CHANGE);
    console.log("Committed message", COMMIT_MESSAGE)
}


activateScrapper().then(e => {
    console.log("Scrapper Finished its Job")
})



// // Email 
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.MY_EMAIL,
//         pass: process.env.MY_EMAIL_PASS
//     }
// });

// let mailOptions = {
//     from: process.env.MY_EMAIL,
//     to: process.env.SEND_TO_EMAIL,
//     subject: 'Course Added',
//     text: process.env.COURSE_CODE + ' was added to REM for you by a friendly bot! :)'
// };

// // schedule tasks to be run on the server every 3 hours
// // Runs every three hours, turn * * * * * to test each minute
// const job = cron.schedule('0 * * * *', function () {
    
//     console.log("---------------------");
//     console.log("Running Cron Job");
//     console.log("---------------------");
//     console.log("Logging in...");
//     initAndLogin().then(() => {
//         console.log("Logging in Success");
//         console.log("Adding courses...");
//         console.log("REM CODE -->" + process.env.COURSE_CODE)
//         coursePurifier(process.env.COURSE_CODE).forEach(course => {
//             if (!(course.isAdded)) {
//                 operation(course.courseID).then(result => {
//                     if (result !== "The course has not been added.") {
//                         course.isAdded = true;
//                         console.log("Courses Added");
//                         // Send Email
//                         transporter.sendMail(mailOptions, function (error, info) {
//                             if (error) {
//                                 console.log(error);
//                                 // stop server
//                                 server.close(function () { console.log('Doh :('); });
//                             } else {
//                                 console.log('Email sent: ' + info.response);
//                                 // stop server
//                                 job.stop()
//                                 server.close(function () { console.log('Doh :('); });
//                             }
//                         });
//                     }
//                     else {
//                         console.log("Courses NOT Added :( \nill try again in 3h");
//                     }
//                 }).catch(err => {
//                     console.log("Course code not found")
//                     console.log(err)
//                 })
//             }
//         })
//     }).catch(err => {
//         console.log("Couldn't log in")
//         console.log(err)
//     });
// });



// };

