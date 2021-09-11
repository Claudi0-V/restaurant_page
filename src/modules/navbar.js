const navList = ['main', 'menu', 'contact'];

function createNavBar() {
        const header = document.querySelector('.foreground');
        const nav = document.createElement('nav');
        for (let ii = 0; ii < 3; ii++) {
                const div = document.createElement('div');
                let upper = navList[ii].charAt(0).toUpperCase() + navList[ii].slice(1)
                div.classList.add('nav-btn');
                if (navList[ii] === "main") div.classList.add('active');
                div.textContent = `${upper}`;
                div.setAttribute('data-targetId', `#${navList[ii]}`);
                nav.append(div)
        }
        header.append(nav)
}

export default createNavBar