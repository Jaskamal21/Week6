const getRoot = (req, res) => {
    res.json({ message: "Hello World! /" });
  };
  
  module.exports = { getRoot };