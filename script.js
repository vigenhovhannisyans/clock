let second = 0;
let secondLeft = 0;

let secondCount = 0
let minuteCount=0
let hourCount = 0


let minutes=0
let minutesLeft=0

let hour = 0
let hourLeft = 0

let alarmLeftH = 0;
let alarmRightH = 0;

let alarmLeftM = 0;
let alarmRightM = 0;
let alarmResult = ''
$(document).ready(()=>{
let date = new Date()
let splitDate = String(date).split(' ')[4].split(':').join('').split('')
let year = date.toISOString().split('T')[0]
let splYear = year.split('-')
let currentDate=splYear[1]+'/'+splYear[2]+'/'+splYear[0]
let month = date.toLocaleString('default', { month: 'long'});
let weekday = date.toLocaleString('default', { weekday:'long'});

$('#week-month').text(month+'/'+weekday)
$('#year').text(currentDate)
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
$('#alarm-sound').hide()
let currentTime = ''
})
$(document).ready(()=>{
	currentTime=$('#hl-0').text()+''+$('#hr-0').text()+':'+$('#ml-0').text()+''+$('#mr-0').text()
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
  

$('#search-btn').click(()=>{
	let searchVal = $('#input-clock').val()
	let searchRes = ''
fetch(`http://worldtimeapi.org/api/timezone/Europe/${searchVal}`)
.then((response)=> new Promise((resolve,reject)=>{
	resolve(response.json())

})
	 )
.then(json=>{
	searchRes=json.datetime.split('T')[1].split('.')[0].slice(0,5)
	$('#time-zone').text(searchRes)
	$('#search-region').text(searchVal)
	$('#word-clock-p').removeClass('close-block')

})
.catch(error=>{
		 
	console.log(error.message)
	$('#word-clock-p').removeClass('close-block')
		$('#time-zone').text('')
	$('#search-region').text('Something went wrong')
})
})



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
		let hourRes =$('#hl-0').text()+''+$('#hr-0').text()+''+$('#ml-0').text()+''+$('#mr-0').text()
		if(hourRes===alarmResult){
			$('#alarm-sound').show()
			setTimeout(()=>{
			$('#alarm-sound').hide()
			},5000)
			alarmResult=''
			return
		}
	},1000)
}

$('#alarm').click(()=>{
	$('#alarm-block').css('transform','translateX(0px)')
})
$('#close-alarm').click(()=>{
	$('#alarm-block').css('transform','translateX(-683px)')
})
$('#alarm-res').click(()=>{
		$('#alarm-block').css('transform','translateX(0px)')
})
$('#earth').click(()=>{
$('#earth-block').css('transform','translateX(0px)')
})
$('#close-earth').click(()=>{
	$('#earth-block').css('transform','translateX(683px)')
})
let hourLefts=0
$('#hour-left').keyup((e)=>{
							$('#apply-alarm').text('Apply')
			isAplly=false;
	hourLefts = Number(e.target.value)
	if(hourLefts>2){
		$('#hour-left').val(2)
	}
	if($('#hour-right').val().length===1 && $('#hour-left').val().length===1 && $('#hour-left-1').val().length===1 && $('#hour-right-1').val().length===1){
		$('#apply-alarm').removeClass('opacity-alarm-btn')
	}else{
		$('#apply-alarm').addClass('opacity-alarm-btn')
	}
})
$('#hour-left-1').keyup((e)=>{
							$('#apply-alarm').text('Apply')
			isAplly=false;
	let inp = Number(e.target.value)
		if(Number($('#hour-left').val())===2 && Number($('#hour-right').val())===4){
				console.log('aaaaaaaaa')
		$('#hour-left-1').val(0)
	}
		if(Number($('#hour-left').val())<=2 && Number($('#hour-right').val())<=3 && inp>5 ){
				$('#hour-left-1').val(0)
	}
	if(inp>5){
$('#hour-left-1').val(0)
	}
	if($('#hour-right').val().length===1 && $('#hour-left').val().length===1 && $('#hour-left-1').val().length===1 && $('#hour-right-1').val().length===1){
		$('#apply-alarm').removeClass('opacity-alarm-btn')
	}else{
		$('#apply-alarm').addClass('opacity-alarm-btn')
	}
})
let hourRight = 0
$('#hour-right').keyup((e)=>{
						$('#apply-alarm').text('Apply')
			isAplly=false;
	hourRight = Number(e.target.value)
	if(Number($('#hour-left').val())===2&&hourRight>4){
		$('#hour-right').val(4)
	}
	if($('#hour-right').val().length===1 && $('#hour-left').val().length===1 && $('#hour-left-1').val().length===1 && $('#hour-right-1').val().length===1){
		$('#apply-alarm').removeClass('opacity-alarm-btn')
	}else{
		$('#apply-alarm').addClass('opacity-alarm-btn')
	}
})
$('#hour-right-1').keyup((e)=>{
							$('#apply-alarm').text('Apply')
			isAplly=false;
	let inp = Number(e.target.value)
	if(Number($('#hour-left').val())===2 && Number($('#hour-right').val())===4){
		$('#hour-right-1').val(0)
	}
	if($('#hour-right').val().length===1 && $('#hour-left').val().length===1 && $('#hour-left-1').val().length===1 && $('#hour-right-1').val().length===1){
		$('#apply-alarm').removeClass('opacity-alarm-btn')
	}else{
		$('#apply-alarm').addClass('opacity-alarm-btn')
	}
})
$('#apply-alarm').text('Apply')
let isAplly = false
$('#apply-alarm').click(()=>{

	$('#alarm-res').text(
		$('#hour-left').val()+''+
		$('#hour-right').val()+':'+
		$('#hour-left-1').val()+''+
		$('#hour-right-1').val())
	alarmLeftH = Number($('#hour-left').val());
	alarmRightH = Number($('#hour-right').val());

	alarmLeftM = Number($('#hour-left-1').val());
	alarmRightM = Number($('#hour-right-1').val());
	alarmResult = alarmLeftH+''+alarmRightH+''+alarmLeftM+''+alarmRightM

	$('#add-alarm-img').addClass('alarm-img-s')
	if(!isAplly){
		$('#apply-alarm').text('Clear')
		isAplly=true;
		$('#alarm-res').show()

		return
	}
	if(isAplly){
			$('#apply-alarm').text('Apply')
			isAplly=false;
		$('#hour-left').val('')
		$('#hour-right').val('')
		$('#hour-left-1').val('')
		$('#hour-right-1').val('')
		$('#alarm-res').hide()
		$('#apply-alarm').addClass('opacity-alarm-btn')
		$('#add-alarm-img').removeClass('alarm-img-s')
		return
	}
})

