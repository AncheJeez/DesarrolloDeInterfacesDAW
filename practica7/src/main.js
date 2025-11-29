import './style.css';

const html = document.documentElement;
const btnLight = document.getElementById('btnLight');
const btnDark = document.getElementById('btnDark');

btnDark.addEventListener('click', (e) => {
    e.preventDefault();

    document.body.classList.add('dark');
    localStorage.setItem('color-scheme','dark');
});

btnLight.addEventListener('click', (e) =>{
    e.preventDefault();

    document.body.classList.remove('dark');
    localStorage.setItem('color-scheme','light');
});

const colorLocal = localStorage.getItem('color-scheme');
const colorSistema = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

if (colorLocal) {
	if (colorLocal === 'dark') {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
} else {
	if (colorSistema === 'dark') {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
}