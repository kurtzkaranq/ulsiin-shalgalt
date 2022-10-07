const Lists = require("./Lists.model");
async function getLists(req, res, next) {
  try {
    const list = await Lists.find({});
    res.json({
      lists: list,
    });
  } catch (error) {
    console.error(error);
  }
}
async function postLists(req, res, next) {
  console.log(req.body);
  try {
    const body = req.body;
    const book = new Lists(body);
    await book.save();
    res.json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,

    });
  }
}
async function deleteList(req, res, next) {
  try {
    const { id } = req.params;
    await Lists.findByIdAndDelete(id);
    res.json({
      message: "deleted succesfully",
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getLists, postLists, deleteList };
