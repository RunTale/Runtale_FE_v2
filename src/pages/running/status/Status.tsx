import { Box, Grid } from "@mui/material";
import {
	getFormattedDistance,
	getFormattedPace,
	getFormattedTime,
} from "../../../utils/running_util";
import { useEffect, useState } from "react";
import Title from "../../../components/Title";
import "./Status.css";

interface StatusPropsType {
	distance: number;
	pace: number;
}

export default function Status({ distance, pace }: StatusPropsType) {
	const km = getFormattedDistance(distance);
	const timeItem = localStorage.getItem("curTime");
	const [time, setTime] = useState<number>(timeItem ? parseInt(timeItem) : 0);
	const [minutes, seconds] = getFormattedTime(time);
	const [paceMinutes, paceSeconds] = getFormattedPace(pace);
	const TIME_INTERVAL = 1000;

	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prev) => {
				localStorage.setItem("curTime", prev.toString());
				return prev + TIME_INTERVAL;
			});
		}, TIME_INTERVAL);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<Box
			m={1}
			mt={4}
			mb={2.5}
			sx={{
				// display: "flex",
				// justifyContent: "space-evenly",
				// alignItems: "center",
				height: "100px",
				borderRadius: 3,
				backgroundColor: "#DCE9F5",
				boxShadow: "3px 3px 3px rgb(0,0,0,0.1)",
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<span className="bitter">{km}</span>km
					<Title level={3}>달린 거리</Title>
				</Grid>
				<Grid item xs={4}>
					<span className="bitter">
						{!pace || pace === Infinity ? "-" : paceMinutes}
					</span>
					m
					<span className="bitter">
						{!pace || pace === Infinity ? "-" : paceSeconds}
					</span>
					s<Title level={3}>평균 페이스</Title>
				</Grid>
				<Grid item xs={4}>
					<span className="bitter">{minutes}</span>분
					<span className="bitter">{seconds}</span>초
					<Title level={3}>시간</Title>
				</Grid>
			</Grid>
		</Box>
	);
}
