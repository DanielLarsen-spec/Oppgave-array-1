updateView()
function updateView(){
document.getElementById('app').innerHTML = /*HTML*/`

<div>pocketStuff:  </div>
<ul>${pocketInventory}</ul>
<button onclick="pocketStuff()">Hva drar jeg ut av lommen min nå?</button>






`;
}