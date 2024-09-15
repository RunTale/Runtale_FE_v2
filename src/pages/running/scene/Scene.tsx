import { useEffect, useState } from "react";
import AudioPlayer, { SOUND } from "../../../components/AudioPlayer";
import { Button, Box, useMediaQuery } from "@mui/material";
import Status from "../status/Status";

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
					height: "70vh",
					position: "fixed",
					top: 0,
					left: 0,
				}}
			>
				<img
					src={scenarioImage}
					alt="Scenario"
					style={{
						width: "100%",
						height: "100%",
						maxWidth: MAX_WIDTH,
						borderRadius: matches ? "25px 25px 0 0" : 0,
					}}
				/>
			</Box>
		</>
	);
}
