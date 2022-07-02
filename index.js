// Add your code here




function submitData(name, email) {

    const userData = {
        name: `${name}`,
        email: `${email}`,
      };

      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },

        body: JSON.stringify(userData),
      };

      const body = document.querySelector("body");

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {

      console.log(object);
      const nameElement = document.createElement("h2");
      const emailElement = document.createElement("h2");
      const idElement = document.createElement("h2");


      body.append(nameElement);
      body.append(emailElement);
      body.append(idElement);

      nameElement.innerHTML = object.name;
      emailElement.innerHTML = object.email;
      idElement.innerHTML = object.id;


    })
    .catch(function(error) {

        const showMessageInDom = document.createElement("p");
        showMessageInDom.innerHTML = error.message;
        body.append(showMessageInDom);



    });
}

submitData("Josh", "joshsmayhew@gmail.com");

