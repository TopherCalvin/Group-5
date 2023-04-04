import {
	Box,
	Flex,
	Image,
	Icon,
	Center,
	Input,
	Checkbox,
} from "@chakra-ui/react";
import logo from "../assets/spotify-logo2.png";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { TbAlertCircleFilled } from "react-icons/tb";

export default function LoginPage() {
	return (
		<Center display={"flex"} flexDir={"column"}>
			<Center
				paddingTop={"25px"}
				paddingBottom={"25px"}
				borderBottom={"1px solid grey"}
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
					<Center
						w={"100%"}
						bgColor={"#1A77F2"}
						h={"48px"}
						fontWeight={"700"}
						borderRadius={"25px"}
						gap={"10px"}
						border={"1px solid #A5A5A5"}
						color={"#e8e8e8"}
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
						border={"1px solid #A5A5A5"}
						color={"#e8e8e8"}
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
						border={"1px solid #A5A5A5"}
						color={"#6A6A6A"}
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
						border={"1px solid #A5A5A5"}
						color={"#6A6A6A"}
					>
						CONTINUE WITH PHONE NUMBER
					</Center>
				</Center>
			</Center>
			<Center w={"100%"} h={"48px"} color={"black"} gap={"10px"}>
				<Center h={"100%"}>
					<Box h={"2px"} w={"100%"} bgColor={"black"}></Box>
				</Center>
				OR
				<Center h={"100%"}>
					<Box h={"1px"} w={"100%"} bgColor={"grey"}></Box>
				</Center>
			</Center>
			<Box width={"450px"} textAlign={"left"} paddingBottom={"5px"}>
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
			></Input>

			<Box
				width={"450px"}
				textAlign={"left"}
				paddingBottom={"5px"}
				// paddingTop={"10px"}
			>
				Password
			</Box>
			<Input
				w={"450px"}
				maxW={"450px"}
				h={"48px"}
				border={"1px solid black"}
				borderRadius={"5px"}
				placeholder="Password"
				marginBottom={"10px"}
			></Input>
			<Box
				width={"450px"}
				textAlign={"left"}
				paddingBottom={"5px"}
				marginBottom={"10px"}
			>
				Forgot your password?
			</Box>
			<Box
				display={"flex"}
				justifyContent={"space-between"}
				w={"450px"}
				maxW={"450px"}
			>
				<Checkbox>Remember Me</Checkbox>
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
				>
					LOGIN
				</Box>
			</Box>
		</Center>
	);
}
