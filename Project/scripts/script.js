async function getdata(id){
    const bodyPart = id
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${id}?limit=10`;
    const rapidApiKey = 'e4d2587c00mshfd9c8a9971f0952p1e736fjsnecb41126b748';
    const element = document.getElementById('exercise')
    console.log(element)
    if (element!== null){
        element.remove()
    } else {
        await fetchAndDisplayExercises(url, rapidApiKey);
    console.log(bodyPart)

    async function fetchAndDisplayExercises(url, apiKey) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            var container = document.createElement('div')
            container.setAttribute('id', 'exercise')
            container.setAttribute('class', 'show')
            document.getElementById(bodyPart).appendChild(container)
            displayExercises(data, container);
        
        } catch (error) {
            console.error(`Error:`, error);
        }
    }

    function displayExercises(data, container) { 
        data.forEach(exercise => {
            container.innerHTML += `
                    <h3 id="${exercise.name}" onclick="listdata(this.id)">${exercise.name}</h3>
                
            `;
        });
    }
    }
    
}
function listdata(id) {
    const exercise = document.getElementById(id)
    document.getElementById('selected-exercises').innerHTML += `<h3>${exercise.id}</h3>`
}
function clearlist() {
    document.getElementById('selected-exercises').innerHTML = " "
}