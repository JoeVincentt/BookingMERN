const authResolver = require("./auth");
const eventsResolver = require("./events");
const bookingResolver = require("./booking");

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...bookingResolver
};

module.exports = rootResolver;

// const bcrypt = require("bcryptjs");

// const Event = require("../../models/events");
// const User = require("../../models/user");
// const Booking = require("../../models/booking");
// const { dateToString } = require("../../helpers/date");

// const transformEvent = event => {
//   return {
//     ...event._doc,
//     _id: event.id,
//     date: dateToString(event._doc.date),
//     creator: user.bind(this, event.creator)
//   };
// };

// const transformBooking = booking => {
//   return {
//     ...booking._doc,
//     _id: booking.id,
//     user: user.bind(this, booking._doc.user),
//     event: singleEvent.bind(this, booking._doc.event),
//     createdAt: dateToString(booking._doc.createdAt),
//     updatedAt: dateToString(booking._doc.updatedAt)
//   };
// };

// const events = async eventIds => {
//   try {
//     const events = await Event.find({ _id: { $in: eventIds } });
//     return events.map(event => {
//       return transformEvent(event);
//     });
//   } catch (err) {
//     throw err;
//   }
// };

// const singleEvent = async eventId => {
//   try {
//     const event = await Event.findById(eventId);
//     return transformEvent(event);
//   } catch (err) {
//     throw err;
//   }
// };

// const user = async userId => {
//   try {
//     const user = await User.findById(userId);
//     return {
//       ...user._doc,
//       _id: user.id,
//       createdEvents: events.bind(this, user._doc.createdEvents)
//     };
//   } catch (err) {
//     throw err;
//   }
// };

// module.exports = {
//   events: async () => {
//     try {
//       const events = await Event.find();
//       return events.map(event => {
//         //convert _id from Mongo to string
//         return transformEvent(event);
//       });
//     } catch (err) {
//       throw err;
//     }
//   },

//   bookings: async () => {
//     try {
//       const bookings = await Booking.find();
//       return bookings.map(booking => {
//         return transformBooking(booking);
//       });
//     } catch (err) {
//       throw err;
//     }
//   },

//   createEvent: async args => {
//     const event = new Event({
//       title: args.eventInput.title,
//       description: args.eventInput.description,
//       price: +args.eventInput.price,
//       date: new Date(args.eventInput.date),
//       creator: "5c2598295a7caa163cd6521b"
//     });
//     let createdEvent;
//     try {
//       const result = await event.save();
//       createdEvent = transformEvent(result);
//       const creatorUser = await User.findById("5c2598295a7caa163cd6521b");

//       if (!creatorUser) {
//         throw new Error("No Users Found.");
//       }
//       creatorUser.createdEvents.push(event);
//       await creatorUser.save();
//       return createdEvent;
//     } catch (err) {
//       throw err;
//     }
//   },
//   createUser: async args => {
//     try {
//       const existingUser = await User.findOne({ email: args.userInput.email });

//       if (existingUser) {
//         throw new Error("User exists already.");
//       }
//       const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
//       const user = new User({
//         email: args.userInput.email,
//         password: hashedPassword
//       });
//       const result = await user.save();
//       return { ...result._doc, password: null, _id: result.id };
//     } catch (err) {
//       throw err;
//     }
//   },
//   bookEvent: async args => {
//     const fetchedEvent = await Event.findOne({ _id: args.eventId });
//     const booking = new Booking({
//       user: "5c2598295a7caa163cd6521b",
//       event: fetchedEvent
//     });
//     const result = await booking.save();
//     return transformBooking(result);
//   },
//   cancelBooking: async args => {
//     try {
//       const booking = await Booking.findById(args.bookingId).populate("event");
//       const event = transformEvent(booking.event);
//       await Booking.deleteOne({ _id: args.bookingId });
//       return event;
//     } catch (err) {
//       throw err;
//     }
//   }
// };
