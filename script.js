let second = 0;
let secondLeft = 0;

let secondCount = 0
let minuteCount=0
let hourCount = 0


let minutes=0
let minutesLeft=0

let hour = 0
let hourLeft = 0
$(document).ready(()=>{
secondsInterval()
})
let date = new Date()
let splitDate = String(date).split(' ')[4].split(':').join('').split('')

second=splitDate[5]
secondLeft=splitDate[4]
$('#sl-0').text(secondLeft)
$('#sr-0').text(second)

secondCount=splitDate[4]+''+splitDate[5]

minutes=splitDate[3]
minutesLeft=splitDate[2]
$('#mr-0').text(minutes)
$('#ml-0').text(minutesLeft)

hour=splitDate[1]
hourLeft=splitDate[0]
$('#hr-0').text(hour)
$('#hl-0').text(hourLeft)


secondsInterval=()=>{
		let inter = setInterval(()=>{
		++second
		++secondCount
		$('#sr-0').text(second)
		if(second===10){
			second=0
			++secondLeft
			$('#sr-0').text(second)
			$('#sl-0').text(secondLeft)
			clearInterval(inter)
			secondsInterval()
		}
		if(secondCount===60){
			second=0
			secondLeft=0
			secondCount=0
			++minutes
			++minuteCount
			$('#sr-0').text(second)
			$('#sl-0').text(secondLeft)
			$('#mr-0').text(minutes)

		}
		if(minutes===10){
			minutes=0
			++minutesLeft
			$('#mr-0').text(minutes)
			$('#ml-0').text(minutesLeft)
		}
		if(minuteCount===60){
			minuteCount=0
			minutes=0
			minutesLeft=0
			++hour
			$('#mr-0').text(minutes)
			$('#ml-0').text(minutesLeft)
			$('#hr-0').text(hour)
		}
		if(hour===10){
			hour=0
			++hourLeft
			$('#hr-0').text(hour)
			$('#hl-0').text(hourLeft)
			alert()
		}
		if(hourLeft===1 && hour===2){
			 second = 0;
			 secondLeft = 0;
			$('#sr-0').text(second)
			$('#sl-0').text(secondLeft)

			 secondCount = 0
			 minuteCount=0
			 hourCount = 0


			 minutes=0
			 minutesLeft=0
			$('#mr-0').text(minutes)
			$('#ml-0').text(minutesLeft)

			 hour = 0
			 hourLeft = 0
			$('#hr-0').text(hour)
			$('#hl-0').text(hourLeft)
		}


	},1000)
}