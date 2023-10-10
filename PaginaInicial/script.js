var map = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('London.')
    .openPopup();

// menu
const navMenu = document.getElementsByClassName("ul-menu")[0];
const btnMenu = document.getElementsByClassName("mobile-menu")[0];
const line1 = document.getElementsByClassName("line1")[0];
const line2 = document.getElementsByClassName("line2")[0];
const line3 = document.getElementsByClassName("line3")[0];
btnMenu.addEventListener("click", ()=>{
    navMenu.classList.toggle('active-menu')
    line2.classList.toggle('remove')
    line1.classList.toggle('rotate1')
    line3.classList.toggle('rotate3')
})