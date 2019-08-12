const Sticky = require('../models/Sticky');

module.exports = {
  async store( req, res ) {
    const { title, message } = req.body;

    const sticky = await Sticky.create({
      title,
      message,
    });

    return res.json( sticky );
  },

  async index( req, res ) {
    const stickys = await Sticky.find();

    return res.json( stickys );
  },

  async delete( req, res ) {
    const { id } = req.params;

    await Sticky.findByIdAndDelete( id );

    return res.json({ ok: true });
  }
}