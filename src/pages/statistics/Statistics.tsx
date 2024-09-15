import { Box, Grid } from "@mui/material";
import { getRunningRecordMonthly } from "../../api/api";
import { useQuery } from "react-query";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import CustomFadeLoader from "../../components/CustomFadeLoader";
import {
	getFormattedDistance,
	getFormattedPace,
} from "../../utils/running_util";
import mockProfileImage from "../../assets/scenario-profile-1.png";
import MonthlyGraph from "./MonthlyGraph";
import Title from "../../components/Title";
import RecordItem from "../../components/RecordItem";

export default function Statistics() {
	const { userId } = useContext(AuthContext);
	const { isSuccess, data } = useQuery({
		queryKey: "monthlyRecords",
		queryFn: async () => await getRunningRecordMonthly({ userId }),
	});

	if (!isSuccess) return <CustomFadeLoader />;

	const {
		averagePace,
		runningList,
		targetDistanceAchievedCount,
		targetPaceAchievedCount,
		totalDistance,
		totalRunningCount,
	} = data.data.data;

	const aggregatedData = runningList.reduce((acc, run) => {
		const date = new Date(run.createdDate).getDate();
		const existingEntry = acc.find((entry) => entry.date === date);
		if (existingEntry) {
			existingEntry.distance += run.distance;
		} else {
			acc.push({ date, distance: run.distance });
		}
		return acc;
	}, []);

	const currentDate = new Date();
	const currentMonth = currentDate.toLocaleString("ko-KR", { month: "long" });
	const currentYear = currentDate.getFullYear();
	const [paceMinutes, paceSeconds] = getFormattedPace(averagePace);

	return (
		<Box p={1}>
			<Box sx={{ textAlign: "left" }} p={3}>
				<MonthlyGraph
					mockProfileImage={mockProfileImage}
					aggregatedData={aggregatedData}
					currentMonth={currentMonth}
				/>
				<Box
					sx={{
						position: "absolute",
						top: "55vh",
						marginTop: "20px",
					}}
				>
					<Title level={4}>{currentMonth}의 기록</Title>
					<Box mt={2}>
						<RecordItem
							pictogram={
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15.1818 1V15.1818M1 1V15.1818M10.7274 6.31818L12.5227 8.09091M12.5227 8.09091L10.7274 9.86364M12.5227 8.09091H3.65909M5.45439 9.86364L3.65909 8.09091M3.65909 8.09091L5.45439 6.31818"
										stroke="#F5B65D"
										stroke-opacity="0.56"
										stroke-width="1.28926"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							}
							title="달린 거리"
							value={getFormattedDistance(totalDistance) + "KM"}
						/>
						<RecordItem
							pictogram={
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15.1818 8.09091C15.1818 4.17474 12.0071 1.00002 8.09095 1M15.1818 8.09091C15.1818 8.09092 15.1818 8.0909 15.1818 8.09091ZM15.1818 8.09091C15.1818 12.0071 12.0071 15.1818 8.09091 15.1818C4.17471 15.1818 1 12.0071 1 8.09091C1 4.1747 4.17473 0.999977 8.09095 1M15.1818 8.09091L8.09091 8.09093M8.09095 1L8.09091 8.09093M8.09091 8.09093L3.21591 12.9659"
										stroke="#F5B65D"
										stroke-opacity="0.56"
										stroke-width="1.28926"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							}
							title="러닝 횟수"
							value={totalRunningCount + "회"}
						/>
						<RecordItem
							pictogram={
								<svg
									width="18"
									height="18"
									viewBox="0 0 18 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.6172 9.37309L11.2661 8.83379L11.2572 8.83963L11.2484 8.84576L11.6172 9.37309ZM11.6172 8.26612L11.2356 8.7843L11.2643 8.80543L11.2952 8.82327L11.6172 8.26612ZM7.18074 4.99932L7.5623 4.48115L7.54414 4.46778L7.52509 4.45571L7.18074 4.99932ZM6.25067 5.48726L6.89426 5.4854L6.89403 5.47413L6.25067 5.48726ZM6.26927 11.9043L5.62577 11.9062L5.62582 11.9244L5.6269 11.9426L6.26927 11.9043ZM7.23345 12.4391L7.54504 13.0021L7.57458 12.9858L7.60226 12.9664L7.23345 12.4391ZM8.722 15.8005C4.81265 15.8005 1.6435 12.6313 1.6435 8.722H0.3565C0.3565 13.3421 4.10186 17.0875 8.722 17.0875V15.8005ZM15.8005 8.722C15.8005 12.6313 12.6313 15.8005 8.722 15.8005V17.0875C13.3421 17.0875 17.0875 13.3421 17.0875 8.722H15.8005ZM8.722 1.6435C12.6313 1.6435 15.8005 4.81265 15.8005 8.722H17.0875C17.0875 4.10186 13.3421 0.3565 8.722 0.3565V1.6435ZM8.722 0.3565C4.10186 0.3565 0.3565 4.10186 0.3565 8.722H1.6435C1.6435 4.81265 4.81265 1.6435 8.722 1.6435V0.3565ZM11.9683 9.91238C12.3045 9.69348 12.6861 9.3299 12.6854 8.80273C12.6847 8.26113 12.2849 7.90875 11.9392 7.70897L11.2952 8.82327C11.3411 8.84982 11.3739 8.87295 11.3963 8.8912C11.4188 8.90954 11.4279 8.92053 11.4292 8.92226C11.4304 8.92367 11.4223 8.91381 11.414 8.89193C11.4098 8.881 11.4058 8.86777 11.4029 8.8525C11.4 8.83718 11.3985 8.82102 11.3984 8.80448C11.3984 8.78797 11.3999 8.77246 11.4025 8.75841C11.4051 8.74443 11.4085 8.7329 11.4118 8.72405C11.4183 8.70653 11.4234 8.70114 11.4189 8.70734C11.4141 8.71372 11.4015 8.72905 11.3758 8.75187C11.3503 8.77458 11.3145 8.80227 11.2661 8.83379L11.9683 9.91238ZM11.9988 7.74795L7.5623 4.48115L6.79918 5.5175L11.2356 8.7843L11.9988 7.74795ZM7.52509 4.45571C7.17627 4.23475 6.70387 4.11885 6.26636 4.32314C5.7933 4.54401 5.59756 5.02327 5.6073 5.50039L6.89403 5.47413C6.89264 5.40607 6.90605 5.39332 6.8964 5.41179C6.89144 5.42128 6.88185 5.4359 6.86576 5.45147C6.8496 5.46711 6.83066 5.48003 6.81085 5.48928C6.77032 5.50821 6.74503 5.50375 6.75035 5.5045C6.75653 5.50537 6.78705 5.51169 6.83639 5.54294L7.52509 4.45571ZM5.60717 5.48913L5.62577 11.9062L6.91276 11.9025L6.89416 5.4854L5.60717 5.48913ZM5.6269 11.9426C5.6513 12.3524 5.7915 12.8527 6.25638 13.101C6.71461 13.3457 7.2031 13.1914 7.54504 13.0021L6.92185 11.8761C6.87781 11.9004 6.84225 11.9162 6.81517 11.9261C6.78797 11.936 6.77241 11.9388 6.76757 11.9395C6.76299 11.9401 6.77151 11.9384 6.79 11.9411C6.79928 11.9424 6.81058 11.9449 6.8233 11.949C6.83608 11.9531 6.84938 11.9587 6.86268 11.9658C6.87599 11.9729 6.88821 11.9809 6.89913 11.9896C6.91001 11.9982 6.91876 12.0067 6.92554 12.0143C6.93912 12.0294 6.94307 12.0388 6.9416 12.0357C6.93998 12.0322 6.9339 12.018 6.92741 11.9889C6.92095 11.96 6.91482 11.9197 6.91163 11.8661L5.6269 11.9426ZM7.60226 12.9664L11.986 9.90041L11.2484 8.84576L6.86463 11.9118L7.60226 12.9664Z"
										fill="#F5B65D"
										fill-opacity="0.56"
									/>
								</svg>
							}
							title="시나리오 완수 횟수"
							value={targetDistanceAchievedCount + "회"}
						/>
						<RecordItem
							pictogram={
								<svg
									width="17"
									height="17"
									viewBox="0 0 17 17"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M4.47389 10.2627L7.71577 7.02078L10.0314 9.3364L12.8101 6.55765M2.8525 15.82C1.82939 15.82 1 14.9906 1 13.9675V2.8525C1 1.82939 1.82939 1 2.8525 1H13.9675C14.9906 1 15.82 1.82939 15.82 2.8525V13.9675C15.82 14.9906 14.9906 15.82 13.9675 15.82H2.8525Z"
										stroke="#F5B65D"
										stroke-opacity="0.56"
										stroke-width="1.287"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							}
							title="평균 페이스"
							value={paceMinutes + "m " + paceSeconds + "s"}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
