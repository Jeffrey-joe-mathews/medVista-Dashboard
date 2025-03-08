import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingBag, DollarSign, Heart, Activity, Thermometer, Pill, BriefcaseMedical, Shield } from "lucide-react";

// const INSIGHTS = [
// 	{
// 		icon: TrendingUp,
// 		color: "text-green-500",
// 		insight: "Revenue is up 15% compared to last month, driven primarily by a successful email campaign.",
// 	},
// 	{
// 		icon: Users,
// 		color: "text-blue-500",
// 		insight: "Customer retention has improved by 8% following the launch of the new loyalty program.",
// 	},
// 	{
// 		icon: ShoppingBag,
// 		color: "text-purple-500",
// 		insight: 'Product category "Electronics" shows the highest growth potential based on recent market trends.',
// 	},
// 	{
// 		icon: DollarSign,
// 		color: "text-yellow-500",
// 		insight: "Optimizing pricing strategy could potentially increase overall profit margins by 5-7%.",
// 	},
// ];
const INSIGHTS = [
	{
	  icon: Heart,
	  color: "text-red-500",
	  insight: "Heart rate is stable for all family members, with no abnormal spikes detected over the last 30 days.",
	},
	{
	  icon: Activity,
	  color: "text-blue-500",
	  insight: "Average daily step count across the family has increased by 12%, improving overall cardiovascular health.",
	},
	{
	  icon: Thermometer,
	  color: "text-yellow-500",
	  insight: "Recent flu season has seen a decrease in fever-related symptoms, suggesting higher immunity in the family compared to last year.",
	},
	{
	  icon: Pill,
	  color: "text-green-500",
	  insight: "Medication adherence has improved by 10% since setting up automated reminders for all family members.",
	},
	{
	  icon: BriefcaseMedical,
	  color: "text-orange-500",
	  insight: "Emergency room visits have decreased by 15% after implementing a proactive health check-up schedule.",
	},
	{
	  icon: Shield,
	  color: "text-purple-500",
	  insight: "Family vaccination rates have reached 90%, offering strong protection against seasonal infections.",
	},
  ];
  

const AIPoweredInsights = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1.0 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>AI-Powered Insights</h2>
			<div className='space-y-4'>
				{INSIGHTS.map((item, index) => (
					<div key={index} className='flex items-center space-x-3'>
						<div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
							<item.icon className={`size-6 ${item.color}`} />
						</div>
						<p className='text-gray-300'>{item.insight}</p>
					</div>
				))}
			</div>
		</motion.div>
	);
};
export default AIPoweredInsights;
