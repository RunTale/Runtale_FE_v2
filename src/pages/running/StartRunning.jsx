import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./StartRunning.module.css";
import { postRunning } from "../../api/api";
import AudioPlayer, { SOUND } from "../../components/AudioPlayer";

export default function StartRunning() {
	const [countdown, setCountdown] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();
	const { targetPace, scenarioId } = location.state;
	const geo = navigator.geolocation;
	const position = useRef({ latitude: 0, longitude: 0 });
	const [isEnd, setIsEnd] = useState(scenarioId === 0 ? true : false);

	useEffect(() => {
		geo.getCurrentPosition((g) => {
			position.current.latitude = g.coords.latitude;
			position.current.longitude = g.coords.longitude;
		});
	}, []);

	useEffect(() => {
		let timer;

		if (countdown !== null && countdown > 0) {
			timer = setTimeout(() => {
				setCountdown((prevCountdown) =>
					prevCountdown ? prevCountdown - 1 : 0,
				);
			}, 1000);
		} else if (countdown === 0) {
			navigate("/running");
		}

		return () => clearTimeout(timer);
	}, [countdown, navigate]);

	const handleStartRunning = () => {
		localStorage.removeItem("runningId");
		localStorage.removeItem("curTime");
		postRunning({
			distance: 0,
			pace: 0,
			targetPace: targetPace,
			targetDistance: 3, //실제 값 추가
			scenarioId: scenarioId, //실제 값 추가
			latitude: position.current.latitude,
			longitude: position.current.longitude,
		}).then((res) => {
			localStorage.setItem("runningId", res.data.data.id.toString());
		});

		setCountdown(3);
	};

	return (
		<div className={styles.Container}>
			{countdown !== null ? (
				<div className={styles.CountdownContainer}>
					<p className={styles.Countdown}>{countdown}</p>
					<AudioPlayer filename={SOUND.카운트} play />
				</div>
			) : (
				<>
					{isEnd ? (
						<>
							{" "}
							<Button
								variant="contained"
								disableElevation
								sx={{
									borderRadius: "100px",
									width: "200px",
									height: "70px",
									backgroundColor: "#FB8C26",
									color: "#FFFFFF",
									fontFamily: "Pretendard-bold",
									"&:hover": {
										backgroundColor: "#DD7D24",
									},
									marginTop: "40vh",
									fontSize: "25px",
								}}
								onClick={handleStartRunning}
							>
								러닝 시작
							</Button>
							<AudioPlayer filename="시작안내멘트.mp3" play />
						</>
					) : undefined}
					<Button
						variant="contained"
						disableElevation
						sx={{
							mt: 4,
							borderRadius: "100px",
							width: "100px",
							height: "50px",
							backgroundColor: "#303335",
							color: "#FFFFFF",
							fontFamily: "Pretendard-regular",
							"&:hover": {
								backgroundColor: "#202223",
							},
							fontSize: "15px",
						}}
						onClick={() => navigate(-1)}
					>
						중단
					</Button>
					{scenarioId !== 0 ? (
						<AudioPlayer
							filename="시나리오1음성.mp3"
							play
							setIsEnd={setIsEnd}
						/>
					) : undefined}
				</>
			)}
		</div>
	);
}
