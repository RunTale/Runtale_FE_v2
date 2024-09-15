import React from "react";
import { Box, ListItem, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import GradientCard from "../../components/GradientCard";
import TopScenarioList from "./top-scenario-list/TopScenarioList";
import styles from "./Stroy.module.css";

interface Scenario {
	title: string;
	description?: string;
	to: string;
	imageUrl: string;
	id: number;
}

const scenarios: Scenario[] = [
	{
		title: "첫 출근 지각",
		description:
			"드디어 취뽀에 성공한 나!\n하지만, 첫 날부터 지각하게 생겼는데......",
		to: "/setpace",
		imageUrl: "/img/scenario1.png",
		id: 1,
	},
	{
		title: "수업 지각",
		description:
			"피곤한 하루를 보냈던 나머지 늦잠을 자고\n1교시 수업에 지각하게 생겼는데......",
		to: "/setpace",
		imageUrl: "/img/scenario2.png",
		id: 2,
	},
	{
		title: "요리 준비",
		description:
			"친구를 집에 초대하고 요리 준비를 하는 나,\n하지만 시간이 얼마 남지 않았는데...",
		to: "/setpace",
		imageUrl: "/img/scenario3.png",
		id: 3,
	},
	{
		title: "시나리오 없이 뛰기",
		description: "현 위치 트랙의 화면과 달립니다.",
		to: "/setpace",
		imageUrl: "/img/noscenario.png",
		id: 0,
	},
];

const MockScenarioSquare: React.FC<{
	imageUrl: string;
	isBlurred: boolean;
}> = ({ imageUrl, isBlurred }) => {
	return (
		<Box
			sx={{
				width: "100px",
				height: "100px",
				backgroundColor: "lightgray",
				borderRadius: 3,
				mr: 2,
				backgroundImage: `url(${imageUrl})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				position: "relative", // Make the box a positioned element
				overflow: "hidden", // Hide any overflow
			}}
		>
			{isBlurred && (
				<Box
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						backgroundColor: "rgba(0, 0, 0, 0.8)", // Black overlay
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						color: "white",
					}}
				>
					<LockIcon fontSize="large" />
				</Box>
			)}
		</Box>
	);
};

const ScenarioItem: React.FC<Scenario> = ({
	title,
	description,
	to,
	imageUrl,
	id,
}) => {
	const isBlurred = [2, 3].includes(id);
	return (
		<ListItem
			sx={{
				p: 0.5,
				mb: 2,
				position: "relative", // Make the list item a positioned element
			}}
			component={Link}
			to={to}
			state={{ scenarioId: id }}
		>
			<MockScenarioSquare imageUrl={imageUrl} isBlurred={isBlurred} />
			<Box
				sx={{
					pointerEvents: isBlurred ? "none" : "auto", // Disable pointer events if blurred
					position: "relative", // For overlay text positioning
				}}
			>
				<h4
					style={{
						margin: 0,
						color: "#1890FF",
						fontFamily: "Pretendard-Bold",
					}}
				>
					{title}
				</h4>
				{description && (
					<p
						style={{
							margin: 0,
							fontSize: "13px",
							color: "#626773",
						}}
					>
						{description.split("\n").map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br />
							</React.Fragment>
						))}
					</p>
				)}
			</Box>
		</ListItem>
	);
};

const Story: React.FC = () => {
	return (
		<Box m={0} p={0}>
			<Stack textAlign="left">
				<Box className={styles["background-image"]}>
					<Box p={2} pt={5}>
						{"홍길동"}님, <br />
						오늘도 런닝을 시작해보아요!
					</Box>
					<Box display={"flex"} gap={"15px"}>
						<GradientCard height={"50px"} width={"96px"}>
							<Box fontSize={"1.2rem"}>
								<p>오늘의 목표!</p>
								<p style={{ color: "white" }}>{1}시간</p>
							</Box>
						</GradientCard>
						<GradientCard height={"50px"} width={"96px"}>
							<Box fontSize={"1.2rem"}>
								<p>어제의 러닝</p>
								<p style={{ color: "white" }}>{1}시간</p>
							</Box>
						</GradientCard>
					</Box>
				</Box>
				<TopScenarioList />
				{/* <List>
					{scenarios.map((scenario, index) => (
						<ScenarioItem key={index} {...scenario} />
					))}
				</List> */}
			</Stack>
		</Box>
	);
};

export default Story;
