// In order to avoid denied request by CORS enable the CORS extension
// ion brave

// const { response } = require("express");

// console.log(window);
// async function getUsers() {
//   let response = await fetch("http://localhost:5000/api/v1/users");
//   let data = await response.json();
//   return data;
// }

// getUsers().then((response) => {
//   console.log(response);
// });

// const request = new XMLHttpRequest();
// request.open("GET", "http://localhost:5000/api/v1/users");
// request.send();
// request.onload = () => {
//   if (request.status === 200) {
//     console.log(JSON.parse(request.response));
//   } else {
//     console.log(`error ${request.status}`);
//   }
// };

console.log(window);

// axios.get("http://localhost:5000/api/v1/users").then((res) => {
//   console.log(res);
// });

function getUsers() {
  axios({
    method: "get",
    url: "http://localhost:5000/api/v1/users",
  }).then((res) => {
    console.log(res);
  });
}

// function createUser() {
//   axios({
//     method: "post",
//     // headers: {
//     //   "Content-Type": "application/json",
//     // },
//     url: "http://localhost:5000/api/v1/users",
//     data: {
//       first_name: "Paulo",
//       Last_name: "Coehlo",
//       email: "pc@gmail.com",
//       password: "1234",
//       is_deleted: "0",
//       created_at: "2021-11-19 20:06:43",
//       updated_at: "2021-11-19 20:06:43",
//     },
//   }).then(
//     (res) => {
//       console.log(res);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
// }

function createUser() {
  let form = document.formulario;

  axios
    .post("http://localhost:5000/api/v1/users/", {
      first_name: form.login_usuario.value,
      last_name: form.login_apellido.value,
      email: form.login_email.value,
      password: form.login_contrasena.value,
      is_deleted: "0",
      created_at: Date.now(),
      updated_at: Date.now(),
    })
    .then(function (response) {
      console.log(response);
    });
}

// var xhr = new XMLHttpRequest();
// xhr.open("POST", "http://localhost:5000/api/v1/users/", true);
// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.send(
//   JSON.stringify({
//     first_name: "Paulo",
//     last_name: "Coehlo",
//     email: "pc@gmail.com",
//     password: "1234",
//     is_deleted: "0",
//     created_at: "2021-11-19 20:06:43",
//     updated_at: "2021-11-19 20:06:43",
//   })
// );

// getUsers();
// createUser();

// function grabData() {
//   let form = document.formulario;
//   console.log(form.login_usuario.value);
// }
createUser();
