import { Box } from "@mui/material";
import React from "react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

export default function MonthlyGraph({
	mockProfileImage,
	aggregatedData,
	currentMonth,
}) {
	return (
		<div
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100vw",
				height: "55vh",
				boxShadow: "0px 1px 20px rgba(245, 182, 93, 0.5)", // 하단부에만 그림
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
				}}
				p={2}
			>
				<p>
					{"이름"}님의 <br /> 이번 달 런닝 기록입니다.
				</p>
				<img src={mockProfileImage} width="64px" />
			</Box>
			<Box
				id="graph-container"
				sx={{
					display: "flex",
					padding: "15px 30px",
					flexDirection: "column",
					textAlign: "center",
					marginLeft: "-40px",
					height: "65%",
				}}
			>
				<Box sx={{ marginLeft: "40px" }}>
					{`${currentMonth}의 런닝 그래프`}
				</Box>
				{aggregatedData.length > 0 ? (
					<ResponsiveContainer>
						<BarChart data={aggregatedData}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis
								dataKey="date"
								label={{
									value: "일",
									position: "insideBottomRight",
									offset: -1,
								}}
							/>
							<YAxis
								label={{
									value: "km",
									position: "insideTop",
									offset: -4,
								}}
							/>
							<Tooltip />
							<Bar
								dataKey="distance"
								fill="#F5B65D"
								radius={5}
								barSize={10}
							/>
						</BarChart>
					</ResponsiveContainer>
				) : (
					<p
						style={{
							marginLeft: "40px",
							fontFamily: "Pretendard-bold",
							fontSize: "20px",
							color: "white",
						}}
					>
						데이터가 아직 없습니다!
					</p>
				)}
			</Box>
		</div>
	);
}
