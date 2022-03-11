// const date1 = new Date('May 27, 2024')
// const date2 = new Date('Jan 5 , 2022')

// //reduce this to a single arrow function
// const getDays = (date1, date2) => {
//     const oneDay = 1000 * 60 * 60 * 24;
//     const time2 = date2.getTime();
//     const time1 = date1.getTime();
//     let time = time2 - time1 / oneDay;
//     time = Math.round(Math.abs(time))
//     return time
// }
// console.log(getDays(date1, date2))






// //**********MYCODE************/
// var countDownDate = new Date("Mar 6, 2022 3:39:52").getTime();
// var x = setInterval(function() {
//         var now = new Date().getTime();
//         var timeleft = countDownDate - now;

//         var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
//         var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
//         var c = days + ":" + hours + ":" + minutes + ":" + seconds
//         console.log(c)
//         if (timeleft < 1) {
//             clearInterval(x);
//             console.log("done")
//         }
//     },
//     1000)