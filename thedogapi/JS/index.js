const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => displayDog(data))
}

const displayDog =(dogList) => {
    // console.log(dogList);
    const main = document.getElementById('main');
    // console.log(main);
    const first10Data = dogList.slice(30, 50);
    // console.log(first10Data);
    // console.log(div);
    for(const dog of first10Data){
        const div = document.createElement('div');
        div.className="col-lg-4"
        // console.log(dog);
        // console.log(dog.name);
        div.innerHTML = `
            <h2>${dog.name}</h2>
            <h4>Weight: ${dog.weight.imperial}</h4>
            <img width='400px' height='250px' src="${dog.image.url}">
            <p>${dog.temperament}</p>
        `
        main.appendChild(div);
    }
}
