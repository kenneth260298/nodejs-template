const generic = async (req, res) => {

    return res.status(400).json("Hello World")
};

module.exports = {
    generic
};