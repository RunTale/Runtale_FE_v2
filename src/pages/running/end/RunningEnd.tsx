import { Box, Button, useMediaQuery } from "@mui/material";
import {
	getFormattedDistance,
	getFormattedTime,
	getFormattedPace,
} from "../../../utils/running_util";
import Title from "../../../components/Title";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import AuthContext from "../../../context/AuthContext";
import { getUserInfo } from "../../../api/api";
import "./RunningEnd.css";

interface RunningResult {
	distance: number;
	pace: number;
	time: number;
	targetPace: number;
}

function CurrentRunningRecord({
	distance,
	pace,
	time,
	targetPace,
}: RunningResult) {
	const navigate = useNavigate();
	const km = getFormattedDistance(distance);
	const { userId } = useContext(AuthContext);
	const { isLoading, isError, data } = useQuery({
		queryKey: "userInfo",
		queryFn: async () => await getUserInfo({ userId }),
	});
	const [minutes, seconds] = getFormattedTime(time);
	const [paceMinutes, paceSeconds] = getFormattedPace(pace);
	const [targetPaceMinutes, targetPaceSeconds] = getFormattedPace(targetPace);
	const achived: boolean = pace ? pace <= targetPace : false;

	if (isLoading) return <h1>로딩중..</h1>;
	if (isError) return <h1>에러아님</h1>;
	const name = data.data.data.nickname;
	return (
		<Box
			sx={{
				position: "fixed",
				top: 0,
				m: 3,
				fontSize: "larger",
				fontFamily: "Pretendard-bold",
				textAlign: "left",
			}}
		>
			<Box
				sx={{
					color: "gray",
					fontFamily: "Pretendard-bold",
					textAlign: "left",
				}}
			>
				<div>
					<strong>{name}님의</strong>
				</div>
				<div>
					<strong>오늘 러닝 기록을 확인해볼까요? </strong>
				</div>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					color: "black",
					justifyContent: "space-evenly",
					height: "75vh",
				}}
			>
				<Box>
					<Title level={3}>총 거리</Title>
					<div>
						<span className="bitter-large">{km}</span>km
					</div>
				</Box>
				<Box>
					<Title level={3}>총 시간</Title>
					<div>
						<span className="bitter-large">{minutes}</span>m
						<span className="bitter-large">{seconds}</span>s
					</div>
				</Box>
				<Box>
					<Title level={3}>평균 페이스</Title>
					<div>
						<span className="bitter-large">{paceMinutes}</span>m
						<span className="bitter-large">{paceSeconds}</span>s
					</div>
				</Box>
				<Box>
					<Title level={3}>목표 페이스</Title>
					<div>
						<span className="bitter-large">
							{targetPaceMinutes}
						</span>
						m
						<span className="bitter-large">
							{targetPaceSeconds}
						</span>
						s &nbsp;&nbsp;
						<span
							className="achived"
							style={{ color: achived ? "#1890ff" : "crimson" }}
						>
							{achived ? (
								<>
									달성&nbsp;
									<picture>
										<source
											srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.webp"
											type="image/webp"
										/>
										<img
											src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.gif"
											alt="🥳"
											width="36"
											height="36"
										/>
									</picture>
								</>
							) : (
								<>
									실패&nbsp;
									<picture>
										<source
											srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f623/512.webp"
											type="image/webp"
										/>
										<img
											src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f623/512.gif"
											alt="😣"
											width="36"
											height="36"
										/>
									</picture>
								</>
							)}
						</span>
					</div>
				</Box>

				<Button
					variant="contained"
					sx={{ mt: 2 }}
					onClick={() => navigate("/home")}
				>
					종료
				</Button>
			</Box>
		</Box>
	);
}

export default function RunningEnd({}) {
	const navigate = useNavigate();
	const location = useLocation();
	const { distance, pace, time, targetPace } = location.state;
	const [showRecord, setShowRecord] = useState<boolean>(false);
	const MAX_WIDTH = "480px";
	const matches = useMediaQuery("(min-width:480px)");

	return showRecord ? (
		<CurrentRunningRecord
			distance={distance}
			pace={pace}
			time={time}
			targetPace={targetPace}
		/>
	) : (
		<Box
			sx={{
				position: "fixed",
				top: 0,
				display: "flex",
				flexDirection: "column",
				backgroundColor: "#1890FF",
				height: "100vh",
				width: "100%",
				overflow: "hidden",
				color: "white",
				justifyContent: "center",
				fontFamily: "Pretendard-bold",
				gap: "35px",
				maxWidth: MAX_WIDTH,
				borderRadius: matches ? "25px" : 0,
			}}
		>
			<Title level={2}>
				축하해요! <br />
				무사히 러닝을 완주했습니다!
			</Title>
			<img src={"/img/running_end.png"} width="100%" />
			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					position: "sticky",
					bottom: "2rem",
				}}
			>
				<Button
					variant="contained"
					sx={{
						backgroundColor: "lightgray",
						color: "black",
						borderRadius: 2,
						fontFamily: "Pretendard-bold",
					}}
					onClick={() => {
						navigate("/home");
					}}
				>
					<strong>종료하기</strong>
				</Button>

				<Button
					variant="outlined"
					sx={{
						backgroundColor: "white",
						borderRadius: 2,
						fontFamily: "Pretendard-bold",
					}}
					onClick={() => {
						setShowRecord(true);
					}}
				>
					<strong>기록보기</strong>
				</Button>
			</div>
		</Box>
	);
}
