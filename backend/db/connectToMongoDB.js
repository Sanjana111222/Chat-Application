import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		const { connection } = await mongoose.connect(process.env.MONGO_DB_URI  || `mongodb://127.0.0.1:27017/Chatapp1`);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
