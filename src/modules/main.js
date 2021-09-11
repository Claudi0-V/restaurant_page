function createMain() {
	const content = document.querySelector('#content');
	const main = document.createElement('main');
	const section = document.createElement('section');
	const p = document.createElement('p');
	p.textContent = "Main ipsum dolor sit amet consectetur adipisicing elit. Delectus officia, et porro? Enim numquam explicabo eveniet totam, perferendis nostrum eius voluptatum laudantium aspernatur repellendus, error necessitatibus hic debitis, ipsa, magnam."
	section.classList.add("tab-section");
	section.classList.add('active')
	section.setAttribute('id', 'main');
	section.append(p);
	main.append(section);
	content.append(main);
}

export default createMain;