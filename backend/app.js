import express from 'express';
import bodyParser from 'body-parser';

export const app = express();

// app.use((req, res, next) => {
//     console.log("First Middleware");
//     next();
// });

// app.use((req, res, next) => {
//     res.send("Hello from express!");
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, PUT, OPTIONS"
    );
    next();
});

app.get("/api/posts", (req, res, next) => {
    const posts = [
        {
            id: "fadf12421l", 
            title: "First Server-Side Post", 
            content: "This is coming from the server!"
        },
        {
            id: "ksajflaj123", 
            title: "Second Server-Side Post", 
            content: "This is coming from the server!"
        }
    ];

    res.status(200).json({
        message: "Posts fetched successfully!",
        posts: posts
    });
});

app.post("/api/posts", (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: "Post Added Successfully!"
    });
});