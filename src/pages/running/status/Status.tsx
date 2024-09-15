import { Box, Grid } from "@mui/material";
import {
	getFormattedDistance,
	getFormattedPace,
	getFormattedTime,
} from "../../../utils/running_util";
import { useEffect, useState } from "react";
import Title from "../../../components/Title";
import styles from "./Status.module.css";

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
		<>
			<progress
				className={styles["status-progress"]}
				max={100}
				value={70}
			/>
			<Box className={styles["status-container"]}>
				<Grid
					container
					spacing={1}
					sx={{ color: "#909090", fontSize: "0.9rem" }}
					pt={2}
				>
					<Grid item xs={4}>
						<Title level={3}>거리</Title>
						<span className={styles["bitter"]}>{km}</span>km
					</Grid>
					<Grid item xs={4}>
						<Title level={3}>시간</Title>
						<span className={styles["bitter"]}>{minutes}</span>분
						<span className={styles["bitter"]}>{seconds}</span>초
					</Grid>
					<Grid item xs={4}>
						<Title level={3}>평균 페이스</Title>
						<span className={styles["bitter"]}>
							{!pace || pace === Infinity ? "-" : paceMinutes}
						</span>
						m
						<span className={styles["bitter"]}>
							{!pace || pace === Infinity ? "-" : paceSeconds}
						</span>
						s
					</Grid>
				</Grid>
			</Box>
		</>
	);
}
