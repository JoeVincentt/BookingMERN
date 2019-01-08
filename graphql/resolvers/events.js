const { transformEvent } = require("./merge");
const Event = require("../../models/events");

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
  createEvent: async args => {
    const event = new Event({
      title: args.eventInput.title,
      description: args.eventInput.description,
      price: +args.eventInput.price,
      date: new Date(args.eventInput.date),
      creator: "5c2598295a7caa163cd6521b"
    });
    let createdEvent;
    try {
      const result = await event.save();
      createdEvent = transformEvent(result);
      const creatorUser = await User.findById("5c2598295a7caa163cd6521b");

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
