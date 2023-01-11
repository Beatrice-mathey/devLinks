function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light');
}

//pegar a tag img

const img = document.querySelector('#profile img')

//substituir a img 

if(html.classList.contains('light')) {
    //se tiver light mode adicionar a img git
    img.setAttribute('src', 'https://https://www.linkedin.com/in/beatricemathey.png')
} else {
    //se tiver sem light mode, manter img normal
    img.setAttribute('src', 'https://www.github.com/Beatrice-mathey.png')
}