import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://shaswatsingh1411:sc141405@ac-jfu1min-shard-00-00.jze9iq6.mongodb.net:27017,ac-jfu1min-shard-00-01.jze9iq6.mongodb.net:27017,ac-jfu1min-shard-00-02.jze9iq6.mongodb.net:27017/?ssl=true&replicaSet=atlas-2cdstp-shard-0&authSource=admin&retryWrites=true&w=majority");
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
