import './styles/index.scss';
import ancientsData from '../data/ancients'
import cardsDataBlue from '../data/mythicCards/blue/index'
import cardsDataBrown from '../data/mythicCards/brown/index'
import cardsDataGreen from '../data/mythicCards/green/index'


let number;
let difficulty;
const dot = document.querySelectorAll('.dot')
const difficultyContainer = document.querySelector('.difficulty-container')
const btn = document.querySelector('.btn')
const cardBg = document.querySelector('.card-bg')
const lastCard = document.querySelector('.last-card')
//////////////////////////////////////////////
function clickMenu() {
	const menuItems = document.querySelectorAll('.item');
	for (let i = 0; i < menuItems.length; i++) {
		menuItems[i].addEventListener('click', function (e) {
			for (let index = 0; index < menuItems.length; index++) {
				if (menuItems[index] == menuItems[i]) {
					menuItems[index].classList.add('active');
				} else {
					menuItems[index].classList.add('none');
				}
			}
			number = i;
			difficultyContainer.classList.add('active')
		})
	}
}
clickMenu()
//////////////////////////////////////////////
function clickDiff() {
	const dif = document.querySelectorAll('.difficulty');
	for (let i = 0; i < dif.length; i++) {
		dif[i].addEventListener('click', function (e) {
			for (let index = 0; index < dif.length; index++) {
				if (dif[index] == dif[i]) {
					dif[index].classList.add('active-plus');
				} else {
					dif[index].classList.add('none');
				}
			}
			difficulty = i;
			btn.classList.add('active')
		})
	}
}
clickDiff()
//////////////////////////////////////////////
btn.addEventListener('click', function (e) {
	btn.classList.add('active-plus');
	cardBg.style.display = 'block'
	start()
})

// console.log(ancientsData[0].firstStage.greenCards)

function start() {
	dot[0].innerHTML = ancientsData[number].firstStage.greenCards
	dot[1].innerHTML = ancientsData[number].firstStage.brownCards
	dot[2].innerHTML = ancientsData[number].firstStage.blueCards
	dot[3].innerHTML = ancientsData[number].secondStage.greenCards
	dot[4].innerHTML = ancientsData[number].secondStage.brownCards
	dot[5].innerHTML = ancientsData[number].secondStage.blueCards
	dot[6].innerHTML = ancientsData[number].thirdStage.greenCards
	dot[7].innerHTML = ancientsData[number].thirdStage.brownCards
	dot[8].innerHTML = ancientsData[number].thirdStage.blueCards
}

console.log(typeof +dot[0].textContent)
// lastCard.style.backgroundImage = `url('${cardsDataGreen[0].cardFace}')`

