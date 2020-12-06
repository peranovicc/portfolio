const projects = [
    {
        img: 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png',
        demo: '',
        github: 'https://github.com/peranovicc/python'
    },
    {
        img: 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png',
        demo: '',
        github: 'https://github.com/peranovicc/python'
    },
    {
        img: 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png',
        demo: '',
        github: 'https://github.com/peranovicc/python'
    },
    {
        img: 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png',
        demo: '',
        github: 'https://github.com/peranovicc/python'
    },
    {
        img: 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png',
        demo: '',
        github: 'https://github.com/peranovicc/python'
    },
    {
        img: 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png',
        demo: '',
        github: 'https://github.com/peranovicc/python'
    }

]

const menuBtn = document.querySelector('.menu-btn')
const hamburger = document.querySelector('.menu-btn_burger')
const nav = document.querySelector('nav.nav')
const menuNav = document.querySelector('ul.nav')
const navItems = document.querySelectorAll('.nav_item')
const projectsDiv = document.querySelector('#projects')

let showMenu = false

const toggleNav = () => {
    if(!showMenu){
        hamburger.classList.add('open')
        nav.classList.add('open')
        menuNav.classList.add('open')
        navItems.forEach(item => {
            item.classList.add('open')
            item.addEventListener('click',toggleNav)
        })
    }
    else{
        hamburger.classList.remove('open')
        nav.classList.remove('open')
        menuNav.classList.remove('open')
        navItems.forEach(item => {
            item.classList.remove('open')
        })

    }
    showMenu = !showMenu
}

menuBtn.addEventListener('click',toggleNav)
{/* <div class="project">
                <img src="#" alt="project-photo">
                <a href="#">Live demo</a>
                <a href="#">GitHub</a>
            </div> */}
projects.forEach(project => {
    console.log(project)
    const div = document.createElement('div')
    div.className = 'project'

        const img = document.createElement('img')
        img.src = project.img
        img.alt = project.github + ' photo'

        const demo = document.createElement('a')
        demo.href = project.demo
        demo.textContent = 'Live Demo'
        const github = document.createElement('a')
        github.href = project.github
        github.textContent = 'GitHub'

        div.append(img,demo,github)

    projectsDiv.append(div)
})