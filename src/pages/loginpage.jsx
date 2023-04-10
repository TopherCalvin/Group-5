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
} from "@chakra-ui/react";
import logo from "../assets/spotify-logo2.png";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { TbAlertCircleFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth_types } from "../redux/types";
import axios from "axios";

export default function LoginPage() {
	const [account, setAccount] = useState({ email: "", password: "" });
	const [seePassword, setSeePassword] = useState(false);
	const nav = useNavigate();
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	// FUNCTION WILL EXECUTE HERE
	// 	const user = JSON.parse(localStorage.getItem("user"));
	// 	if (user?.email) {
	// 		nav("/");
	// 	}
	// }, []);

	function inputHandler(event) {
		const { value, id } = event.target;
		const tempAccount = { ...account };
		tempAccount[id] = value;
		setAccount(tempAccount);
	}

	// LOGIN WITH AXIOS
	async function login() {
		await axios
			.get("http://localhost:2000/user", {
				params: {
					email: account.email.toLowerCase(),
					password: account.password,
				},
			})
			.then((res) => {
				if (res.data.length) {
					dispatch({
						type: auth_types.login,
						payload: account,
					});
					localStorage.setItem("user", JSON.stringify(account));
					nav("/");
				} else {
					alert("Email/Pass salah.");
				}
			});
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
			paddingX={"10px"}
		>
			<Center
				paddingTop={"25px"}
				paddingBottom={"25px"}
				marginBottom={"10px"}
				borderBottom={"1px solid #b3b3b3"}
				w={"100%"}
			>
				<Image src={logo} h={"44px"}></Image>
			</Center>
			<Center>
				<Center
					paddingTop={"25px"}
					w={"450px"}
					maxW={"450px"}
					display={"flex"}
					flexDirection={"column"}
					gap={"10px"}
				>
					<Box
						width={"450px"}
						textAlign={"center"}
						fontWeight={"bold"}
					>
						To continue, login to Spotify.
					</Box>
					<Center
						w={"100%"}
						bgColor={"#1A77F2"}
						h={"48px"}
						fontWeight={"700"}
						borderRadius={"25px"}
						gap={"10px"}
						border={"0.5px solid black"}
						color={"#e8e8e8"}
						cursor={"pointer"}
						letterSpacing={"0.1em"}
					>
						<Icon w={"20px"} h={"20px"} as={BsFacebook}></Icon>{" "}
						CONTINUE WITH FACEBOOK
					</Center>

					<Center
						w={"100%"}
						bgColor={"black"}
						h={"48px"}
						fontWeight={"700"}
						borderRadius={"25px"}
						gap={"10px"}
						border={"0.5px solid black"}
						color={"#e8e8e8"}
						cursor={"pointer"}
						letterSpacing={"0.1em"}
					>
						<Icon w={"20px"} h={"20px"} as={BsApple}></Icon>{" "}
						CONTINUE WITH APPLE
					</Center>

					<Center
						w={"100%"}
						bgColor={"white"}
						h={"48px"}
						fontWeight={"700"}
						borderRadius={"25px"}
						gap={"10px"}
						border={"0.5px solid black"}
						color={"#6A6A6A"}
						cursor={"pointer"}
						letterSpacing={"0.1em"}
					>
						<Icon w={"20px"} h={"20px"} as={FcGoogle}></Icon>{" "}
						CONTINUE WITH GOOGLE
					</Center>

					<Center
						w={"100%"}
						bgColor={"white"}
						h={"48px"}
						fontWeight={"700"}
						borderRadius={"25px"}
						gap={"10px"}
						border={"0.5px solid black"}
						color={"#6A6A6A"}
						cursor={"pointer"}
						letterSpacing={"0.1em"}
					>
						CONTINUE WITH PHONE NUMBER
					</Center>
				</Center>
			</Center>

			<Flex w={"450px"} h={"38px"} marginTop={"25px"}>
				<Box
					w={"100%"}
					borderTop={"1px solid #b3b3b3"}
					marginTop={"4px"}
				></Box>
				<Box padding={"0 10px"} fontWeight={"bold"}>
					OR
				</Box>
				<Box
					w={"100%"}
					borderTop={"1px solid #b3b3b3"}
					marginTop={"4px"}
				></Box>
			</Flex>

			<Box
				width={"450px"}
				textAlign={"left"}
				paddingBottom={"5px"}
				fontWeight={"bold"}
			>
				Email address or username
			</Box>
			<Input
				w={"450px"}
				maxW={"450px"}
				h={"48px"}
				border={"1px solid black"}
				borderRadius={"5px"}
				placeholder="Email address or username"
				marginBottom={"10px"}
				id="email"
				onChange={inputHandler}
			></Input>

			<Box
				width={"450px"}
				textAlign={"left"}
				paddingBottom={"5px"}
				fontWeight={"bold"}
			>
				Password
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
					placeholder="Password"
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
			{account?.password.length < 8 && account?.password.length > 3 ? (
				<Box color={"red"}>
					Password shall contain at least eight characters
				</Box>
			) : null}
			<Box
				width={"450px"}
				textAlign={"left"}
				paddingTop={"10px"}
				paddingBottom={"5px"}
				marginBottom={"20px"}
				fontSize={"16px"}
				textDecoration={"underline"}
				color={"black"}
			>
				<a href="#"> Forgot your password?</a>
			</Box>
			<Box
				display={"flex"}
				justifyContent={"space-between"}
				w={"450px"}
				maxW={"450px"}
			>
				<Checkbox size={"sm"}>Remember Me</Checkbox>
				<Box
					w={"121px"}
					maxW={"121px"}
					h={"48px"}
					borderRadius={"500px"}
					color={"black"}
					bgColor={"#1BD760"}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					cursor={"pointer"}
					letterSpacing={"0.1em"}
					fontWeight={"600"}
					onClick={login}
					className="ilogin"
				>
					LOG IN
				</Box>
			</Box>

			<Flex w={"450px"} h={"18px"} marginTop={"25px"}>
				<Box
					w={"100%"}
					borderTop={"1px solid #b3b3b3"}
					marginTop={"4px"}
				></Box>
			</Flex>

			<Center
				w={"450px"}
				bgColor={"white"}
				h={"48px"}
				fontSize={"17px"}
				fontWeight={"700"}
				color={"black"}
				letterSpacing={"0.1em"}
			>
				Don't have an account?
			</Center>

			<Center
				w={"450px"}
				bgColor={"white"}
				h={"48px"}
				fontWeight={"700"}
				borderRadius={"25px"}
				marginTop={"10px"}
				border={"0.5px solid black"}
				color={"#6A6A6A"}
				cursor={"pointer"}
				letterSpacing={"0.1em"}
			>
				<Link to={"/register"}> SIGN UP FOR SPOTIFY</Link>
			</Center>
		</Center>
	);
}
