const download = require('../utils/download');

module.exports = async (req, res) => {
  const { link } = req.query;
  if (!link) return res.status(400).json({ error: 'Missing link' });

  const result = await download(link);
  res.status(200).json({ url: result });
};
