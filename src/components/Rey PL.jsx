//Playlist
import "./Rey PL.css";
import {
	Avatar,
	Box,
	Center,
	Flex,
	Icon,
	Img,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	SliderMark,
} from "@chakra-ui/react";
import { CgInpicture, CgPlayButtonO } from "react-icons/cg";
import { AiOutlineHeart, AiOutlineMinusCircle } from "react-icons/ai";
import {
	BiShuffle,
	BiSkipPrevious,
	BiSkipNext,
	BiRepeat,
	BiVolumeFull,
} from "react-icons/bi";
import { TbMicrophone2, TbDevices2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { SlLoop } from "react-icons/sl";
import { BsFillPlayCircleFill } from "react-icons/bs";

export default function Playbar() {
	return (
		<>
			<Flex className="playbar">
				<Flex className="penampung" width={"100vw"} height={"100px"}>
					<Flex className="title">
						<Flex width={"55.99px"} height={"55.99px"}>
							{" "}
							<img
								src="https://www.layar.id/wp-content/uploads/2022/04/Suzume-no-Tojimari-scaled.jpg"
								alt=""
							/>
						</Flex>
						<Flex className="penampungtitle">
							<Box>SUZUME</Box>
							<Box color={"#bababa"}>RADWIMPS</Box>
						</Flex>
						<Icon
							className="icon"
							color={"#bababa"}
							as={AiOutlineHeart}
						/>
						<Icon
							className="icon"
							color={"#bababa"}
							as={AiOutlineMinusCircle}
						/>
						<Icon
							className="icon"
							color={"#bababa"}
							as={CgInpicture}
						/>
					</Flex>

					<Flex className="play">
						<Center gap={"10px"}>
							<Icon
								as={BiShuffle}
								fontSize={"23px"}
								color={"#595959"}
							/>
							<Icon
								fontSize={"35px"}
								as={BiSkipPrevious}
								color={"#bababa"}
							/>
							<Icon
								as={BsFillPlayCircleFill}
								fontSize={"33px"}
								color={"white"}
							/>
							<Icon
								fontSize={"35px"}
								as={BiSkipNext}
								color={"#bababa"}
							/>
							<Icon
								as={SlLoop}
								color={"#bababa"}
								fontSize={"15px"}
							/>
						</Center>

						<Box
							display={"flex"}
							flexDirection={"row"}
							gap={"10px"}
						>
							<Flex fontSize={"13px"} color={"#bababa"}>
								0:57
							</Flex>
							<Slider
								aria-label="slider-ex-1"
								colorScheme={"whiteAlpha"}
								defaultValue={30}
								width={"580px"}
							>
								<SliderTrack bg={"#5e5e5e"}>
									<SliderFilledTrack />
								</SliderTrack>
								{/* <SliderThumb /> */}
							</Slider>
							<Flex fontSize={"13px"} color={"#bababa "}>
								3:58
							</Flex>
						</Box>
					</Flex>

					<Flex className="volume" color={"#bababa"}>
						<Icon as={TbMicrophone2}></Icon>
						<Icon as={HiOutlineQueueList}></Icon>
						<Icon as={TbDevices2}></Icon>
						<Icon as={BiVolumeFull}></Icon>
						<Slider
							aria-label="slider-ex-1"
							colorScheme="whiteAlpha"
							defaultValue={50}
							width={"100px"}
						>
							<SliderTrack bg={"#5e5e5e"}>
								<SliderFilledTrack />
							</SliderTrack>
							{/* <SliderThumb />  */}
						</Slider>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}