cardBg.addEventListener('click', function (e) {
	let arrBlue = cardsDataBlue.sort(() => Math.random() - 0.5);
	let arrGreen = cardsDataGreen.sort(() => Math.random() - 0.5);
	let arrBrown = cardsDataBrown.sort(() => Math.random() - 0.5);
	let allArr = [arrGreen, arrBrown, arrBlue]
	if (difficulty == 0) {
		if (+dot[0].textContent > 0 || +dot[1].textContent > 0 || +dot[2].textContent > 0) {
			let whyDot = logik(0, 3);
			if (allArr[whyDot].find(city => city.difficulty === 'easy')) {
				let search = allArr[whyDot].findIndex(city => city.difficulty === 'easy');
				lastCard.style.backgroundImage = `url('${allArr[whyDot][search].cardFace}')`;
				allArr[whyDot].splice(search, 1);
			} else {
				search = allArr[whyDot].findIndex(city => city.difficulty === 'normal');
				lastCard.style.backgroundImage = `url('${allArr[whyDot][search].cardFace}')`;
				delete allArr[whyDot][search];
			}
			dot[whyDot].innerHTML = +dot[whyDot].textContent - 1;
		}
		else if (+dot[3].textContent > 0 || +dot[4].textContent > 0 || +dot[5].textContent > 0) {
			let whyDot = logik(3, 6);
			if (allArr[whyDot - 3].find(city => city.difficulty === 'easy')) {
				let search = allArr[whyDot - 3].findIndex(city => city.difficulty === 'easy');
				lastCard.style.backgroundImage = `url('${allArr[whyDot - 3][search].cardFace}')`;
				allArr[whyDot - 3].splice(search, 1);
			} else {
				search = allArr[whyDot - 3].findIndex(city => city.difficulty === 'normal');
				lastCard.style.backgroundImage = `url('${allArr[whyDot - 3][search].cardFace}')`;
			}
			dot[whyDot].innerHTML = +dot[whyDot].textContent - 1;
		}
		else if (+dot[6].textContent > 0 || +dot[7].textContent > 0 || +dot[8].textContent > 0) {
			let whyDot = logik(6, 9);

			if (allArr[whyDot - 6].find(city => city.difficulty === 'easy')) {
				let search = allArr[whyDot - 6].findIndex(city => city.difficulty === 'easy');
				lastCard.style.backgroundImage = `url('${allArr[whyDot - 6][search].cardFace}')`;
				allArr[whyDot - 6].splice(search, 1);
			} else {
				let search = allArr[whyDot - 6].findIndex(city => city.difficulty === 'normal');
				lastCard.style.backgroundImage = `url('${allArr[whyDot - 6][search].cardFace}')`;
				allArr[whyDot - 6].splice(search, 1);
			}
			dot[whyDot].innerHTML = +dot[whyDot].textContent - 1;
		}
	}
	else if (difficulty == 2) {
		if (+dot[0].textContent > 0 || +dot[1].textContent > 0 || +dot[2].textContent > 0) {
			let whyDot = logik(0, 3);
			lastCard.style.backgroundImage = `url('${allArr[whyDot][whyDot].cardFace}')`;
			allArr[whyDot].splice(whyDot, 1);
			dot[whyDot].innerHTML = +dot[whyDot].textContent - 1;
		}
		else if (+dot[3].textContent > 0 || +dot[4].textContent > 0 || +dot[5].textContent > 0) {
			let whyDot = logik(3, 6);
			let del = whyDot - 3;
			lastCard.style.backgroundImage = `url('${allArr[del][del].cardFace}')`;
			allArr[del].splice(del, 1);
			dot[whyDot].innerHTML = +dot[whyDot].textContent - 1;
		}
		else if (+dot[6].textContent > 0 || +dot[7].textContent > 0 || +dot[8].textContent > 0) {
			let whyDot = logik(6, 9);
			let del = whyDot - 6;
			lastCard.style.backgroundImage = `url('${allArr[del][del].cardFace}')`;
			allArr[del].splice(del, 1);
			dot[whyDot].innerHTML = +dot[whyDot].textContent - 1;
		}
	}
	else if (difficulty == 1) {
		for (let i = 0; i < allArr.length; i++) {
			for (let k = 0; k < allArr[i].length; k++) {
				if (allArr[i][k].difficulty == 'hard')
					allArr[i].splice(k, 1);
			}
		}
		if (+dot[0].textContent > 0 || +dot[1].textContent > 0 || +dot[2].textContent > 0) {
			let whyDot = logik(0, 3);
			lastCard.style.backgroundImage = `url('${allArr[whyDot][whyDot].cardFace}')`;
			allArr[whyDot].splice(whyDot, 1);
			dot[whyDot].innerHTML = +dot[whyDot].textContent - 1;
		}
		else if (+dot[3].textContent > 0 || +dot[4].textContent > 0 || +dot[5].textContent > 0) {
			let whyDot = logik(3, 6);
			let del = whyDot - 3;
			lastCard.style.backgroundImage = `url('${allArr[del][del].cardFace}')`;
			allArr[del].splice(del, 1);
			dot[whyDot].innerHTML = +dot[whyDot].textContent - 1;
		}
		else if (+dot[6].textContent > 0 || +dot[7].textContent > 0 || +dot[8].textContent > 0) {
			let whyDot = logik(6, 9);
			let del = whyDot - 6;
			lastCard.style.backgroundImage = `url('${allArr[del][del].cardFace}')`;
			allArr[del].splice(del, 1);
			dot[whyDot].innerHTML = +dot[whyDot].textContent - 1;
		}
	}
	else if (difficulty == 3) {
		for (let i = 0; i < allArr.length; i++) {
			for (let k = 0; k < allArr[i].length; k++) {
				if (allArr[i][k].difficulty == 'easy')
					allArr[i].splice(k, 1);
			}
		}
		if (+dot[0].textContent > 0 || +dot[1].textContent > 0 || +dot[2].textContent > 0) {
			let whyDot = logik(0, 3);
			lastCard.style.backgroundImage = `url('${allArr[whyDot][whyDot].cardFace}')`;
			allArr[whyDot].splice(whyDot, 1);
			dot[whyDot].innerHTML = +dot[whyDot].textContent - 1;
		}
		else if (+dot[3].textContent > 0 || +dot[4].textContent > 0 || +dot[5].textContent > 0) {
			let whyDot = logik(3, 6);
			let del = whyDot - 3;
			lastCard.style.backgroundImage = `url('${allArr[del][del].cardFace}')`;
			allArr[del].splice(del, 1);
			dot[whyDot].innerHTML = +dot[whyDot].textContent - 1;
		}
		else if (+dot[6].textContent > 0 || +dot[7].textContent > 0 || +dot[8].textContent > 0) {
			let whyDot = logik(6, 9);
			let del = whyDot - 6;
			lastCard.style.backgroundImage = `url('${allArr[del][del].cardFace}')`;
			allArr[del].splice(del, 1);
			dot[whyDot].innerHTML = +dot[whyDot].textContent - 1;
		}
	}
	if (difficulty == 4) {
		if (+dot[0].textContent > 0 || +dot[1].textContent > 0 || +dot[2].textContent > 0) {
			let whyDot = logik(0, 3);
			if (allArr[whyDot].find(city => city.difficulty === 'hard')) {
				let search = allArr[whyDot].findIndex(city => city.difficulty === 'hard');
				lastCard.style.backgroundImage = `url('${allArr[whyDot][search].cardFace}')`;
				allArr[whyDot].splice(search, 1);
			} else {
				search = allArr[whyDot].findIndex(city => city.difficulty === 'normal');
				lastCard.style.backgroundImage = `url('${allArr[whyDot][search].cardFace}')`;
				delete allArr[whyDot][search];
			}
			dot[whyDot].innerHTML = +dot[whyDot].textContent - 1;
		}
		else if (+dot[3].textContent > 0 || +dot[4].textContent > 0 || +dot[5].textContent > 0) {
			let whyDot = logik(3, 6);
			if (allArr[whyDot - 3].find(city => city.difficulty === 'hard')) {
				let search = allArr[whyDot - 3].findIndex(city => city.difficulty === 'hard');
				lastCard.style.backgroundImage = `url('${allArr[whyDot - 3][search].cardFace}')`;
				allArr[whyDot - 3].splice(search, 1);
			} else {
				search = allArr[whyDot - 3].findIndex(city => city.difficulty === 'normal');
				lastCard.style.backgroundImage = `url('${allArr[whyDot - 3][search].cardFace}')`;
			}
			dot[whyDot].innerHTML = +dot[whyDot].textContent - 1;
		}
		else if (+dot[6].textContent > 0 || +dot[7].textContent > 0 || +dot[8].textContent > 0) {
			let whyDot = logik(6, 9);

			if (allArr[whyDot - 6].find(city => city.difficulty === 'hard')) {
				let search = allArr[whyDot - 6].findIndex(city => city.difficulty === 'hard');
				lastCard.style.backgroundImage = `url('${allArr[whyDot - 6][search].cardFace}')`;
				allArr[whyDot - 6].splice(search, 1);
			} else {
				let search = allArr[whyDot - 6].findIndex(city => city.difficulty === 'normal');
				lastCard.style.backgroundImage = `url('${allArr[whyDot - 6][search].cardFace}')`;
				allArr[whyDot - 6].splice(search, 1);
			}
			dot[whyDot].innerHTML = +dot[whyDot].textContent - 1;
		}
	}
})


function logik(a, b) {
	let rundomNumber = getRandomInt(a, b);
	if (+dot[rundomNumber].textContent == 0) {
		return logik(a, b)
	} else {
		return rundomNumber;
	}
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

// let arrBlue = cardsDataBlue.sort(() => Math.random() - 0.5);
// let arrGreen = cardsDataGreen.sort(() => Math.random() - 0.5);
// let arrBrown = cardsDataBrown.sort(() => Math.random() - 0.5);
// const allArr = [arrGreen, arrBrown, arrBlue]
// console.log(allArr[1])
// if (allArr[0].find(city => city.difficulty === 'easy')) {
// 	alert('Все хорошо')
// } else {
// 	alert('Вфвафва')
// }


