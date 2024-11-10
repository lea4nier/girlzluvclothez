 window.onload = function () {
 
    const images = {
	head: [
		"https://imgeasy.com/share/j5h8ZH6Pnh9d1PNCLbv7.png", // killbill
		"https://imgeasy.com/share/ytuMqHecF3ufnXXWR4So.png", // blue hat
        "https://imgeasy.com/share/tKEQmyeCVSvtFLMx1fTl.png", // cheetah beret
        "https://imgeasy.com/share/rKrSxVeYkDNKXaXYs9Yg.png", // cheetah muffs
        "https://imgeasy.com/share/kF1ySdw03CMufBeYfapX.png", // hysteric hat
        "https://imgeasy.com/share/0HPBc30t4CYrh9460eHG.png", // star beanie
        "https://imgeasy.com/share/6bva5BnvUY1fEOP0UgYY.png", // von dutch hat
        "https://imgeasy.com/share/LFYKbvr5EnWJ4hOnW01w.png", // plaid beret
		"https://imgeasy.com/share/LFF2BAFReZ3xoTAIXVPt.png", // transparent image...blank
	],
	face: [
		"https://imgeasy.com/share/LFF2BAFReZ3xoTAIXVPt.png", // transparent image...blank
		"https://imgeasy.com/share/5MjjiE0WWzR23FTqMhqA.png", // glasses
		'https://imgeasy.com/share/kMlnwhm843t6hEfAmEH5.png', // goldtooth
		'https://imgeasy.com/share/cTTH8bJMmz9WKwQxf7IC.png', // facemask
		'https://imgeasy.com/share/7PfJMO2FPlZC3gBeVPFX.png', // ghostface
        'https://imgeasy.com/share/ZAbp5D0M34FsDnYEfzJd.png', // bow pin
        "https://imgeasy.com/share/4saYpzYUyZK7NuJGR6c6.png", // wired headphones
        "https://imgeasy.com/share/BzpzuITSRh56tHukvt8y.png", // hoops
        "https://imgeasy.com/share/KLr1eiyPJZKCUKT7S3jy.png", // cross sunglass
        "https://imgeasy.com/share/qR3T3fy87ulhIwTT3GXL.png", // green sunglass
        "https://imgeasy.com/share/aDQJLgXfsLLcdtQkWYRc.png", // heart necklace
        "https://imgeasy.com/share/n1qlch6aSEOHRrb3csl8.png", // heart belt 
        "https://imgeasy.com/share/AeTu8Sp2IiOEjvoOUVXm.png", // juicy clip
        "https://imgeasy.com/share/VU9XSB2QxuouTpkkNyx9.png", // pink sunglass
        "https://imgeasy.com/share/34oDmeQd185BZNF3LNxe.png", // star clip
        "https://imgeasy.com/share/9ij9RFx9JpyUlVm8JpKO.png", // cheetah bow
        "https://imgeasy.com/share/fEDVwxl5Ow0zMRAtD1w7.png", // bayonnette glasses
        "https://imgeasy.com/share/mNffklAReoezDWO8OCAu.png", // red glasses
		
	],
    //our left
	rightarm: [
        "https://imgeasy.com/share/LFF2BAFReZ3xoTAIXVPt.png", // transparent image...blank
		"https://imgeasy.com/share/AoFMAo9bu33pyy4SDJIy.png", // kill bill
		"https://imgeasy.com/share/kPlf7DlhNO9LnvwGWWHY.png", // chef
		"https://imgeasy.com/share/69IynwRikTxKXeeGIGpr.png", // micrphone
		"https://imgeasy.com/share/A87AjsETuCb6yYH3HHMC.png", // pizza
		"https://imgeasy.com/share/cmfZ3WQQzNCVgbsYo6a6.png", // p90
		'https://imgeasy.com/share/LS3w3dgBt4hege7iLKXz.png', // flashlight
		'https://imgeasy.com/share/Nh3n0DoTOcDCsGQj4y56.png', // fiveseven
        "https://imgeasy.com/share/BUfxyZjgrU9mE4aNEjtD.png", // camera
        "https://imgeasy.com/share/e2codRrQQYD524liZC9g.png", // bangles
        "https://imgeasy.com/share/SVVDnbZKp5G5UOmf1qdo.png", // brown gloves
        "https://imgeasy.com/share/BsgpfuaiOdHPNUgapBj7.png", // cheetah belt
        "https://imgeasy.com/share/vGWjrV7qmzmlbxSHiLt8.png", // money
        "https://imgeasy.com/share/ia1mZA23rMMmuoz4h8um.png", // lighter
        "https://imgeasy.com/share/ED27IiTD48pzgQf3MBU4.png", // phone
        "https://imgeasy.com/share/eA3IAdH0Uh7102hOOy3e.png", // pink belt 
	],
    //our right
	leftarm: [
		"https://imgeasy.com/share/LFF2BAFReZ3xoTAIXVPt.png", // transparent image...blank
		"https://imgeasy.com/share/zVqIc0vgw8p6qqZ8A7Mb.png", // beige bag
        "https://imgeasy.com/share/LG3qY7OOPhLcBVXKTnTT.png", // black bag
        "https://imgeasy.com/share/EyTUcCycqrkrOasqXAtP.png", // brown bag
        "https://imgeasy.com/share/95uR4UVCNQYpVWfIrTkf.png", // prada brown bag
        "https://imgeasy.com/share/zH8Lk23mWdrKBUOya5GR.png", // fur bag
        "https://imgeasy.com/share/P2XZfxZV1o1yYdXelvvT.png", // green bag
        "https://imgeasy.com/share/Zo1pWUKLDJOOe0aACvC8.png", // jean bag
        "https://imgeasy.com/share/S2p6mme20aUYkTT6wzzU.png", // red balenciaga bag
        "https://imgeasy.com/share/NyQ36nb2iuF3w4OIQrpK.png", // red miu miu bag
        "https://imgeasy.com/share/7Hodq2s52aBvx6Sq1lAg.png", // grey long bag
        "https://imgeasy.com/share/HwPdTQUbtI76z9bk0yeq.png", // black bow bag
	],
	body: [
        "https://imgeasy.com/share/lRaMIQl5ceZpK5SDqQco.png", // pink tank top
        "https://imgeasy.com/share/eb7KBpR0Pp7y172wdhmJ.png", // red dress
        "https://imgeasy.com/share/lcw4HYob2SDuzN2iHScS.png", // bear tank
        "https://imgeasy.com/share/hoDV2vsO45GRQjM5UaGz.png", // bites shirt
        "https://imgeasy.com/share/nrGGFe3zogenNyQU9iCq.png", // bra tank
        "https://imgeasy.com/share/Qj8rHeanaFK46qfehtlA.png", // butterfly tank
        "https://imgeasy.com/share/UWLOlo82tusGJ39EsHu5.png", // cheetah tank
        "https://imgeasy.com/share/vxmcuyloq8Npd3JivsmQ.png", // green shirt
        "https://imgeasy.com/share/tNEXYrVe20SDMOp5jxE5.png", // lips shirt
        "https://imgeasy.com/share/rnBHLvWVNg5lV5bKSEuV.png", // lipstick top
        "https://imgeasy.com/share/wbuqIPMRmUC0AOsH6feM.png",// one shoulder top
        "https://imgeasy.com/share/RmznNiZHy5q1eurW3IsM.png", // sexy top
        "https://imgeasy.com/share/mzhldLZ5IIhrdQ8q4HIX.png", // worm shirt
        "https://imgeasy.com/share/TimV5atjh7QayGEHBZpN.png", // black tee
        "https://imgeasy.com/share/VxqddZ1rMC3VlDUHmeog.png", // brown fur coat
        "https://imgeasy.com/share/gUbaTE0i0y8LEVyfOPh2.png", // brown fur and leather coat
        "https://imgeasy.com/share/PBjDa7nPPTGCjUaS6ssE.png", // butterfly dress
        "https://imgeasy.com/share/ATyCGPgDwhK9tBLeQQky.png", // cheetah coat
        "https://imgeasy.com/share/OoyYd8VftwdrHo1zBxPb.png", // cheetah dress
        "https://imgeasy.com/share/9RojYfSdf5oITEzgHiqh.png", // fox fur coat
        "https://imgeasy.com/share/L9dMYat5iGrPLIWZzcuQ.png", // jean top
        "https://imgeasy.com/share/ilVuinJX4w2YRX9hnKtN.png", // leather jacket
        "https://imgeasy.com/share/6msQ0loYIraZZGlSj4VI.png", // leather top
        "https://imgeasy.com/share/iP1CO7zbYqIajrrsapnD.png", // leather and fur light brown coat
        "https://imgeasy.com/share/ceEYHHhqOksB7CW17mJ1.png", // cheetah long dress
        "https://imgeasy.com/share/O9cIGbQkxYwHTb2OcuEG.png", // octopus dress
        "https://imgeasy.com/share/WFJCSkNqevyymog5AUiw.png", // red fur coat
        "https://imgeasy.com/share/U1La1xoFdl1RNdWZR4z1.png", // yellow jacket
		
        
	],
	pants: [
        "https://imgeasy.com/share/ly9ALFcChHl10SPkoKVg.png", //low rise jeans
        "https://imgeasy.com/share/j6PRC0tS4DdYfHAgZX0g.png", //bow skirt
        "https://imgeasy.com/share/2HEFeU3Lb0iu6mGJuVRF.png", //brown leather skirt
        "https://imgeasy.com/share/rtCHjtuREbu4xN4AUmNn.png", //cheetah jeans
        "https://imgeasy.com/share/z9bchnDFwF6v25nTr9IS.png", //cheetah skirt
        "https://imgeasy.com/share/mPWc2zCPhqlhYU3vQbPy.png", //butterfly jeans
        "https://imgeasy.com/share/9ltncAfo8iH2lXvLBx0I.png", //chromatic jean
        "https://imgeasy.com/share/c6F029Cu2Ng3fUsFqcjh.png", //corduroy skirt
        "https://imgeasy.com/share/uPDNWPnICLFNLvtxaUiL.png", //demon jean
        "https://imgeasy.com/share/00CD1wZg2IjKwUnd0OJ9.png", //face skirt
        "https://imgeasy.com/share/TEiY4GoiQKQogp45D9L3.png", //grey skirt
        "https://imgeasy.com/share/khA9xAGdbtnPoJ1mahcn.png", //lace jean
        "https://imgeasy.com/share/rJn61ivA8cYoJlitfWgu.png", //lace skirt
        "https://imgeasy.com/share/1L94AvlmmYthT34clSjz.png", //brown lace skirt
        "https://imgeasy.com/share/GxmqxV0nb7HcLhTzKvcu.png", //leather micro short
        "https://imgeasy.com/share/T0JNEsMRppPjprhSF26p.png", //leather skirt
        "https://imgeasy.com/share/gITG8mf97CtWZ95OuCfo.png", //lines jean
        "https://imgeasy.com/share/D7Yu7TzNjAsw4cNQVotJ.png", //stitches jean
        "https://imgeasy.com/share/yOzoPpG6zgHyl2MFSUKq.png", //velvet pant
        "https://imgeasy.com/share/j7cocAFtzjCbluWjaHJX.png", //von dutch skirt
        "https://imgeasy.com/share/asryv1xMaA3GTeIrir76.png", //jean skirt
        "https://imgeasy.com/share/ZfPBTLHSKHRJPilWc8FA.png", //cheetah short
        "https://imgeasy.com/share/LFF2BAFReZ3xoTAIXVPt.png", // transparent image...blank
		
	],
	boots: [
        "https://imgeasy.com/share/UEyHR3lKttU4J4LDLRV3.png", // brown long leather boot
        "https://imgeasy.com/share/uvMPRrQXncFDY5e8EcoW.png", // grey boot
        "https://imgeasy.com/share/zJTyJ7EmvzB1JUSaWtUq.png", // black ballerinas
        "https://imgeasy.com/share/SSCcwFSXaWziAbzjRbFi.png", // brown pumps
        "https://imgeasy.com/share/FBrdKFNxn2Ya38lHf023.png", // black buckle boot
        "https://imgeasy.com/share/m1j3c7VzVPzwS3C9EUuA.png", // demonias
        "https://imgeasy.com/share/BGCVNeCFo9HeeYLZDH2f.png", // fur pump
        "https://imgeasy.com/share/W4PcD6sgrUCFxn53tcTT.png", // heart pump
        "https://imgeasy.com/share/3dFuO8C5oheF5QCfrsAS.png", // leather one buckle boot
        "https://imgeasy.com/share/9v9IZ9Y8EBOzeNx00QNj.png", // red long leather boot
        "https://imgeasy.com/share/sEXwiadJsWFExsNIbRp5.png", // bow pump
        "https://imgeasy.com/share/dolPZddBdBlCpBlHv2Ab.png", // cheetah pump
        "https://imgeasy.com/share/3XmtF7Sxx08YXjTnT1E3.png", // cheetah heel
        "https://imgeasy.com/share/ZVHBVt3vv25napkXZg5q.png", // fur boot
        "https://imgeasy.com/share/spbKEq4z1yhOwBY3tXnT.png", // moonboot
        "https://imgeasy.com/share/vTJGNrxPzBf23aEgyvsk.png", // fur heel boot
		
	]
};

const cards = document.querySelectorAll("#game-board card");

// Set the default image for each card
cards.forEach((card) => {
	const className = card.className;
	if (images[className] && images[className][0]) {
		const img = card.querySelector("img");
		if (img) {
			img.src = images[className][0];
		}
	}
});

// Add click event listeners to cycle through images
cards.forEach((card) => {
	card.addEventListener("click", () => {
		const className = card.className;
		if (images[className]) {
			const img = card.querySelector("img");
			if (img) {
				const currentSrc = img.src;

				// Normalize the current image src for comparison
				const currentNormalized = new URL(currentSrc).href;

				// Find the index of the current image in the array
				const currentIndex = images[className].findIndex(
					(url) => new URL(url).href === currentNormalized
				);

				console.log("Current Index:", currentIndex); // Debugging log

				// Determine the next index, cycling back to 0 if we're at the end
				const nextIndex = (currentIndex + 1) % images[className].length;

				// Set the new image source
				img.src = images[className][nextIndex];

				console.log("Next Image Source:", images[className][nextIndex]); // Debugging log
			}
		}
	});
});

 // Access the button element
 const submitButton = document.getElementById("submitButton");

 // Add click event listener
 submitButton.addEventListener("click", function() {
     console.log("Button clicked!"); // Log message to the console
     window.location.href = "competition.html"; // Redirect to another page
 });


 const timeDisplay = document.getElementById("time");

        // Set the timer duration (in seconds)
        let timeLeft = 60;

        // Function to start the timer
        const timer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timer); // Stop the timer
                console.log("Time's up!"); // Log time's up message
                window.location.href = "competition.html"; // Redirect to the next page
            } else {
                timeDisplay.textContent = timeLeft; // Update the displayed time
                timeLeft--; // Decrease the time left by 1 second
            }
        }, 1000); // Execute every 1000 milliseconds (1 second)
 }