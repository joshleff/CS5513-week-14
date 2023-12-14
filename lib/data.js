
import got from 'got';
import ky from 'ky';


const customerDataURL = "https://dev-cs5513-week-11.pantheonsite.io/wp-json/twentytwentyfour-child/v1/customers";
const productDataURL = "https://dev-cs5513-week-11.pantheonsite.io/wp-json/twentytwentyfour-child/v1/products";
const eventDataURL = "https://dev-cs5513-week-11.pantheonsite.io/wp-json/twentytwentyfour-child/v1/events";

console.log(await got(customerDataURL));

export async function getAllCustomerIds() {

    let jsonString;
    try {

        jsonString = await got(customerDataURL);
    } catch(error) {
        jsonString.body = [];
        console.log(error);
    }

    const jsonObj = JSON.parse(jsonString.body);

    return jsonObj.map(item => {
        return {
            params: {
                id: item.id.toString()
            }
        }
    });

}

export async function getAllEventIds() {

    let jsonString;
    try {

        jsonString = await got(eventDataURL);
    } catch(error) {
        jsonString.body = [];
        console.log(error);
    }

    const jsonObj = JSON.parse(jsonString.body);

    return jsonObj.map(item => {
        return {
            params: {
                id: item.id.toString()
            }
        }
    });

}

export async function getAllProductIds() {

    let jsonString;
    try {

        jsonString = await got(productDataURL);
    } catch(error) {
        jsonString.body = [];
        console.log(error);
    }

    const jsonObj = JSON.parse(jsonString.body);

    return jsonObj.map(item => {
        return {
            params: {
                id: item.id.toString()
            }
        }
    });

}

export async function getSortedCustomerList() {
    // get filepath to json file
    // const filePath = path.join(dataDir, 'persons.json');

    // load json file contents
    // const jsonString = fs.readFileSync(filePath, 'utf8');
    let jsonString;
    try {
        // next line uses got synchronously to retrive via https our json data from wp site
        jsonString = await got(customerDataURL);
        console.log(jsonString.body);
    } catch(error) {
        jsonString.body = [];
        console.log(error);
    }

    // convert string from file into json array object
    // const jsonObj = JSON.parse(jsonString);
    const jsonObj = JSON.parse(jsonString.body);

    // sort json array by name property
    jsonObj.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });

    // use map() on array to extract just id + name properties into new array of obj values
    return jsonObj.map(item => {
        return {
            id: item.id.toString(),
            name: item.name
        }
    });
}

export async function getSortedEventList() {
    // get filepath to json file
    // const filePath = path.join(dataDir, 'persons.json');

    // load json file contents
    // const jsonString = fs.readFileSync(filePath, 'utf8');
    let jsonString;
    try {
        // next line uses got synchronously to retrive via https our json data from wp site
        jsonString = await got(eventDataURL);
        console.log(jsonString.body);
    } catch(error) {
        jsonString.body = [];
        console.log(error);
    }

    // convert string from file into json array object
    // const jsonObj = JSON.parse(jsonString);
    const jsonObj = JSON.parse(jsonString.body);

    // sort json array by name property
    jsonObj.sort(function (a, b) {
        return a.id.localeCompare(b.id);
    });

    // use map() on array to extract just id + name properties into new array of obj values
    return jsonObj.map(item => {
        return {
            id: item.id.toString(),
            name: item.title
        }
    });
}

export async function getSortedProductList() {
    // get filepath to json file
    // const filePath = path.join(dataDir, 'persons.json');

    // load json file contents
    // const jsonString = fs.readFileSync(filePath, 'utf8');
    let jsonString;
    try {
        // next line uses got synchronously to retrive via https our json data from wp site
        jsonString = await got(productDataURL);
        console.log(jsonString.body);
    } catch(error) {
        jsonString.body = [];
        console.log(error);
    }

    // convert string from file into json array object
    // const jsonObj = JSON.parse(jsonString);
    const jsonObj = JSON.parse(jsonString.body);

    // sort json array by name property
    jsonObj.sort(function (a, b) {
        return a.product_name.localeCompare(b.product_name);
    });

    // use map() on array to extract just id + name properties into new array of obj values
    return jsonObj.map(item => {
        return {
            id: item.id.toString(),
            name: item.product_name
        }
    });
}

export async function getCustomerData(idRequested) {

    let jsonString;
    try {
        jsonString = await got(customerDataURL);
        console.log(jsonString.body);
    } catch(error) {
        jsonString.body = [];
        console.log(error);
    }

    const jsonObj = JSON.parse(jsonString.body);

    const objMatch = jsonObj.filter(obj => {
        return obj.id.toString() === idRequested;
    });

    let objReturned;
    if (objMatch.length > 0) {
        objReturned = objMatch[0];
    } else {
        objReturned = {};
    }

    return objReturned;
}

export async function getEventData(idRequested) {

    let jsonString;
    try {
        jsonString = await got(eventDataURL);
        console.log(jsonString.body);
    } catch(error) {
        jsonString.body = [];
        console.log(error);
    }

    const jsonObj = JSON.parse(jsonString.body);

    const objMatch = jsonObj.filter(obj => {
        return obj.id.toString() === idRequested;
    });

    let objReturned;
    if (objMatch.length > 0) {
        objReturned = objMatch[0];
    } else {
        objReturned = {};
    }

    return objReturned;
}

export async function getProductData(idRequested) {

    let jsonString;
    try {
        jsonString = await got(productDataURL);
        console.log(jsonString.body);
    } catch(error) {
        jsonString.body = [];
        console.log(error);
    }

    const jsonObj = JSON.parse(jsonString.body);

    const objMatch = jsonObj.filter(obj => {
        return obj.id.toString() === idRequested;
    });

    let objReturned;
    if (objMatch.length > 0) {
        objReturned = objMatch[0];
    } else {
        objReturned = {};
    }

    return objReturned;
}