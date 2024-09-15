import React from "react";
import styles from "./RecordItem.module.css";

export default function RecordItem({ pictogram, title, value }) {
	return (
		<div className={styles["record-item-container"]}>
			<div
				className={styles["record-item"]}
				style={{ paddingTop: "4px" }}
			>
				{pictogram}
			</div>
			<div className={styles["record-item"]}>{title}</div>
			<div className={styles["record-item-value"]}>{value}</div>
		</div>
	);
}
