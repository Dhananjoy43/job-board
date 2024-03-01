import { Router } from "express";
import bodyParser from "body-parser";
import { Webhook } from "svix"
import { User } from "../models/user.model.js";


const router = Router();

router.route("/").post(
    bodyParser.raw({ type: "application/json" }),
    async function (req, res) {
        try {
            const payloadString = req.body.toString();
            const svixHeaders = req.headers;

            const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY);
            const evt = wh.verify(payloadString, svixHeaders);

            const { id, ...attributes } = evt.data;

            const eventType = evt.type;

            if (eventType === 'user.created') {
                const firstName = attributes.first_name;
                const lastName = attributes.last_name;

                const user = new User({
                    clerkUserId: id,
                    firstName: firstName,
                    lastName: lastName,
                });

                await user.save();
                console.log('User is created');
            }

            res.status(200).json({
                success: true,
                message: 'Webhook received',
            });
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err.message,
            });
        }
    }
);

export default router;