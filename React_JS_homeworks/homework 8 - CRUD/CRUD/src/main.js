/*
fetch(`${URL}${endpoint}`)
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
});

*/

const URL = 'https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/';
const endpoint = 'item';

const $ = (id) => {
    return document.getElementById(id);
}

const c = (name) => {
    return document.createElement(name);
}

const submitBtn = $('submit');

submitBtn.addEventListener('click', function () {
    CreateItem(URL, endpoint);
})


function GetItemList (url, endpoint) {
    $('posts').innerHTML = '';

    fetch(`${URL}${endpoint}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        data.map(item => {
            let post = c('post');
             
            let n = item.name;
            let p = `$${item.price}`;
            
            let name = c('name');
            let price = c('price');
            name.append(n)
            price.append(p);

            let buttons = c('buttons');

            let edit = c('edit');
            edit.innerHTML = 'edit';
            edit.onclick = function () {
                onEdit(item.id);
            }

            let del = c('delete');
            del.innerHTML = 'delete';
            del.onclick = function () {
                onDelete(item.id)
            }
            
            buttons.append(edit);
            buttons.append(del);
            post.append(name);
            post.append(price);
            post.append(buttons)
            $('posts').append(post);
        })
    });
}

GetItemList(URL, endpoint);

function CreateItem (url, endpoint) {
    const name = $('name');
    const price = $('desc');
    const data = {
        name: name.value,
        price: price.value,
    }
    
    fetch( // fetch with POST (create) method
    `${url}${endpoint}`,
    {
      method: "POST", // method POST used to create new data in items list in backend
      body: JSON.stringify(data), // change normal javascript object in to JSON format
      headers: {
        'Content-Type': 'application/json' // what kind of data we will send to backend
      }
    }
  )
  .then(function (response) {
    if (response.ok && response.status === 201) {
        name.value = '',
        price.value = ''
        GetItemList(URL, endpoint)
    }
  })
  .catch(function (err) {
    console.log("Error", err);
  });

    console.log('data:',data );
}

const GetById = () => {

    fetch(`${URL}${endpoint}`)
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
});

}

function deleteById (id) {    
    fetch(
        `${URL}${endpoint}/${id}`,
        {
          method: 'DELETE'
        }
    ).then(function (response) {
        if (response.ok && response.status === 200) {
          return response.json().then(function (responseData) {
            alert('item deleted');
            GetItemList(URL, endpoint);
          });
        }
      })
}

function fillForm (data) {
    const name = $('name');
    const price = $('desc');

    name.value = data.name;
    price.value = data.price;
}

function getById (id) {
    fetch(
        `${URL}${endpoint}/${id}`,
        {
          method: 'DELETE'
        }
    ).then(function (response) {
        if (response.ok && response.status === 200) {
          return response.json().then(function (responseData) {
            alert('item editing');
            fillForm(responseData);
          });
        }
      })
}

const onDelete = (id) => {
    console.log('id:',id );
    deleteById(id);
}

const onEdit = (id) => {
    console.log('id:',id );
    getById(id)
}


