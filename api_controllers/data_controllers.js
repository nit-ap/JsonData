module.exports.data = function (req, res) {
    return res.status(200).json({
        "message": 'Hello from data'
    });
}