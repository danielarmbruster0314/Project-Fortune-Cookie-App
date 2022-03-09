


addEventListener("DOMContentLoaded",init);
function init() {
	const regularbttn = document.getElementById('fbttn');
    //the rgular fortune button

    const wisdombttn = document.querySelector('#wbttn');
    //the wisdom fortune button

    const vocabbttn = document.querySelector('#vbttn');
    //the vocab fortune button

    const lotterybttn = document.querySelector('#lbttn');
    //the lottery fortune button


	const  fcBtn = document.getElementById("button")
    //the cookie is a button and this selects it 


	const fortuneText = document.querySelector("#fortunetext")
    //p element that contains fortune


	const luckyNumbers = document.querySelector(".fc-lucky-numbers span")
    	 
	function getFortune(obj){
			fortuneText.innerText = obj.content
			luckyNumbers.innerText = obj.numbers
		}
		
	function getLuckyNum(obj){
		fortuneText.innerText = " "
		luckyNumbers.innerText = obj.numbers
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
		
	

    
  
       
    // wisdombttn.addEventListener('click',wisdomFortune);
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
				getFortune();
			}
		};




}