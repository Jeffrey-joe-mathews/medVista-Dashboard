import { motion } from "framer-motion";
import { DollarSign, Users, ShoppingBag, Eye, ArrowDownRight, ArrowUpRight } from "lucide-react";

const overviewData = [
	{ name: "Revenue", value: "$1,234,567", change: 12.5, icon: DollarSign },
	{ name: "Users", value: "45,678", change: 8.3, icon: Users },
	{ name: "Orders", value: "9,876", change: -3.2, icon: ShoppingBag },
	{ name: "Page Views", value: "1,234,567", change: 15.7, icon: Eye },
];

const OverviewCards = () => {
	return (
		<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
			{overviewData.map((item, index) => (
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Money Spent' icon={Zap} value='$12,345' color='#6366F1' />
					<StatCard name='Family' icon={Users} value='4' color='#8B5CF6' />
					<StatCard name='Total Appointments This Year' icon={ShoppingBag} value='18' color='#EC4899' />
					<StatCard name='insurance Status' icon={BarChart2} value='active' color='#10B981' />
				</motion.div>
			))}
		</div>
	);
};
export default OverviewCards;
