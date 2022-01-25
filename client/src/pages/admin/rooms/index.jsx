import { RoomsAdminTable } from '../../../components/admin/roomTables';
import Nav from '../../../layouts/navBare';

export const RoomsDashBoard = () => {
    return (
        <div>
            <Nav />
            <div className="container mx-auto">
                <h1 className="text-4xl font-extrabold p-7 dark:text-white">Rooms Dashboard</h1>
                <div className="flex gap-6 flex-col lg:flex-row lg:justify-between">
                    <div className="w-full">
                        <RoomsAdminTable />
                    </div>
                </div>
            </div>
        </div>
    );
};
