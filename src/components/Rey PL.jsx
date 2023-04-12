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
import { TbMicrophone2, TbDevices2, TbChevronsDownLeft } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { SlLoop } from "react-icons/sl";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Playbar(props) {
	const [duration, setDuration] = useState(0);
	const [counter, setCounter] = useState(0);

	const [pause, setPause] = useState(true);

	const [audio, setAudio] = useState({});
	const [currentTime, setCurrentTime] = useState(0);

	useEffect(() => {
		changePlaylist();
	}, [props.playlist]);

	function changePlaylist() {
		//   setTimeout(() => setCurrentTime(audio?.currentTime), 500);

		soundTrack();
	}

	function play() {
		audio.play();
		// console.log(audio);
	}

	useEffect(() => {
		changePlaylist();
	}, [props.playlist]);

	useEffect(() => {
		updateTime();
	}, [currentTime]);

	function soundTrack() {
		if (props.playlist?.length) {
			const tempAudio = new Audio(
				require("../assets/audio/" + props.playlist[counter].src)
			);
			tempAudio.addEventListener("loadedmetadata", function () {
				setDuration(tempAudio.duration);
				console.log(tempAudio.duration);
				console.log(props.playlist[0].src);
			});
			setAudio(tempAudio);
		}
	}

	async function updateTime() {
		console.log("assa");

		if (currentTime == audio.duration && audio.duration) {
			setCounter(counter + 1);
			return await changeSong(counter + 1);
		}

		const promise = new Promise((resolve) => {
			setTimeout(() => {
				if (!pause) {
					resolve(setCurrentTime(audio.currentTime));
				}
			}, 500);
		});

		return await promise;
	}

	function play(status) {
		setPause(status);
		if (!status) {
			audio.play();
			setTimeout(() => setCurrentTime(audio.currentTime), 500);
			return;
		}
		audio.pause();
	}

	async function changeSong(track) {
		console.log(track);
		console.log(props.playlist.length);
		if (track > props.playlist.length - 1 || track < 0) {
			track = 0;
		}
		setCounter(track);
		audio.src = require("../assets/audio/" + props.playlist[track].src);

		return audio.play().finally(() => {
			setPause(false);
			updateTime();
		});
	}

	return (
		<>
			<Flex className="playbar" zIndex={"3"}>
				<Flex className="penampung" width={"100vw"} height={"100px"}>
					<Flex className="title">
						<Flex width={"55.99px"} height={"55.99px"}>
							{" "}
							{/* IMAGE ALBUM  */}
							<img
								// src="https://www.layar.id/wp-content/uploads/2022/04/Suzume-no-Tojimari-scaled.jpg"
								src={
									props.playlist?.length
										? props.playlist[counter]?.cover
										: null
								}
								alt=""
							/>
						</Flex>
						<Flex className="penampungtitle">
							{/* <Box>SUZUME</Box> */}
							<Box>
								{props.playlist?.length
									? props.playlist[counter]?.title
									: null}
							</Box>
							<Box color={"#bababa"}>
								{props.playlist?.length
									? props.playlist[counter]?.singer
									: null}
							</Box>
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
								onClick={async () => {
									setCounter(counter - 1);
									await changeSong(counter - 1);
								}}
							/>
							{/* INI PLAY BUTTON  */}
							<Icon
								as={
									audio.paused
										? BsFillPlayCircleFill
										: BsFillPauseCircleFill
								}
								fontSize={"33px"}
								color={"white"}
								onClick={() => play(!pause)}
							/>
							<Icon
								fontSize={"35px"}
								as={BiSkipNext}
								color={"#bababa"}
								onClick={async () => {
									setCounter(counter + 1);
									await changeSong(counter + 1);
								}}
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
							<Flex
								fontSize={"13px"}
								color={"#bababa"}
								minW={"40px"}
								fontSize={"11px"}
							>
								0{Math.floor(audio.currentTime / 60)} :{" "}
								{Math.floor(audio.currentTime % 60) > 9
									? Math.floor(audio.currentTime % 60)
									: "0" + Math.floor(audio.currentTime % 60)}
							</Flex>
							<Slider
								aria-label="slider-ex-1"
								colorScheme={"whiteAlpha"}
								defaultValue={0}
								width={"560px"}
								value={
									Math.round(audio?.currentTime * 100) /
									audio.duration
								}
								onChange={(val) => {
									let changeDur = val / 100;
									if (audio.duration) {
										changeDur *= audio.duration;
									}
									audio.currentTime = changeDur;
									setCurrentTime(audio?.currentTime);
								}}
							>
								<SliderTrack bg={"#5e5e5e"}>
									<SliderFilledTrack colorScheme={"green"} />
								</SliderTrack>
								{/* <SliderThumb /> */}
							</Slider>
							<Flex
								fontSize={"13px"}
								color={"#bababa "}
								minW={"40px"}
								fontSize={"11px"}
							>
								0{Math.floor(duration / 60)} :{" "}
								{Math.floor(duration % 60) > 9
									? Math.floor(duration % 60)
									: "0" + Math.floor(duration % 60)}
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
							defaultValue={audio?.volume * 100}
							onChange={(vol) => (audio.volume = vol / 100)}
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
