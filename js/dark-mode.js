const body=document.body;
const darkModeToggle=document.getElementById('dark-mode-toggle');
const darkModeMediaQuery=window.matchMedia('(prefers-color-scheme: dark)');

if(localStorage.getItem("colorscheme")){
    setTheme(localStorage.getItem("colorscheme"));
} else if(body.classList.contains('colorscheme-light')||body.classList.contains('colorscheme-dark')){
    setTheme(body.classList.contains("colorscheme-dark")?"dark":"light");
} else{
    setTheme(darkModeMediaQuery.matches?"dark":"light");
}

darkModeToggle.addEventListener("click",()=>{setTheme(body.classList.contains("colorscheme-dark")?"light":"dark");});
darkModeMediaQuery.addListener((event)=>{setTheme(event.matches?"dark":"light");});

function setTheme(theme){
    body.classList.remove('colorscheme-auto');
    inverse=theme==='dark'?'light':'dark';localStorage.setItem('colorscheme',theme);
    body.classList.remove('colorscheme-'+inverse);
    body.classList.add('colorscheme-'+theme);
}