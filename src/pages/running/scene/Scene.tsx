import { useEffect, useState } from "react";
import AudioPlayer, { SOUND } from "../../../components/AudioPlayer";
import { Button, Box, useMediaQuery } from "@mui/material";
import Status from "../status/Status";
import background from "../../../assets/scenario-background-0.png";

interface SceneProps {
	distance: number;
	pace: number;
}

export default function Scene({ distance, pace }: SceneProps) {
	const scenarioImage = `/img/Scenario1_${distance < 4 ? Math.floor(distance) + 1 : 4}.png`;
	const MAX_WIDTH = "480px";
	const matches = useMediaQuery("(min-width:480px)");

	return (
		<>
			<Box
				sx={{
					width: "100%",
					height: "100vh",
					position: "fixed",
					top: 0,
					left: 0,
					backgroundImage: `url(${background})`,
					backgroundSize: "cover",
				}}
			></Box>
		</>
	);
}
