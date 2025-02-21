import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const expenditureData = [
	{ name: "Jul", expenditure: 420 },
	{ name: "Aug", expenditure: 800 },
	{ name: "Sep", expenditure: 5100 },
	{ name: "Oct", expenditure: 460 },
	{ name: "Nov", expenditure: 500 },
	{ name: "Dec", expenditure: 720 },
	{ name: "Jan", expenditure: 6100 },
	{ name: "Feb", expenditure: 5900 },
	{ name: "Mar", expenditure: 600 },
	{ name: "Apr", expenditure: 0 },
	{ name: "May", expenditure: 100 },
	{ name: "Jun", expenditure: 7500 },
];

const SalesOverviewChart = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Yearly Overview</h2>

			<div className='h-80'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<LineChart data={expenditureData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey={"name"} stroke='#9ca3af' />
						<YAxis stroke='#9ca3af' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type='monotone'
							dataKey= 'expenditure'
							stroke='#6366F1'
							strokeWidth={3}
							dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default SalesOverviewChart;
