import { Document, Schema, model, models } from "mongoose";

// Define the User interface
interface IUser extends Document {
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	interest: string;
	message?: string;
}

const UserSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		interest: {
			type: String,
			required: true,
		},
		mesasge: {
			type: String,
		},
	},
	{ timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
