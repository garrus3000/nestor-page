
const currentYear = document.querySelectorAll('.year');

for (let i = 0; i < currentYear.length; i++) {
    currentYear.item(i).innerHTML = new Date().getFullYear();
};