const { transformEvent } = require("./merge");
const Event = require("../../models/events");
const User = require("../../models/user");

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map(event => {
        //convert _id from Mongo to string
        return transformEvent(event);
      });
    } catch (err) {
      throw err;
    }
  },
  createEvent: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Not Authorized User");
    }
    const event = new Event({
      title: args.eventInput.title,
      description: args.eventInput.description,
      price: +args.eventInput.price,
      date: new Date(args.eventInput.date),
      creator: req.userId
    });
    let createdEvent;
    try {
      const result = await event.save();
      createdEvent = transformEvent(result);
      const creatorUser = await User.findById(req.userId);

      if (!creatorUser) {
        throw new Error("No Users Found.");
      }
      creatorUser.createdEvents.push(event);
      await creatorUser.save();
      return createdEvent;
    } catch (err) {
      throw err;
    }
  }
};
