const textStr = 'Левадный. Начинающий web-программист';

let trigger = true;

document.addEventListener('keydown', (e) => {
	const contentText = document.querySelector('.textForAnimate');

	if(e.keyCode != '32') {
		return;
	}
	if(trigger) {
		contentText.remove();
	} else {
		let textElement = document.createElement('h1');
		textElement.classList.add('textForAnimate');
		textElement.textContent = textStr;
		textElement.setAttribute('data-text', textStr);
		document.body.prepend(textElement);
		textElement = '';
	}
	console.log(trigger);
	trigger = !trigger;
})