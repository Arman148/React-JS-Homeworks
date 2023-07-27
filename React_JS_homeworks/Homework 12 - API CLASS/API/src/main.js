
/*
fetch('http://example.com/movies.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
*/
class Functional {
    constructor() {
        console.log('at functional consturctor');
    }

    getUrl() {
        return this.url;
    }

    getEndpoint() {
        return this.endpoint;
    }

    setUrl(newUrl) {
        return this.url = newUrl;
    }

    setEndpoint(newEndpoint) {
        return this.endpoint = newEndpoint;
    }

    getFetch(url) {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch(error => console.log('error: ', error))
    }

    postFetch(url, data) {
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .catch(error => console.log('error: ', error))
    }

    putFetch(url, data) {
        fetch(url, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .catch(error => console.log('error: ', error))
    }

    deleteFetch(url) {
        fetch(url, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(response => console.log('deleted'))
        .catch(error => console.log('error: ', error))
    }
}


class ItemAPI extends Functional {
    constructor(params) {
        console.log('params:',params );
        console.log('at itemApi consturctor ');
        super();
        const { url, endpoint } = params;
        this.endpoint = endpoint;
        this.url = url;
        this.fullUrl = `${this.url}${this.endpoint}`;
    }

    getList() {
        console.log('at itemApi getlist()');
        this.getFetch(this.fullUrl);
    }

    getByID(id) {
        this.getFetch(`${this.fullUrl}/${id}`);
    }

    create(name, description, price) {
        const data = {
            name: name,
            description: description,
            price: price
        };
        this.postFetch(this.fullUrl, data);
        this.getList();
    }

    update(id, name, description, price) {
        const data = {
            name: name,
            description: description,
            price: price
        };
        this.putFetch(`${this.fullUrl}/${id}`, data);
        this.getList();
    }

    delete(id) {
        this.deleteFetch(`${this.fullUrl}/${id}`);
        this.getList();
    }
}


class CustomerAPI extends Functional {
    constructor(params) {
        super();
        const { url, endpoint } = params;
        this.url = url;
        this.endpoint = endpoint;
        this.fullUrl = `${this.url}${this.endpoint}`;
    }

    getList() {
        this.getFetch(this.fullUrl);
    }

    getByID(id) {
        this.getFetch(`${this.fullUrl}/${id}`);
    }
    
    create(firstname, lastname, isPrime) {
        const data = {
            firstname: firstname,
            lastname: lastname,
            isPrime: isPrime
        };

        this.postFetch(this.fullUrl, data);
        this.getList();
    }

    update(id, firstname, lastname, isPrime) {
        const data = {
            firstname: firstname,
            lastname: lastname,
            isPrime: isPrime
        };

        this.putFetch(`${this.fullUrl}/${id}`, data);
        this.getList();
    }

    delete(id) {
        this.deleteFetch(`${this.fullUrl}/${id}`);
        this.getList();
    }
}


class API {
    constructor({ url }) {        
        console.log('at API constructor')
        this.item = new ItemAPI({
            url,
            endpoint: 'item'
        });
        this.customer = new CustomerAPI({
            url,
            endpoint: 'customers'
        });
    }
}


console.log('at new api');
const api = new API({
    url: 'https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/'
});


console.log('at item getlist function');
//api.item.getList();
//api.item.getByID(74)
//api.item.delete(81);
//api.item.create('name', 'Description', 'price');
//api.item.update(83, 'desc', 'sdasd', 100);

//api.customer.getList();
//api.customer.getByID(1);
//api.customer.create('name', 'lastname', true);
//api.customer.update(18, 'name', 'LastName', false);
//api.customer.delete(18);
//api.customer.delete(19);
