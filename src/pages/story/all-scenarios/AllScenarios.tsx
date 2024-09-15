import React from "react";
import profileImage0 from "../../../assets/scenario-profile-0.png";
import profileImage1 from "../../../assets/scenario-profile-1.png";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import GradientCard from "../../../components/GradientCard";
import styles from "./AllScenarios.module.css";
import background from "../../../assets/scenario_header_background.png";

export default function AllScenarios() {
	const scenarios: any = useLoaderData();
	const navigate = useNavigate();
	const handleClickStart = (scenarioId: Number) => {
		navigate("/setpace", { state: { scenarioId: 0 } });
	};
	return (
		<Box className={styles["scenario-list-background"]}>
			<h2 className={styles["title"]}>시나리오</h2>
			<input
				className={styles["search-window"]}
				placeholder="검색어를 입력해주세요."
			/>

			<Box className={styles["scenario-list"]}>
				{scenarios.map((item, index) => {
					return (
						<Box className={styles.card} key={item.title}>
							<div>
								<img src={item.profileImage} width="120px" />
								<p style={{ color: "white" }}>{item.title}</p>
								<br />
								<button
									className={styles["start-button"]}
									onClick={() => handleClickStart(index + 1)}
								>
									시작하기
								</button>
							</div>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
}

export async function loader({ request, params }) {
	// 모든 시나리오 리스트 가져오는 로직

	const mockScenarioList = [
		{
			profileImage: profileImage0,
			title: "고전 1",
			duration: 1,
		},
		{
			profileImage: profileImage1,
			title: "고전 2",
			duration: 1,
		},
		{
			profileImage: profileImage0,
			title: "고전 3",
			duration: 1,
		},
		{
			profileImage: profileImage1,
			title: "고전 4",
			duration: 1,
		},
		{
			profileImage: profileImage0,
			title: "고전 5",
			duration: 1,
		},
	];
	return mockScenarioList;
}
