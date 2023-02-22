// api/contact
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const mongoDB = process.env.mongodb_password;
  const mongoDB_Client = `mongodb+srv://NEXTBLOG23:${mongoDB}@next-blog.ivj4ni4.mongodb.net/?retryWrites=true&w=majority`;

  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(404).json({ message: "Invalid Input!" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };
    console.log(newMessage);

    let client;
    try {
      client = await MongoClient.connect(mongoDB_Client);
    } catch (error) {
      res.status(404).json({ message: "Could not connect to database" });
      console.log(error.code, error.message);
      return;
    }

    const database = client.db();

    try {
      const result = await database
        .collection("messages")
        .insertOne(newMessage);

      newMessage.id = result.insertedId;
    } catch (error) {
      console.log(error.message);
      res.status(404).json({ message: "Problem Detected" });
      client.close();
      return;
    }

    client.close();

    res
      .status(201)
      .json({ warning: "Succesfully stored message!", message: newMessage });
  }
}
