import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./StartRunning.module.css";
import { postRunning } from "../../api/api";
import AudioPlayer, { SOUND } from "../../components/AudioPlayer";
import background from "../../assets/scenario-background-0.png";

export default function StartRunning() {
	const [countdown, setCountdown] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();
	const { targetPace, scenarioId } = location.state;
	const geo = navigator.geolocation;
	const position = useRef({ latitude: 0, longitude: 0 });

	const handleStartRunning = useCallback(() => {
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
	}, [scenarioId, targetPace]);

	useEffect(() => {
		geo.getCurrentPosition((g) => {
			position.current.latitude = g.coords.latitude;
			position.current.longitude = g.coords.longitude;
		});
		handleStartRunning();
	}, [geo, handleStartRunning]);

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

	return (
		<div
			className={styles.Container}
			style={{
				backgroundImage: `url(${background})`,
			}}
		>
			{countdown && (
				<div
					className={styles.CountdownContainer}
					style={{
						backgroundImage: `url(${background})`,
					}}
				>
					<p className={styles.Countdown}>{countdown}</p>
					<AudioPlayer filename={SOUND.카운트} play />
				</div>
			)}
		</div>
	);
}
