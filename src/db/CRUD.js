import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: String,
    orgName: String,
    email: String,
});

const contact = mongoose.model.contact || mongoose.model("contact", contactSchema);

export async function updateData(name, orgName, email) {
    const newEntity = new contact({ name: name, orgName: orgName, email: email });
    await newEntity.save();
    console.log("✅ User saved");

    mongoose.disconnect();
};
