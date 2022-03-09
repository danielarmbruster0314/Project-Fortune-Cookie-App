


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
    
		function grabRandomId(arry){
			let newId = Math.floor((Math.random() * arry.length) + 1);
			fetch(`url/${newId}`)
			.then((resp) => resp.json())
			.then((data) => {
				getFortune(data)
				changeClass(fcBtn)
			})
		}


		 function getFortune(obj){
			fortuneText.innerText = obj.content
			luckyNumbers.innerText = obj.numbers
		}
		regularbttn.addEventListener('click',() => {
		alert('was clicked')
		fetch('url')
		.then((resp) => resp.json())
		.then((data) => grabRandomId(data))
        changeClass(fcBtn);
		
    });
		
	
	//getFortune();
	//fcBtn.addEventListener("click",nextState);

    
    //     //activates the real fortune response on click of regular fortune button
       
    // wisdombttn.addEventListener('click',wisdomFortune);
    //     //activates the wisdom fortune response on click of wisdom button
        

    // vocabbttn.addEventListener('click', vocabFortune);
    //     //activates the vocab fortune response when the new vocab button is clicked
       
        
    // lotterybttn.addEventListener('click', lotteryFortune);
    //     //activates the lottery fortune response when the new lottery button is clicked     
  
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

// fetch('url')
// retunr resp array of objects

// function(object){ 
	
// 	object.id = mATH.FLOOR(math.radom() *Object.length)
// fetch('url/`${id}')




}