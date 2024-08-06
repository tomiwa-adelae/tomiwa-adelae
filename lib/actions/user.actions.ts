"use server";

import { connectToDatabase } from "../database";
import User from "../database/models/user.model";

import Mailjet from "node-mailjet";

const mailjet = Mailjet.apiConnect(
	process.env.MAILJET_API_PUBLIC_KEY!,
	process.env.MAILJET_API_PRIVATE_KEY!
);

export async function registerUser(user: {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	interest: string;
	message?: string;
}) {
	try {
		await connectToDatabase();

		const newUser = await User.create(user);

		if (newUser) {
			const request = mailjet.post("send", { version: "v3.1" }).request({
				Messages: [
					{
						From: {
							Email: `${process.env.TOMIWAADELAE_SENDER_EMAIL_ADDRESS}`,
							Name: `${process.env.COMPANY_NAME}`,
						},
						To: [
							{
								Email: `${newUser.email}`,
								Name: `${newUser.firstName}`,
							},
						],
						Subject: `Welcome to ${newUser.interest}`,
						TextPart: `Successful registration for ${newUser.interest}`,
						HTMLPart: `<div
										style="
											font-family: Montserrat, sans-serif;
											font-size: 15px;
											padding: 2rem;
										"
									>
										<h2>Dear, ${newUser.firstName}</h2>

										<p>Welcome to ${process.env.COMPANY_NAME}</p>

										<p>Thank you for registering for our ${newUser.interest} 101 program! We are thrilled to have you on board and can't wait to help you start your journey into the world of web development.</p>

										<h1>Ready to go?</h1>
										<p>Great! You can start your application by sending a chat or phone call to ${process.env.COMPANY_NUMBER}. Our lovely team would place a call to you within the next 24 hours and inform you about the program more in-depth.</p>

										<h1>Support</h1>
										<p>If you have any questions or need assistance, our support team is here to help. Feel free to reach out to us at ${process.env.TOMIWAADELAE_ADMIN_EMAIL_ADDRESS} or visit our Help Center for FAQs and more.</p>

										<h1>Feedback</h1>
										<p>We value your feedback. Once you’ve completed the course, please take a moment to rate and review it. Your insights help us improve and provide the best learning experience for everyone.</p>

										<p>Thank you for choosing ${process.env.COMPANY_NAME} for your learning needs. We’re excited to see you grow your skills and knowledge with us.</p>

										<p>Happy learning😁</p>
										<p>Best regards,</p>
										<p>${process.env.COMPANY_NAME} Team</p>
										<p>&copy; 2024 ${process.env.COMPANY_NAME}. All Rights Reserved</p>
									</div>
							`,
					},
				],
			});

			// TOMIWAADELAE admin email format
			const requestAdmin = mailjet
				.post("send", { version: "v3.1" })
				.request({
					Messages: [
						{
							From: {
								Email: `${process.env.TOMIWAADELAE_SENDER_EMAIL_ADDRESS}`,
								Name: `${process.env.COMPANY_NAME}`,
							},
							To: [
								{
									Email: `${process.env.TOMIWAADELAE_ADMIN_EMAIL_ADDRESS}`,
									Name: `${process.env.COMPANY_NAME}`,
								},
							],
							Subject: `New Registration Alert: ${newUser.interest}`,
							TextPart: `New registration for ${newUser.interest}`,
							HTMLPart: `<div
									style="
										font-family: Montserrat, sans-serif;
										font-size: 15px;
										padding: 2rem;
									"
								>
									<h2>Dear, ${process.env.COMPANY_NAME}</h2>

									<p>We have a new student registration for the ${newUser.interest} program! Please find the details of the new registrant below:</p>

									<strong>
									Student Information:
		                            </strong>

									<ul>
		                                <li>
		                                    <strong>First name:</strong> ${newUser.firstName}
		                                </li>
		                                <li>
		                                    <strong>Last name:</strong> ${newUser.lastName}
		                                </li>
		                                <li>
		                                    <strong>Email address:</strong> ${newUser.email}
		                                </li>
		                                <li>
		                                    <strong>Phone number:</strong> ${newUser.phoneNumber}
		                                </li>
		                                <li>
		                                    <strong>Field of interest:</strong> ${newUser.interest}
		                                </li>
		                                <li>
		                                    <strong>Message:</strong> ${newUser.message}
		                                </li>
		                            </ul>

									<p>This registration indicates our ongoing growth and the increasing interest in our courses. Please ensure that all necessary resources and support are available for the new student to have a smooth and enriching learning experience.</p>

									<p>Thank you for your attention to this matter.</p>

									<p>Best regards,</p>
									<p>${process.env.COMPANY_NAME} Team</p>
									<p>&copy; 2024 ${process.env.COMPANY_NAME}. All Rights Reserved</p>
								</div>
						`,
						},
					],
				});

			// Send email
			request
				.then(() => console.log("User sent"))
				.catch((err: any) => {
					return err;
				});

			requestAdmin
				.then(() => {
					console.log("Admin sent");
					return JSON.parse(JSON.stringify(newUser));
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			console.log("An error occurred!");
		}
	} catch (error) {
		console.log(error);
	}
}
