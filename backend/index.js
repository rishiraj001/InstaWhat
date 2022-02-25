const express = require("express");
const app = express();

app.get("/posts", (request, response) =>{
    let posts = [
        {
            caption: "Golden Gate",
            location: 'San Frransico'
        },
        {
            caption: "Golden Gate",
            location: 'San Frransico'
        }
    ]
    response.send(posts);
})

app.listen(3000, () => {
  console.log(`Listening on PORT 3000`);
});
