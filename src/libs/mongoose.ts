import moongose from "mongoose";

export async function getConnection() {
  try {
    await moongose.connect("mongodb://localhost:27017/honodb");
    console.log("MongoDB is connected successfully");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
