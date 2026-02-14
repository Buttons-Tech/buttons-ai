// models/Lead.ts
import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: false }, // Captured during waitlist
  serviceInterested: { type: String, required: false }, // e.g., "Gas", "Cash"
  userThought: { type: String, required: false }, // From the pop-up
  location: { type: String, default: "[Road Name]" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema);