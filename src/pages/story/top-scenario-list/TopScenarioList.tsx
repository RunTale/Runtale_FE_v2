import { Box, Button } from "@mui/material";
import React from "react";
import Title from "../../../components/Title";
import styles from "./TopScenarioList.module.css";
import GradientCard from "../../../components/GradientCard";
import profileImage0 from "../../../assets/scenario-profile-0.png";
import profileImage1 from "../../../assets/scenario-profile-1.png";
import { Link, useNavigate } from "react-router-dom";

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

export default function TopScenarioList() {
	const navigate = useNavigate();
	const handleClickStart = (scenarioId: Number) => {
		navigate("/setpace", { state: { scenarioId: 0 } });
	};
	return (
		<Box className={styles["scenario-list-container"]} p={3} pt={5}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
				pb={1}
			>
				<Title level={3}>
					인기 급상승 시나리오{" "}
					<span style={{ color: "#C27E1E" }}>TOP4</span>
				</Title>
				<Link to="all">
					<Title level={5}>
						<span style={{ color: "lightgray" }}>
							시나리오 모두 보기
						</span>
					</Title>
				</Link>
			</Box>
			<Box className={styles["scenario-list"]} height={"fit-content"}>
				{mockScenarioList.map((item, index) => {
					return (
						<GradientCard
							key={item.title}
							height={224}
							p={5}
							sx={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
						>
							<div>
								<img src={item.profileImage} width="150px" />
								<p style={{ color: "white" }}>{item.title}</p>
								<br />
								<button
									className={styles["start-button"]}
									onClick={() => handleClickStart(index + 1)}
								>
									시작하기
								</button>
							</div>
						</GradientCard>
					);
				})}
			</Box>
		</Box>
	);
}
