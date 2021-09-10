function createHeader() {
	const content = document.querySelector('#content');
	const header = document.createElement('header');
	const divForeground = document.createElement('div'); 
	const h1 = document.createElement('h1');
	divForeground.classList.add('foreground');
	h1.textContent = 'Best Brazzilian Food Ever!'

	divForeground.append(h1)
	header.append(divForeground)
	content.append(header)
}

export default createHeader	