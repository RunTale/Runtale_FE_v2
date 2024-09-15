import React from "react";
import styles from "./PaceInput.module.css";

export default function PaceInput({
	minutes,
	handleMinutesChange,
	seconds,
	handleSecondsChange,
}) {
	return (
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
						fontSize: "1.3rem",
						color: "#909090",
					}}
				>
					분
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
						fontSize: "1.3rem",
						color: "#909090",
					}}
				>
					초
				</span>
			</div>
		</div>
	);
}
