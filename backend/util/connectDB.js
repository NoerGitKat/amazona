import mongoose from "mongoose";

const connectDB = async (config) => {
  try {
    await mongoose.connect(
      `mongodb+srv://${config.MONGODB_USER}:${config.MONGODB_PW}@amazona-db.qaflx.mongodb.net/amazona-db?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
    );

    console.log("DB is connected!");
  } catch (err) {
    console.log(err.message);
  }
};

export default connectDB;
