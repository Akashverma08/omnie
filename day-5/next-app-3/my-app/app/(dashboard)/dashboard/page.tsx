import DashboardTable from "./components/DashboardTable";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function DashboardPage() {

    const cookiesStore = await cookies();
    const LoggedIn = cookiesStore.get("LoggedIn");

    if (!LoggedIn || LoggedIn.value !== "true") {
        redirect("/login");
    }
    return (
        <DashboardTable />
    );
}