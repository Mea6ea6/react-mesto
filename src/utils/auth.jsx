const baseUrl = "https://auth.nomoreparties.co";

function checkResponse(res) {
  return res.ok ? res.json() : res.json().then((errData) => Promise.reject(errData));
}

export function register(email, password) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      password: password,
      email: email
    }),
  })
    .then(checkResponse)
    .then((res) => {
      return res;
    })
};

// export function authorize(email, password) {
//   return fetch(`${baseUrl}/signin`, {
//     method: "POST",
//     headers: {
//       "Accept": "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       password: password,
//       email: email
//     })
//   })
//     .then(checkResponse)
// };