// https://api.unsplash.com/photos/?client_id=BtPzGeWswrZ-7rib9zpM5rhseaS_4mH2_5Ju1dHryCY

// call the api

const response = await fetch(
  "https://api.unsplash.com/photos/?client_id=BtPzGeWswrZ-7rib9zpM5rhseaS_4mH2_5Ju1dHryCY"
).then((res) =>
  res.json().then((data) => {
    console.log(data);
  })
);
