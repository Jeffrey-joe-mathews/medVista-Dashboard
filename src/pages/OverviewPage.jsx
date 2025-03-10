import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";
import UserDemographicsChart from "../components/users/UserDemographicsChart";

const OverviewPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='medVista Overview' className="text-center" />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
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

				{/* CHARTS */}

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<SalesOverviewChart />
					<CategoryDistributionChart />
					{/* <SalesChannelChart /> */}
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
					{/* <UserGrowthChart />
					<UserActivityHeatmap /> */}
					<UserDemographicsChart />
				</div>
			</main>
		</div>
	);
};
export default OverviewPage;
