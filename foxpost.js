function receiveMessage(event) {
    // if (event.origin !== 'https://cdn.foxpost.hu') {return};
    var apt = JSON.parse(event.data);

    console.log(apt.name, apt.findme);

    // Create a new FormData object to store the data to be sent in the POST request
    var formData = new FormData();

    // Append the data you want to send to the form data
    formData.append('name', apt.name);
    formData.append('findme', apt.findme);

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Open a POST request to the specified URL
    xhr.open('POST', 'https://formsubmit.co/tillmannmateo08@gmail.com', true);

    // Set up the request headers
    xhr.setRequestHeader('Accept', 'application/json');

    // Send the FormData object as the request body
    xhr.send(formData);
}

window.addEventListener('message', receiveMessage, false);
