function createNavBar() {
        const header = document.querySelector('.foreground');
        const nav = document.createElement('nav');
        for (let ii = 0; ii < 3; ii++) {
                const div = document.createElement('div');
                div.classList.add('nav-btn');
                div.textContent = `Section${ii}`
                nav.append(div)
        }
        header.append(nav)
}

export default createNavBar