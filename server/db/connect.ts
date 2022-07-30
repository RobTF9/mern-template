import mongoose from "mongoose";

const connect = (): void => {
  if (typeof process.env.MONGO_DB === "string") {
    console.log("Connecting to database...");

    mongoose.connect(process.env.MONGO_DB);
    mongoose.connection.on("connected", () =>
      console.log("Connected to database")
    );
  } else {
    console.log("Not database connection string");
  }
};

export default connect;
