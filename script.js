let second = 0;
let secondLeft = 0;

let secondCount = 0
let minuteCount=0
let hourCount = 0


let minutes=0
let minutesLeft=0

let hour = 0
let hourLeft = 0


let date = new Date()
let splitDate = String(date).split(' ')[4].split(':').join('').split('')
let year = date.toISOString().split('T')[0]
let splYear = year.split('-').join('/')
let month = date.toLocaleString('default', { month: 'long'});
let weekday = date.toLocaleString('default', { weekday:'long'});

$('#week-month').text(month+'/'+weekday)
$('#year').text(splYear)
second=splitDate[5]
secondLeft=splitDate[4]
$('#sl-0').text(secondLeft)
$('#sr-0').text(second)

$('#week-month').text(month+'/'+weekday)
$('#year').text(splYear)
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

let temp = ''
let maxTemp = ''
let minTemp = ''
let humidity = 0
$(document).ready(()=>{
secondsInterval()
})

fetch('https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139')
  .then(response => response.json())
  .then(json =>{
  	temp=String(json.main.temp).split('.')[0]
  	maxTemp=String(json.main.temp_max).split('.')[0]
  	minTemp=String(json.main.temp_min).split('.')[0]
  	humidity=String(json.main.humidity).split('.')[0]
  	$('#max-temp').text(maxTemp)
  	$('#main-temp').text(temp)
  	$('#min-temp').text(minTemp)
  }
  	)
  


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