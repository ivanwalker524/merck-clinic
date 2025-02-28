import { DataTable } from "@/components/table/DataTable";
import StartCard from "@/components/StartCard";
import { getRecentAppointmentList } from "@/lib/actions/appointment.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { columns } from "@/components/table/columns";

const Admin = async () => {
	const appointments = await getRecentAppointmentList();

	return (
		<div className="mx-auto flex max-w-7xl flex-col space-y-14">
			<header className="admin-header">
				<Link
					href="/"
					className="cursor-pointer text-[28px] text-blue-500"
				>
					{/* <Image
						src="/assets/icons/logo-full.svg"
						width={162}
						height={32}
						alt="logo"
						className="h-8 w-fit"
					/> */}
					MERCK CLINIC
				</Link>
				<p className="text-16-semibold">Admin Dashboard</p>
			</header>
			<main className="admin-main">
				<section className="w-full space-y-4">
					<h1 className="header">Welcome 👋</h1>
					<p className="text-dark-700">
						Start the day with managing new appointment{" "}
					</p>
				</section>
				<section className="admin-stat">
					<StartCard
						type="appointments"
						count={appointments.scheduledCount}
						label="Scheduled appointments"
						icon="/assets/icons/appointments.svg"
					/>

					<StartCard
						type="pending"
						count={appointments.pendingCount}
						label="Pending appointments"
						icon="/assets/icons/pending.svg"
					/>

					<StartCard
						type="cancelled"
						count={appointments.cancelledCount}
						label="Cancelled appointments"
						icon="/assets/icons/cancelled.svg"
					/>
				</section>
				<DataTable columns={columns} data={appointments.documents} />
			</main>
		</div>
	);
};

export default Admin;
