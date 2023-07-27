function $ (id) {
    return document.getElementById(id)
}

function getImage () {
    fetch(`https://dog.ceo/api/breed/${$('name').value}/images/random`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const picUrl = `url(${data.message})`;
            console.log(' :',picUrl );
            const picture = document.createElement('pic');
            picture.style.backgroundImage = picUrl;
            console.log(picture)
            const section = $('imageSection');
            section.append(picture);
            
        })
        .catch(error => `error: ${error}`)

        $('imageSection').innerHTML = ''
}

const find = $('search');

find.onclick = getImage;