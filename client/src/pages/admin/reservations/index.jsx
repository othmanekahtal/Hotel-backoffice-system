import { ReservationTable } from "../../../components/admin/reservationTable";

export const ReservationDashboard = () => {
    return (
        <div>
            <div className="container mx-auto">
                <h1 className="text-4xl font-extrabold p-7 dark:text-white">Rooms Dashboard</h1>
                <div className="flex gap-6 flex-col lg:flex-row lg:justify-between">
                    <div className="w-full">
                        <ReservationTable />
                    </div>
                </div>
            </div>
        </div>
    );
};
