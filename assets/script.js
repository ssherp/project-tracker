var now = setInterval(function(){
$("#currentDay").text(dayjs().format("MMM DD,YYYY,  h:mm:ss")); 
},1000)

