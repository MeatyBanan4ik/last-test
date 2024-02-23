/**
 * external libs
 */
import { Schema, model } from 'mongoose';

const schema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		assignee: { type: String, required: true },
		dueDate: { type: Date, required: true },
		status: { type: String, required: true },
	},
	{
		timestamps: true,
	},
);

export default model('Task', schema);
