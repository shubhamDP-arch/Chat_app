import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,   
    ref: "User",
    required: true,
  },
  recipient: {
    type: Schema.Types.ObjectId,  
    ref: "User",                   
    required: true,
  },
  content: {
    type: String,
    required: [true, "Message content is required"],
    trim: true,
  },
  isRead: {
    type: Boolean,
    default: false, 
  },
  messageType: {
    type: String,
    enum: ["text", "image", "video", "file"],  
    default: "text",
  },
  attachments: [
    {
      type: String,                
    },
  ],
  /*conversationId: {
    type: Schema.Types.ObjectId,   
    ref: "Conversation",          
  },*/
}, { timestamps: true });          
export const Message = mongoose.model("Message", messageSchema);
