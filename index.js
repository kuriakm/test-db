const mongoose = require("mongoose");

//testdb is name of database, it will automatically make it
mongoose
  .connect(
    "mongodb+srv://kuriakm:AUUa6xtuFQhC@pixel-renaissance-db.ko8ugc7.mongodb.net/?retryWrites=true&w=majority&appName=pixel-renaissance-db"
  )
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.error("could not connect ot mongodb...", err));

const schema = new mongoose.Schema({
  name: String,
});

async function createMessage() {
  const result = await message.save();
  console.log(result);
}

//this creates a Message class in our app
const Message = mongoose.model("Message", schema);
const message = new Message({
  name: "Marshall K.",
});

createMessage();
