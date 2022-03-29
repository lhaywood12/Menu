function updateMenu(e) {
    e.preventDefault();
    let output = document.getElementById('output');
    let entree = document.querySelector('input[name="entree"]:checked').value;
    let side = document.querySelector('input[name="side"]:checked').value;
    let dessert = document.querySelector('input[name="dessert"]:checked').value;

    output.innerHTML =  `
        <p>Entree: ${entree}</p>
        <p>Side: ${side}</p>
        <p>Dessert: ${dessert}</p>
    `
}

const form = document.getElementById('form');

form.addEventListener('submit', updateMenu)