import ilogo from "../assets/spotifylogo.png";
import albuma from "../assets/album1.jpeg";
import { BsFillPlusSquareFill } from "react-icons/bs";
import {
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	Box,
} from "@chakra-ui/react";

export default function Sidebar() {
	return (
		<>
			<Box
				display={"flex"}
				flexDirection={"row"}
				justifyContent={"space-between"}
			>
				{/* SIDEBAR  */}
				<Box className="imotherside">
					<div className="ilogo">
						<img src={ilogo} alt="" />
					</div>
					<div className="imenus">
						<div className="item">
							<div className="isvg">
								<svg
									role="img"
									height="24"
									width="24"
									aria-hidden="true"
									viewBox="0 0 24 24"
									data-encore-id="icon"
								>
									<path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
								</svg>
							</div>
							<div className="imenus3">Home</div>
						</div>
						<div className="item">
							<div className="isvg">
								<svg
									role="img"
									height="24"
									width="24"
									aria-hidden="true"
									viewBox="0 0 24 24"
									data-encore-id="icon"
								>
									<path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
								</svg>
							</div>
							<div className="imenus3">Search</div>
						</div>
						<div className="item">
							<div className="isvg">
								<svg
									role="img"
									height="24"
									width="24"
									aria-hidden="true"
									viewBox="0 0 24 24"
									data-encore-id="icon"
								>
									<path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path>
								</svg>
							</div>
							<div className="imenus3">Your Library</div>
						</div>
					</div>

					<div className="iplaylist">
						<div className="item">
							<div className="isvg">
								<BsFillPlusSquareFill
									className="ireacticon"
									fontSize="1.5em"
								/>
							</div>
							<div className="imenus3">Create Playlist</div>
						</div>
						<div className="item">
							<div class="ilike">
								<svg
									role="img"
									height="12"
									width="12"
									padding="5px"
									fill="white"
									aria-hidden="true"
									viewBox="0 0 16 16"
									data-encore-id="icon"
								>
									<path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path>
								</svg>
							</div>

							<div className="imenus3">Liked Songs</div>
						</div>
						<div className="iseparator"></div>
						<div className="ipadding"></div>

						<div className="imyplaylist">
							<div className="iplaylistcard">Daily Lift</div>
							<div className="iplaylistcard">Mood Booster</div>
							<div className="iplaylistcard">Long Drive</div>
							<div className="iplaylistcard">Parteey 🎉</div>
							<div className="iplaylistcard">Menangos 😭</div>
							<div className="iplaylistcard">Study</div>
							<div className="iplaylistcard">Focus</div>
							<div className="iplaylistcard">While Cooking</div>
							<div className="iplaylistcard">Daily Lift</div>
							<div className="iplaylistcard">Mood Booster</div>
							<div className="iplaylistcard">Long Drive</div>
							<div className="iplaylistcard">Parteey 🎉</div>
							<div className="iplaylistcard">Menangos 😭</div>
							<div className="iplaylistcard">Study</div>
							<div className="iplaylistcard">Focus</div>
							<div className="iplaylistcard">While Cooking</div>
							<div className="iplaylistcard">Daily Lift</div>
							<div className="iplaylistcard">Mood Booster</div>
							<div className="iplaylistcard">Long Drive</div>
							<div className="iplaylistcard">Pareey 🎉</div>
							<div className="iplaylistcard">Menangos 😭</div>
							<div className="iplaylistcard">Study</div>
							<div className="iplaylistcard">Focus</div>
							<div className="iplaylistcard">While Cooking</div>
							<div className="iplaylistcard">Daily Lift</div>
							<div className="iplaylistcard">Mood Booster</div>
							<div className="iplaylistcard">Long Drive</div>
							<div className="iplaylistcard">Parteey 🎉</div>
							<div className="iplaylistcard">Menangos 😭</div>
							<div className="iplaylistcard">Study</div>
							<div className="iplaylistcard">Focus</div>
							<div className="iplaylistcard">While Cooking</div>
							<div className="iplaylistcard">Daily Lift</div>
							<div className="iplaylistcard">Mood Booster</div>
							<div className="iplaylistcard">Long Drive</div>
							<div className="iplaylistcard">Parteey 🎉</div>
							<div className="iplaylistcard">Menangos 😭</div>
							<div className="iplaylistcard">Study</div>
							<div className="iplaylistcard">Focus</div>
							<div className="iplaylistcard">While Cooking</div>
						</div>
					</div>
					<div className="iinstall">
						<div className="ipadding"></div>
						<div className="item">
							<div className="isvg">
								<svg
									role="img"
									height="24"
									width="24"
									aria-hidden="true"
									viewBox="0 0 24 24"
									data-encore-id="icon"
								>
									<path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path>
									<path d="M12 6.05a1 1 0 0 1 1 1v7.486l1.793-1.793a1 1 0 1 1 1.414 1.414L12 18.364l-4.207-4.207a1 1 0 1 1 1.414-1.414L11 14.536V7.05a1 1 0 0 1 1-1z"></path>
								</svg>
							</div>
							<div className="imenus3">Install App</div>
						</div>
					</div>
				</Box>

				{/* MAIN  */}
				<Box className="imothermain">
					<div className="inavbar"></div>
					<div className="imain"></div>
				</Box>
			</Box>
			{/* PLAYBAR  */}
			<Box className="imotherplaybar">
				<div className="iplaybarseca">
					<div className="ialbum">
						<img src={albuma} alt="" />
					</div>
					<div className="isongtitle">
						<div className="isongtitlenow">This is Heaven</div>
						<div className="iartist">Nick Jonas</div>
					</div>
					<button>
						<svg
							role="img"
							height="16"
							width="16"
							aria-hidden="true"
							viewBox="0 0 16 16"
							fill="#b3b3b3"
						>
							<path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path>
						</svg>
					</button>
				</div>

				{/* MIDDLE PLAYBAR */}
				<div className="iplaybarsecb">
					<div className="icontrol">
						<div className="icontrolleft">
							<button
								className="iplaybutton"
								style={{
									fill: "#BABABA",
									backgroundColor: "#181818",
									padding: "0 8px",
								}}
							>
								<svg
									role="img"
									height="16"
									width="16"
									aria-hidden="true"
									viewBox="0 0 16 16"
								>
									<path
										d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"
										class=""
									></path>
								</svg>
							</button>
							<button
								className="iplaybutton"
								style={{
									fill: "#5E5E5E",
									backgroundColor: "#181818",
									padding: "0 8px",
								}}
							>
								<svg
									role="img"
									height="16"
									width="16"
									aria-hidden="true"
									viewBox="0 0 16 16"
									data-encore-id="icon"
								>
									<path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
									<path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
								</svg>
							</button>
						</div>
						<button className="iplaybutton">
							<svg
								role="img"
								height="16"
								width="16"
								aria-hidden="true"
								viewBox="0 0 16 16"
								data-encore-id="icon"
							>
								<path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
							</svg>
						</button>
						<div className="icontrolright">
							<button
								className="iplaybutton"
								style={{
									fill: "#BABABA",
									backgroundColor: "#181818",
									padding: "0 8px",
								}}
							>
								<svg
									role="img"
									height="16"
									width="16"
									aria-hidden="true"
									viewBox="0 0 16 16"
								>
									<path
										d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"
										class=""
									></path>
								</svg>
							</button>
							<button
								className="iplaybutton"
								style={{
									fill: "#5E5E5E",
									backgroundColor: "#181818",
									padding: "0 8px",
								}}
							>
								<svg
									role="img"
									height="16"
									width="16"
									aria-hidden="true"
									viewBox="0 0 16 16"
								>
									<path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path>
								</svg>
							</button>
						</div>
					</div>
					<div className="iduration">
						<div
							className="itime"
							style={{
								textAlign: "right",
							}}
						>
							2:03
						</div>
						<div className="iprogress">
							<div className="iprogcont">
								<Slider colorScheme="green" defaultValue={30}>
									<SliderTrack bg="#b3b3b3">
										<SliderFilledTrack />
									</SliderTrack>
									<SliderThumb boxSize={3} />
								</Slider>
							</div>
						</div>
						<div className="itime">4:23</div>
					</div>
				</div>

				{/* RIGHT PLAYBAR */}
				<div className="iplaybarsecc">
					<button>
						<span>
							<svg
								height="16"
								width="16"
								viewBox="0 0 16 16"
								fill="#A7A7A7"
							>
								<path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"></path>
							</svg>
						</span>
					</button>

					<div>
						<button>
							<span>
								<svg
									height="16"
									width="16"
									viewBox="0 0 16 16"
									fill="#A7A7A7"
								>
									<path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path>
								</svg>
							</span>
						</button>
					</div>

					{/* VOLUME  */}

					<div>
						<button>
							<svg
								height="16"
								width="16"
								aria-hidden="true"
								viewBox="0 0 16 16"
								fill="#A7A7A7"
							>
								<path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path>
								<path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
							</svg>
						</button>
					</div>
					<div className="ivolumebarnicon">
						<div>
							<button>
								<svg
									height="16"
									width="16"
									viewBox="0 0 16 16"
									fill="#A7A7A7"
								>
									<path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
									<path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
								</svg>
							</button>
						</div>

						<div className="ivolumebar">
							<Slider colorScheme="green" defaultValue={30}>
								<SliderTrack bg="#b3b3b3">
									<SliderFilledTrack />
								</SliderTrack>
								{/* <SliderThumb boxSize={3} /> */}
							</Slider>
						</div>
					</div>
				</div>
			</Box>
		</>
	);
}
