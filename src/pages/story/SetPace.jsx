import { useState, useEffect, useContext } from "react";
import styles from "./SetPace.module.css";
import Title from "../../components/Title";
import { Box, Button } from "@mui/material";
import requestApi from "../../api/api";
import AuthContext from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { getRunning } from "../../api/api";

export default function SetDistance() {
	const SIZE = 300;
	const [nickname, setNickname] = useState("");
	const [minutes, setMinutes] = useState("");
	const [seconds, setSeconds] = useState("");
	const { userId, isAuthenticated } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const { scenarioId } = location.state;
	const prevRunningId = localStorage.getItem("runningId");

	useEffect(() => {
		if (!prevRunningId) return;
		const runningId = parseInt(prevRunningId);
		getRunning({ runningId })
			.then((res) => {
				if (res.data.data.status === "IN_PROGRESS") {
					navigate("/running");
				}
				/**
				 * TODO : 이 타이밍에 "이전 러닝 진행상황 복구할까?말까?를 물어보면 좋을 듯 !"
				 */
			})
			.catch(() => {
				localStorage.removeItem("runningId");
				localStorage.removeItem("curTime");
			});
	});

	useEffect(() => {
		const fetchNickname = async () => {
			if (!isAuthenticated || userId < 0) return;
			try {
				const response = await requestApi.get(`/users/${userId}`);
				if (response.data.status === 200) {
					setNickname(response.data.data.nickname);
				} else {
					console.error(
						"Error fetching nickname:",
						response.data.message,
					);
				}
			} catch (error) {
				console.error("Error fetching nickname:", error);
			}
		};

		fetchNickname();
	}, [isAuthenticated, userId]);

	const handleMinutesChange = (e) => {
		setMinutes(e.target.value);
	};

	const handleSecondsChange = (e) => {
		setSeconds(e.target.value);
	};

	/*const handleSubmit = async () => {
		if (!isAuthenticated || userId < 0 || pace <= 0) return;
		const pace = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
		try {
			const response = await requestApi.post(
				`/users/${userId}/set-pace`,
				{ pace },
			);
			if (response.data.status === 200) {
				console.log("Pace set successfully");
			} else {
				console.error("Error setting pace:", response.data.message);
			}
		} catch (error) {
			console.error("Error setting pace:", error);
		}
	};*/

	if (scenarioId >= 2) {
		return (
			<>
				<h1>돈내세용</h1>
				<Button variant="outlined" onClick={() => navigate(-1)}>
					뒤로가기
				</Button>
			</>
		);
	}
	return (
		<Box p={1}>
			{/* <Title
				level={2}
				style={{
					textAlign: "left",
					marginBottom: "30px",
				}}
			>
				<AnimalCrawls />
			</Title> */}
			<div className={`${styles["Content-Container"]}`}>
				<Title level={2}>
					<span
						style={{
							color: "#1890FF",
							fontFamily: "Pretendard-bold",
						}}
					>
						{nickname}
					</span>{" "}
					님의 오늘 목표 페이스
				</Title>
				<div className={styles.distanceInputContainer}>
					<div className={styles.minuteWrap}>
						<input
							type="number"
							className={styles.distanceInput}
							min="0"
							value={minutes}
							onChange={handleMinutesChange}
						/>
						<span
							style={{
								fontFamily: "Pretendard-bold",
								fontSize: "25px",
							}}
						>
							m
						</span>
					</div>
					<div className={styles.secondWrap}>
						<input
							type="number"
							className={styles.distanceInput}
							min="0"
							max="59"
							value={seconds}
							onChange={handleSecondsChange}
						/>
						<span
							style={{
								fontFamily: "Pretendard-bold",
								fontSize: "25px",
							}}
						>
							s
						</span>
					</div>
				</div>
				<Box component="picture">
					<img
						src="/img/runemoji.png"
						alt="🏁"
						width={SIZE}
						height={SIZE}
					/>
				</Box>
				<p style={{ margin: 0, fontSize: "13px", color: "#626773" }}>
					오늘도 재밌게 달려볼까요? <br />
					Runtale은 언제나 {nickname} 님의 건강한 러닝을 응원합니다!
					<br />* 🔊시나리오 진행 시 이어폰 착용을 권장합니다 *
				</p>
				<Button
					variant="contained"
					disableElevation
					sx={{
						mt: 1,
						borderRadius: "100px",
						width: "300px",
						height: "50px",
						backgroundColor: "#1890FF",
						color: "#FFFFFF",
						fontFamily: "Pretendard-bold",
						"&:hover": {
							backgroundColor: "#096DD9",
						},
					}}
					onClick={() =>
						navigate("/startrunning", {
							state: {
								targetPace:
									((parseInt(minutes) | 0) * 60 +
										(parseInt(seconds) | 0)) *
									1000,
								scenarioId: scenarioId,
							},
						})
					}
				>
					시나리오 시작!
				</Button>
			</div>
		</Box>
	);
}
