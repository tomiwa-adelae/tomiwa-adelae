"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Irish_Grover } from "next/font/google";
const irishGrover = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

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
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { interestedFields } from "@/constants";
import { registerUser } from "../../../lib/actions/user.actions";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
	firstName: z.string().min(2, {
		message: "First name must be at least 2 characters.",
	}),
	lastName: z.string().min(2, {
		message: "First name must be at least 2 characters.",
	}),
	email: z.string().email(),
	phoneNumber: z
		.string()
		.min(10, {
			message: "Phone number must be at least 10 characters.",
		})
		.max(11, { message: "Phone number must be valid." }),
	interest: z.string().min(2, {
		message: "You must select an interested field.",
	}),
	message: z.string().optional(),
});

export function RegistrationForm() {

	const router = useRouter()

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			interest: "",
			message: "",
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		try {
			const user = {
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				phoneNumber: data.phoneNumber,
				interest: data.interest,
				message: data.message,
			};
			await registerUser(user);
			toast({
				title: "Success!",
				description:
					"Your registration has been sent successfully! I will get back to you within the next 24 hours.",
			});
			router.push('/success')
		} catch (error) {
			toast({
				title: "Error!",
				description:
					"An error occurred! Your message couldn't successfully send. Please reach out to me via email or phone number.",
			});
			router.push('/error')
		}
	}

	return (
		<div className="py-10 container">
			<h3
				className={`uppercase ${irishGrover.className} text-center text-2xl sm:text-3xl md:text-4xl text-purple-500 mb-4`}
			>
				Register to get started
			</h3>
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
									type='email'
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
						name="phoneNumber"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone number</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter your phone number"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="interest"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Interest</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select your interest" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{interestedFields.map(
											(field, index) => (
												<SelectItem
													key={index}
													value={field}
												>
													{field}
												</SelectItem>
											)
										)}
									</SelectContent>
								</Select>
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
						{form.formState.isSubmitting ? "Submitting" : "Submit"}
					</Button>
				</form>
			</Form>
		</div>
	);
}
