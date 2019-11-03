
const activityForm = document.querySelector('form');
const activityText = document.querySelector('input');
const placeResult = document.querySelector('#place-result');

activityForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const activity = activityText.value;

    fetch('http://localhost:3000/places/' + activity).then((response) => {
        if(response.status !== 200){
            placeResult.textContent = "Could not find place!"
        }else{
            response.json().then((data) => {
                placeResult.textContent = data.name;
            });
        }
    });
});