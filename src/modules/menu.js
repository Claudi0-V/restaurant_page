function createMenu() {
	const main = document.querySelector('main');
	const section = document.createElement('section');
	const p = document.createElement('p');
	p.textContent = "Menu ipsum dolor sit amet consectetur adipisicing elit. Delectus officia, et porro? Enim numquam explicabo eveniet totam, perferendis nostrum eius voluptatum laudantium aspernatur repellendus, error necessitatibus hic debitis, ipsa, magnam."
	section.classList.add("tab-section");
	section.setAttribute('id', 'menu');
	section.append(p);
	main.append(section);
}

export default createMenu;