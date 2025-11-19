const btnMOD = document.getElementById('btnMOD');

const mods = document.querySelectorAll('.container .mod-1, .container .mod-2, .container .mod-3, .container .mod-4, .container .mod-5');

btnMOD.addEventListener('click', () => {
    mods.forEach(mod => {
        mod.classList.toggle('show');
    });
});
