


addEventListener("DOMContentLoaded",init);
function init() {
	const regularbttn = document.getElementById('fbttn');
    //the rgular fortune button

    const wisdombttn = document.querySelector('#wbttn');
    //the wisdom fortune button

    const lotterybttn = document.querySelector('#lbttn');
    //the lottery fortune button


	const  fcBtn = document.getElementById("button")
    //the cookie is a button and this selects it 

	const form = document.getElementById("intake_form")
	//the new fortune form

	const newFortuneInput = document.getElementById('newtext')
	//text input field on the form

	const fortuneText = document.querySelector("#fortunetext")
    //p element that contains fortune

	const allTheNumbers = document.querySelector('.fc-lucky-numbers')
	//p element that contains "lucky numbers" text and numbers span

	const luckyNumbers = document.querySelector(".fc-lucky-numbers span")
    //span element that contains the numbers

	//generates text of the entire fortune
	function getFortune(obj){
			fortuneText.innerText = obj.content
			luckyNumbers.innerText = obj.numbers
			allTheNumbers.style.display = "inline"
		}
	
	//generates just the numbers of the fortune
	function getLuckyNum(obj){
		fortuneText.innerText = " "
		luckyNumbers.innerText = obj.numbers
		allTheNumbers.style.display = "inline"
	}	

	//gernerates just the proverb of the fortune
	function getWisdom(obj){
		fortuneText.innerText = obj.content
		allTheNumbers.style.display = "none"
		
	}


		function grabRandomId(arry){
			let newId = Math.floor((Math.random() * arry.length) + 1);
			fetch(`http://localhost:3000/fortune/${newId}`)
			.then((resp) => resp.json())
			.then((data) => {
				getFortune(data)

			})
		}

		function grabRandomIdLucky(arry){
			let newId = Math.floor((Math.random() * arry.length) + 1);
			fetch(`http://localhost:3000/fortune/${newId}`)
			.then((resp) => resp.json())
			.then((data) => {
				getLuckyNum(data)

			})
		}
	
		function grabRandomIdWise(arry){
			let newId = Math.floor((Math.random() * arry.length) + 1);
			fetch(`http://localhost:3000/fortune/${newId}`)
			.then((resp) => resp.json())
			.then((data) => {
				getWisdom(data)

			})
		}

		





		regularbttn.addEventListener('click',() => {
		 //activates the real fortune response on click of regular fortune button
		if(fcBtn.classList.contains("opened")){
			fcBtn.classList.remove("opened")
			fcBtn.classList.add('spawned')
		}else{

		fetch('http://localhost:3000/fortune')
		.then((resp) => resp.json())
		.then((data) => {
			grabRandomId(data)
			changeClass(fcBtn)
			})
		}
    });
		
	

    
  
       
    wisdombttn.addEventListener('click',() => {
		if(fcBtn.classList.contains("opened")){
			fcBtn.classList.remove("opened")
			fcBtn.classList.add('spawned')
		}else{
		fetch('http://localhost:3000/fortune')
		.then((resp) => resp.json())
		.then((data) => {
			grabRandomIdWise(data)
			changeClass(fcBtn)
			})
		}
	});
    //     //activates the wisdom fortune response on click of wisdom button
        
       
        
    lotterybttn.addEventListener('click', () => {
		if(fcBtn.classList.contains("opened")){
			fcBtn.classList.remove("opened")
			fcBtn.classList.add('spawned')
		}else{
		fetch('http://localhost:3000/fortune')
		.then((resp) => resp.json())
		.then((data) => {
			grabRandomIdLucky(data)
			changeClass(fcBtn)
			})
		}
	});
         //activates the lottery fortune response when the new lottery button is clicked     
  
		
		  //to generate random number
	form.addEventListener('submit', (e) => {
		e.preventDefault()
		let num = Array.from({length: 5}, () => Math.floor(Math.random() * 69) +1);
		let num2 = Math.floor(Math.random() * 24)
		num.push(num2)
		let newproverb = newFortuneInput.value 
		let newObj = {
		content: newproverb,
		numbers: [num]	
		}
		fetch('http://localhost:3000/fortune',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(newObj)
		});
		form.reset()
	})



//checks state of cookie and changes the class of the cookie objects to determine wether to be at the start of the animation or the end
	function changeClass (element){
			    let cls = element.classList,
				spawned = "spawned",
				opened = "opened";

			// open cookie
			if (cls.contains(spawned)) {
				cls.remove(spawned);
				cls.add(opened);

			// new cookie
			} else {
				cls.remove(opened);
				cls.add(spawned);
			}
		};

}