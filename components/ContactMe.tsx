"use client";

import { contact } from "@/constants";
import { Irish_Grover } from "next/font/google";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "./ui/textarea";
import { Spotlight } from "./ui/spotlight";

import emailjs from "@emailjs/browser";

const FormSchema = z.object({
	firstName: z.string().min(2, {
		message: "First name must be at least 3 characters.",
	}),
	lastName: z.string().min(2, {
		message: "Last name must be at least 3 characters.",
	}),
	email: z.string().email({ message: "Email is required" }),
	subject: z.string().min(2, { message: "Subject is required!" }),
	message: z.string().optional(),
});

const irishGrover = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

const ContactMe = () => {
	const { toast } = useToast();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		const formDetails = {
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			subject: data.subject,
			message: data.message,
		};

		try {
			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				formDetails,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
			);
			toast({
				title: "Success!",
				description:
					"Your message has been sent successfully! I will get back to you within the next 24 hours.",
			});
		} catch (error: any) {
			toast({
				title: "Error!",
				description:
					"An error occurred! Your message couldn't successfully send. Please reach out to me via email or phone number.",
			});
		}
	}

	return (
		<div id="contact" className="container py-10 relative">
			<Spotlight
				className="-top-5 left-10 md:left-30 md:-top-10"
				fill="#5795de"
			/>
			<h3
				className={`uppercase ${irishGrover.className} text-center text-2xl sm:text-3xl md:text-4xl text-purple-500 mb-4`}
			>
				Interested in working with me?
			</h3>
			<p className="text-sm md:text-base text-center">
				I&apos;m always willing to talk about product design and
				development work as well as partnership opportunities.
			</p>
			<div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{contact.map((contact, index) => {
					const Icon = contact.icon;
					return (
						<div
							className="rounded-md p-3 lg:p-8 border-2 border-purple-500 border-dashed"
							key={index}
						>
							<div className="p-4 rounded-md border border-dashed border-purple-500 inline-block bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50">
								<Icon className="text-purple-500" />
							</div>
							<div className="space-y-4 mt-4">
								<h3 className="text-base font-bold">
									{contact.title}
								</h3>
								<a
									href={contact.name}
									target="_blank"
									className="font-bold text-sm underline hover:text-purple-500 transition"
								>
									{contact.name}
								</a>
							</div>
						</div>
					);
				})}
			</div>
			<div>
				<h3
					className={`uppercase ${irishGrover.className} text-center text-2xl sm:text-3xl md:text-4xl text-purple-500 pt-16 mb-2`}
				>
					Message me
				</h3>
				<p className="text-sm md:text-base text-center">
					I&apos;ll get back to you within 24 hours
				</p>
				<div className="mt-6">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-6"
						>
							<div className="grid gap-4 grid-cols-1 md:grid-cols-2">
								<FormField
									control={form.control}
									name="firstName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>First name</FormLabel>
											<FormControl>
												<Input
													placeholder="Enter your first name"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="lastName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Last name</FormLabel>
											<FormControl>
												<Input
													placeholder="Enter your last name"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter your email"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="subject"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Subject</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter the subject of your message"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Message</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Type your message here."
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								disabled={form.formState.isSubmitting}
								className="w-full md:w-auto"
								type="submit"
							>
								{form.formState.isSubmitting
									? "Submitting"
									: "Submit"}
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
