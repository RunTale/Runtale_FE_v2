import { Box } from "@mui/material";
import styles from "./GradientCard.module.css";
import React from "react";
export default function GradientCard({ children, ...props }) {
	return (
		<Box className={styles.card} {...props}>
			{children}
		</Box>
	);
}
