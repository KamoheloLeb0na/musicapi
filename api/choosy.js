const choosy = require('../utils/choosy');

module.exports = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'Missing URL' });

  const results = await choosy(url);
  res.status(200).json(results);
};
