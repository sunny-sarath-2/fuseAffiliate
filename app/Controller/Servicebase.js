let url = "http://13.126.72.94:1337";
getServiceCall = api =>
  new Promise((resolve, rejects) => {
    fetch(url + api).then(result => {
      resolve(result.json());
    });
  });
postServiceCall = (api, data) =>
  new Promise((resolve, rejects) => {
    fetch(url + api, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(result => {
      resolve(result.json());
    });
  });
