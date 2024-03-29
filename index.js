const buttons = document.querySelectorAll('.drum')

// - - - - - - - - Button click "drum" action

buttons.forEach(button => {

	button.addEventListener('click', () => {
		const buttonInnerHtml = button.innerHTML
		makeSound(buttonInnerHtml)

		buttonPress(button)
	})
});


// - - - - - - - - Keydown "drum" action

document.addEventListener('keydown', (e) => {
	makeSound(e.key)
	const pressedButton = document.querySelector(`.${e.key}.drum`)

	pressedButton ? buttonPress(pressedButton) : ''
})


// - - - - - - - - Tiles animation

function buttonPress(button) {
	button.classList.add('active');

	setTimeout(() => {
		button.classList.remove('active');
	}, 250);
}

// - - - - - - - - Keydown / click examination

function makeSound(key) {
	switch (key) {
		case 'w':
			const tom1 = new Audio('sounds/tom-1.mp3')
			tom1.play()
			break;

		case 'a':
			const tom2 = new Audio('sounds/tom-2.mp3')
			tom2.play()
			break;

		case 's':
			const tom3 = new Audio('sounds/tom-3.mp3')
			tom3.play()
			break;

		case 'd':
			const tom4 = new Audio('sounds/tom-4.mp3')
			tom4.play()
			break;

		case 'j':
			const snare = new Audio('sounds/snare.mp3')
			snare.play()
			break;

		case 'k':
			const crash = new Audio('sounds/crash.mp3')
			crash.play()
			break;

		case 'l':
			const kick = new Audio('sounds/kick-bass.mp3')
			kick.play()
			break;

		default: console.log(key)
			break;
	}
}