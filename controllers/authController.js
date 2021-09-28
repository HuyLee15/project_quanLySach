const jwt = require("jsonwebtoken");

module.exports = {
    login: (req, res) => {
        const { username, password } = req.body;
        if (username === "admin" && password === "admin") {
            const token = jwt.sign({ role: "admin" }, process.env.TOKEN_SECRET, { expiresIn: 60 });
            return res.json({ token });
        }
        res.status(401).send();
    },
    authenticateToken: (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.status(401).send("chua nhap vao token");

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) return res.status(403).send("bug");
            req.user = user;
            next();
        })
    }
};

// module.exports = {
//     login: (req, res) => {
//         const username = req.body.username;
//         const user = { name: username };

//         const token = jwt.sign(user, process.env.TOKEN_SECRET);
//         res.json({ token });
//     },
//     authenticateToken: (req, res, next) => {
//         const authHeader = req.headers['authorization'];
//         const token = authHeader && authHeader.split(' ')[1];
//         if (token == null) return res.status(401).send("chua nhap vao token");

//         jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
//             if (err) return res.status(403).send("bug");
//             req.user = user;
//             next();
//         })
//     }
// }