import cron from "node-cron";
import transporter from "./nodemailer.js"
import userModel from "../models/userModel.js";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected for reminders"))
.catch(err => console.error("❌ MongoDB connection error:", err));
// Schedule to run at 9:00 AM on the 5th of every month
cron.schedule("0 9 5 * *", async () => {
    console.log("📧 Sending monthly reminder email...");

    try {
        const users = await User.find({});
        if (!users.length) {
            console.log("⚠️ No users found to send reminders.");
            return;
        }

        for (let user of users) {
            await transporter.sendMail({
                from: '"Career Guide" <your-email@example.com>',
                to: user.email,
                subject: "Monthly IQ Test Reminder",
                text: `Hey ${user.name || "there"}! This is your monthly reminder to take the IQ test.`,
                html: `<h3>Hey ${user.name || "there"}!</h3><p>This is your monthly reminder to take the IQ test.</p>`
            });
            console.log(`✅ Reminder sent to: ${user.email}`);
        }
    } catch (error) {
        console.error("❌ Failed to send reminder emails:", error);
    }
});