import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import {
	getFormattedDistance,
	getFormattedTime,
	getFormattedPace,
} from "../../../utils/running_util";
import Title from "../../../components/Title";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./RunningEnd.module.css";
import background from "../../../assets/scenario-background-0.png";

export default function RunningEnd({}) {
	const navigate = useNavigate();
	const location = useLocation();
	const { distance, pace, time, targetPace } = location.state;
	const km = getFormattedDistance(distance);
	const [minutes, seconds] = getFormattedTime(time);
	const formattedPace = getFormattedPace(pace);
	const formattedTargetPace = getFormattedPace(targetPace);

	const handleClickExit = () => {
		navigate("/home");
	};

	return (
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
		>
			<Box
				sx={{
					width: "100%",
					height: "100%",
					backgroundColor: "rgba(0,0,0,0.6)",
				}}
			>
				<Box className={styles["achived"]}>무사 완주!</Box>
				<Box className={styles["result-status-container"]}>
					<Title level={4}>오늘의 러닝 기록이에요.</Title>
					<Grid container spacing={2} p={2} sx={{ color: "#909090" }}>
						<Grid item xs={6}>
							<div className={styles["result-status-item"]}>
								<Title level={5}>총 기록</Title>
								<p>
									<span className={styles["bitter"]}>
										{km}
									</span>
									km
								</p>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className={styles["result-status-item"]}>
								<Title level={5}>총 시간</Title>
								<p>
									<span className={styles["bitter"]}>
										{minutes}
									</span>
									m
									<span className={styles["bitter"]}>
										{seconds}
									</span>
									s
								</p>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className={styles["result-status-item"]}>
								<Title level={5}>평균 페이스</Title>
								<p>
									<span className={styles["bitter"]}>
										{formattedPace[0]}
									</span>
									m
									<span className={styles["bitter"]}>
										{formattedPace[1]}
									</span>
									s
								</p>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className={styles["result-status-item"]}>
								<Title level={5}>목표 페이스</Title>
								<p>
									<span className={styles["bitter"]}>
										{formattedTargetPace[0]}
									</span>
									m
									<span className={styles["bitter"]}>
										{formattedTargetPace[1]}
									</span>
									s
								</p>
							</div>
						</Grid>
					</Grid>
					<button
						className={styles["exit-button"]}
						onClick={handleClickExit}
					>
						홈으로
					</button>
				</Box>
			</Box>
		</Box>
	);
}
