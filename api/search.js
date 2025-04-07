const search = require('../utils/search');

module.exports = async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Missing query' });

  const results = await search(q);
  res.status(200).json(results);
};
