import AppointmentForm from "@/components/forms/AppointmentForm";
import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";

import * as Sentry from "@sentry/nextjs";
import Link from "next/link";

export default async function NewAppointment({
	params: { userId },
}: SearchParamProps) {
	const patient = await getPatient(userId);

	Sentry.metrics.set("user_view_new-appointment", patient.name);
	return (
		<div className="flex h-screen max-h-screen">
			<section className="remove-scrollbar container my-auto">
				<div className="sub-container w-full max-w-[860px] flex-1 justify-between">
					{/* <Image
						src="/assets/icons/logo-full.svg"
						alt="patient"
						height={1000}
						width={1000}
						className="mb-12 h-10 w-fit"
					/> */}
					<p className="cursor-pointer text-[28px] text-blue-500">
						MERCK CLINIC
					</p>

					<AppointmentForm
						type="create"
						userId={userId}
						patientId={patient.$id}
					/>

					<p className="copright mt-10 py-12">
						{/* © 2024 CarePulse */}© 2024 Merk Clinic
					</p>
				</div>
			</section>
			<Image
				src="/assets/images/appointment-img.png"
				height={1000}
				width={1000}
				alt="appointment"
				className="side-img max-w-[390px] bg-bottom"
			/>
		</div>
	);
}
