import "./styles/index.css"
import createHeader  from "./modules/header.js"
import createNavBar  from "./modules/navbar.js"
import createMain  from "./modules/main.js"
import createMenu  from "./modules/menu.js"
import createContact  from "./modules/contact.js"

createHeader()
createNavBar()
createMain()
createMenu()
createContact()

const tabs = document.querySelectorAll('[data-targetId]');
const tabContent = document.querySelectorAll('.tab-section');

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
	const target = document.querySelector(tab.dataset.targetid);
	tabContent.forEach(tab => tab.classList.remove('active'));
	tabs.forEach(tab => tab.classList.remove('active'));
	tab.classList.add('active');
	target.classList.add('active');
	})
})

