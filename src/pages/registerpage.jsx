import {
	Box,
	Flex,
	Image,
	Icon,
	Center,
	Input,
	Checkbox,
	InputGroup,
	InputRightElement,
	Select,
} from "@chakra-ui/react";
import logo from "../assets/spotify-logo2.png";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { TbAlertCircleFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth_types } from "../redux/types";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import axios from "axios";

export default function RegisterPage() {
	const [account, setAccount] = useState({ email: "", password: "" });
	const [seePassword, setSeePassword] = useState(false);
	const nav = useNavigate();
	const dispatch = useDispatch();
	const month = [
		{ name: "January", number: 1 },
		{ name: "February", number: 2 },
		{ name: "March", number: 3 },
		{ name: "April", number: 4 },
		{ name: "May", number: 5 },
		{ name: "June", number: 6 },
		{ name: "July", number: 7 },
		{ name: "August", number: 8 },
		{ name: "September", number: 9 },
		{ name: "October", number: 10 },
		{ name: "November", number: 11 },
		{ name: "December", number: 12 },
	];
	YupPassword(Yup);
	const formik = useFormik({
		initialValues: {
			email: "",
			email2: "",
			password: "",
			name: "",
			day: "",
			month: "",
			year: "",
			gender: "",
		},
		validationSchema: Yup.object().shape({
			email: Yup.string()
				.required("You need to enter your email.")
				.email(
					"This email is invalid. Make sure it's written like example@email.com"
				),
			email2: Yup.string()
				.required("You need to enter your email.")
				.oneOf(
					[Yup.ref("email"), null],
					"The email addresses don't match."
				),
			password: Yup.string().min(8, "Your password is too short."),
			name: Yup.string().required("Enter a name for your profile."),
			day: Yup.number("Enter a valid day of the month")
				.moreThan(0, "Enter a valid day of the month")
				.lessThan(32, "Enter a valid day of the month"),
			month: Yup.number().required("Select your birth month."),
			year: Yup.number()
				.required("Enter a valid year")
				.moreThan(1930, "Enter a valid year"),
		}),
		onSubmit: async () => {
			const { email, name, password, year, month, day } = formik.values;
			const account = { email, name, password };
			account.birthdate = new Date(year, month, day);
			const checkEmail = await axios
				.get("http://localhost:2000/user", {
					params: { email: account.email },
				})
				.then((res) => {
					if (res.data.length) {
						return true;
					} else {
						return false;
					}
				});
			console.log(formik.values);
			console.log(formik.values.email);
			console.log("Hello world");

			if (checkEmail) {
				alert("Email has been used");
			} else {
				await axios
					.post("http://localhost:2000/user", account)
					.then((res) => {
						nav("/login");
					});
			}
		},
	});

	// useEffect(() => {
	// 	// FUNCTION WILL EXECUTE HERE
	// 	const user = JSON.parse(localStorage.getItem("user"));
	// 	if (user?.email) {
	// 		nav("/");
	// 	}
	// }, []);

	// function inputHandler(event) {
	// 	const { value, id } = event.target;
	// 	const tempAccount = { ...account };
	// 	tempAccount[id] = value;
	// 	setAccount(tempAccount);
	// }

	function inputHandler(event) {
		const { value, id } = event.target;
		formik.setFieldValue(id, value);
	}

	// function login() {
	// 	dispatch({
	// 		type: auth_types.login,
	// 		payload: account,
	// 	});
	// 	localStorage.setItem("user", JSON.stringify(account));
	// 	nav("/");
	// }

	return (
		<Center
			display={"flex"}
			flexDir={"column"}
			fontFamily={"CircularStd, sans-serif"}
			fontSize={"14px"}
			paddingX={"24px"}
			marginBottom={"20vh"}
		>
			<Center paddingTop={"40px"} paddingBottom={"25px"} w={"100%"}>
				<Image src={logo} h={"27px"}></Image>
			</Center>
			<Center>
				<Center
					w={"450px"}
					maxW={"450px"}
					display={"flex"}
					flexDirection={"column"}
					gap={"10px"}
				>
					<Box
						width={"450px"}
						textAlign={"center"}
						fontFamily={"CircularStd, sans-serif"}
						fontWeight={"700"}
						fontSize={"1.8rem"}
						color={"black"}
						paddingBottom={"25px"}
						paddingTop={"10px"}
						letterSpacing={"-2"}
					>
						Sign up for free to start listening.
					</Box>
					<Center
						w={"354px"}
						bgColor={"#425b90"}
						h={"48px"}
						fontWeight={"700"}
						borderRadius={"25px"}
						gap={"10px"}
						border={"2px solid #6A6A6A"}
						color={"white"}
						cursor={"pointer"}
						fontSize={"16px"}
						padding={"0 48px"}
						marginBottom={"10px"}
						className="ihoverbig"
					>
						<Icon w={"20px"} h={"20px"} as={BsFacebook}></Icon> Sign
						up with Facebook
					</Center>

					<Center
						w={"354px"}
						bgColor={"white"}
						h={"48px"}
						fontWeight={"700"}
						borderRadius={"25px"}
						gap={"10px"}
						border={"2px solid #6A6A6A"}
						color={"#6A6A6A"}
						cursor={"pointer"}
						fontSize={"16px"}
						padding={"0 48px"}
						className="ihoverbig"
					>
						<Icon w={"20px"} h={"20px"} as={FcGoogle}></Icon> Sign
						up with Google
					</Center>
				</Center>
			</Center>

			<Flex
				w={"380px"}
				h={"20px"}
				marginTop={"25px"}
				alignItems={"center"}
			>
				<Box w={"100%"} backgroundColor={"grey"} h={"1px"}></Box>
				<Box
					padding={"0 10px"}
					fontSize={"16px"}
					color={"#6A6A6A"}
					height={"fit-content"}
				>
					or
				</Box>
				<Box w={"100%"} backgroundColor={"grey"} h={"1px"}></Box>
			</Flex>

			<Box
				width={"450px"}
				textAlign={"left"}
				paddingBottom={"5px"}
				fontWeight={"bold"}
				marginTop={"15px"}
			>
				What's your email?
			</Box>
			<Input
				w={"450px"}
				maxW={"450px"}
				h={"48px"}
				border={"1px solid black"}
				borderRadius={"5px"}
				placeholder="Enter your email."
				marginBottom={"10px"}
				id="email"
				borderColor={formik.errors.email ? "red" : "grey"}
				onChange={inputHandler}
			></Input>

			<Flex
				color={"#D31125"}
				gap={"6px"}
				flexDirection={"row"}
				w={"450px"}
				alignItems={"center"}
				display={formik.errors.email ? "Flex" : "none"}
			>
				<Icon as={TbAlertCircleFilled} w={"19px"} h={"19px"}></Icon>
				{formik.errors.email}
			</Flex>

			<Box textAlign={"left"} width={"450px"} textDecor={"underline"}>
				<a href="#" className="isplink">
					Use phone number instead
				</a>
			</Box>
			<Box
				width={"450px"}
				textAlign={"left"}
				paddingBottom={"5px"}
				fontWeight={"bold"}
				marginTop={"20px"}
			>
				Confirm your email
			</Box>
			<Input
				w={"450px"}
				maxW={"450px"}
				h={"48px"}
				border={"1px solid black"}
				borderRadius={"5px"}
				placeholder="Enter your email again."
				marginBottom={"10px"}
				id="email2"
				onChange={inputHandler}
			></Input>
			<Flex
				color={"#D31125"}
				gap={"6px"}
				flexDirection={"row"}
				w={"450px"}
				alignItems={"center"}
				display={formik.errors.email2 ? "Flex" : "none"}
			>
				<Icon as={TbAlertCircleFilled} w={"19px"} h={"19px"}></Icon>
				{formik.errors.email2}
			</Flex>

			<Box
				width={"450px"}
				textAlign={"left"}
				paddingBottom={"5px"}
				fontWeight={"bold"}
				marginTop={"15px"}
			>
				Create a password
			</Box>
			<InputGroup
				w={"450px"}
				maxW={"450px"}
				h={"48px"}
				marginBottom={"10px"}
			>
				<Input
					w={"450px"}
					maxW={"450px"}
					h={"48px"}
					border={"1px solid black"}
					borderRadius={"5px"}
					placeholder="Create a password."
					marginBottom={"10px"}
					type={!seePassword ? "password" : "text"}
					id="password"
					onChange={inputHandler}
				/>
				<InputRightElement h={"100%"}>
					<Icon
						w={"25px"}
						h={"25px"}
						color={"grey"}
						as={!seePassword ? AiOutlineEyeInvisible : AiOutlineEye}
						cursor={"pointer"}
						onClick={() => setSeePassword(!seePassword)}
					></Icon>
				</InputRightElement>
			</InputGroup>

			<Flex
				color={"#D31125"}
				gap={"6px"}
				flexDirection={"row"}
				w={"450px"}
				alignItems={"center"}
				display={formik.errors.password ? "Flex" : "none"}
			>
				<Icon as={TbAlertCircleFilled} w={"19px"} h={"19px"}></Icon>
				{formik.errors.password}
			</Flex>

			<Box
				width={"450px"}
				textAlign={"left"}
				paddingBottom={"5px"}
				fontWeight={"bold"}
				marginTop={"15px"}
			>
				What should we call you?
			</Box>
			<Input
				w={"450px"}
				maxW={"450px"}
				h={"48px"}
				border={"1px solid black"}
				borderRadius={"5px"}
				placeholder="Enter a profile name."
				marginBottom={"10px"}
				id="name"
				onChange={inputHandler}
			></Input>

			<Flex
				color={"#D31125"}
				gap={"6px"}
				flexDirection={"row"}
				w={"450px"}
				alignItems={"center"}
				display={formik.errors.name ? "Flex" : "none"}
			>
				<Icon as={TbAlertCircleFilled} w={"19px"} h={"19px"}></Icon>
				{formik.errors.name}
			</Flex>

			<Box
				width={"450px"}
				textAlign={"left"}
				paddingBottom={"5px"}
				fontWeight={"bold"}
				marginTop={"20px"}
			>
				What's your date of birth?
			</Box>
			<Flex
				justifyContent={"space-between"}
				// gap={"20px"}
				maxW={"450px"}
				w={"450px"}
			>
				<label>
					Day <br />
					<Input
						maxW={"90px"}
						h={"48px"}
						border={"1px solid black"}
						borderRadius={"5px"}
						placeholder="DD"
						marginBottom={"10px"}
						id="day"
						onChange={inputHandler}
					></Input>
				</label>

				<label>
					Month <br />
					<Select
						placeholder="Month"
						id="month"
						h={"48px"}
						w={"200px"}
						color={"#718096"}
						border={"1px solid black"}
					>
						{month.map((val) => (
							<option value={val.number}> {val.name}</option>
						))}
					</Select>
				</label>

				<label>
					Year <br />
					<Input
						maxW={"112px"}
						h={"48px"}
						border={"1px solid black"}
						borderRadius={"5px"}
						placeholder="YYYY"
						marginBottom={"10px"}
						id="year"
						onChange={inputHandler}
					></Input>
				</label>
			</Flex>

			<Flex
				color={"#D31125"}
				gap={"6px"}
				flexDirection={"row"}
				w={"450px"}
				alignItems={"center"}
				display={formik.errors.day ? "Flex" : "none"}
			>
				<Icon as={TbAlertCircleFilled} w={"19px"} h={"19px"}></Icon>
				{formik.errors.day}
			</Flex>

			<Flex
				color={"#D31125"}
				gap={"6px"}
				flexDirection={"row"}
				w={"450px"}
				alignItems={"center"}
				display={formik.errors.month ? "Flex" : "none"}
			>
				<Icon as={TbAlertCircleFilled} w={"19px"} h={"19px"}></Icon>
				{formik.errors.month}
			</Flex>

			<Flex
				color={"#D31125"}
				gap={"6px"}
				flexDirection={"row"}
				w={"450px"}
				alignItems={"center"}
				display={formik.errors.year ? "Flex" : "none"}
			>
				<Icon as={TbAlertCircleFilled} w={"19px"} h={"19px"}></Icon>
				{formik.errors.year}
			</Flex>

			<Box
				width={"450px"}
				textAlign={"left"}
				paddingBottom={"5px"}
				fontWeight={"bold"}
				marginTop={"15px"}
			>
				What's your gender?
			</Box>
			<Flex width={"450px"} wrap={"wrap"} marginBottom={"24px"}>
				<Flex h={"32px"} w={"fit-content"} alignItems={"center"}>
					<Radio colorScheme="green" />
					<Box className="igender">Male</Box>
				</Flex>
				<Flex h={"32px"} w={"fit-content"} alignItems={"center"}>
					<Radio colorScheme="green" />
					<Box className="igender">Female</Box>
				</Flex>
				<Flex h={"32px"} w={"fit-content"} alignItems={"center"}>
					<Radio colorScheme="green" />
					<Box className="igender">Non-binary</Box>
				</Flex>
				<Flex h={"32px"} w={"fit-content"} alignItems={"center"}>
					<Radio colorScheme="green" />
					<Box className="igender">Other</Box>
				</Flex>
				<Flex h={"32px"} w={"fit-content"} alignItems={"center"}>
					<Radio colorScheme="green" />
					<Box className="igender">Prefer not to say</Box>
				</Flex>
			</Flex>

			{/* <Flex
				maxW={"450px"}
				h={"fit-content"}
				wrap={"wrap"}
				marginBottom={"20px"}
			>
				<RadioGroup onChange={setRadio} value={radio}>
					<Stack
						height={"58px"}
						direction="row"
						// spacing={5}
						// gap={"10px"}
						maxWidth={"450px"}
						justifyContent={"flex-start"}
						flexWrap={"wrap"}
					>
						<Radio
							value="1"
							size={"sm"}
							colorScheme="green"
							paddingRight={"24px"}
						>
							Male
						</Radio>
						<Radio
							value="2"
							size={"sm"}
							colorScheme="green"
							paddingRight={"24px"}
						>
							Female
						</Radio>
						<Radio
							value="3"
							size={"sm"}
							colorScheme="green"
							paddingRight={"24px"}
						>
							Non-Binary
						</Radio>
						<Radio
							value="4"
							size={"sm"}
							colorScheme="green"
							paddingRight={"10px"}
						>
							Other
						</Radio>

						<Radio
							value="5"
							size={"sm"}
							colorScheme="green"
							position={"relative"}
							left={"-9px"}
						>
							Prefer not to say
						</Radio>
					</Stack>
				</RadioGroup>
			</Flex> */}
			<Flex
				width={"450px"}
				wrap={"wrap"}
				marginBottom={"24px"}
				fontSize={"14px"}
			>
				<Flex
					h={"32px"}
					w={"fit-content"}
					alignItems={"center"}
					fontSize={"14px"}
				>
					<Checkbox colorScheme="green" />
					<Box padding={"0 0 0 12px"}>
						I would prefer not to receive marketing messages from
						Spotify.
					</Box>
				</Flex>
			</Flex>

			<Flex
				width={"450px"}
				wrap={"wrap"}
				marginBottom={"24px"}
				fontSize={"14px"}
			>
				<Flex
					h={"32px"}
					w={"fit-content"}
					alignItems={"center"}
					fontSize={"14px"}
				>
					<Box h={"100%"}>
						<Checkbox colorScheme="green" />
					</Box>
					<Box padding={"0 0 0 12px"}>
						Share my registration data with Spotify's content
						providers for marketing purposes.
					</Box>
				</Flex>
			</Flex>

			<Box
				textAlign={"center"}
				width={"450px"}
				fontSize={"11px"}
				lineHeight={"2"}
				paddingBottom={"20px"}
			>
				By clicking on sign-up, you agree to Spotify's{" "}
				<a href="#" className="isplink">
					Terms and Conditions of Use
				</a>
				. <br /> By clicking on sign-up, you agree to the{" "}
				<a href="#" className="isplink">
					Spotify Privacy Policy
				</a>
				.
			</Box>

			<Box
				w={"165px"}
				maxW={"165px"}
				h={"58px"}
				padding={"12px 48px"}
				borderRadius={"500px"}
				color={"black"}
				bgColor={"#1BD760"}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				cursor={"pointer"}
				// onClick={login}
				className="ihoverbig"
				fontSize={"16px"}
				fontWeight={"bold"}
				marginBottom={"25px"}
				onClick={formik.handleSubmit}
			>
				Sign up
			</Box>

			<Center
				w={"450px"}
				bgColor={"white"}
				h={"28px"}
				fontSize={"16px"}
				color={"black"}
			>
				Have an account? &nbsp;
				<Link to={"/login"} className="isplink">
					{" "}
					Log in
				</Link>
				.
			</Center>
		</Center>
	);
}
