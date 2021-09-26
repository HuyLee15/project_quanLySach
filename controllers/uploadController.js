exports.upload = async(req, res) => {
    try {
        res.send("Upload flie successfully");
        console.log(req.file);
    } catch (err) {
        res.json({ msg: err.message });
    }
};