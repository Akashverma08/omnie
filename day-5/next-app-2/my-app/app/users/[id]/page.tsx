import { connectDB } from "@/lib/mondoDB";
import User from "@/models/user";

type UserPageProps = {
    params: Promise<{ id: string }>;
};

export default async function Userpage({ params }: UserPageProps) {

    const { id } = await params;

    await connectDB();

    const user = await User.findById(id);

    if (!user) {
        return <h1>User not found</h1>;
    }

    return (
        <div>
            <h1>User: {user.username}</h1>
            <p>City: {user.city}</p>
            <p>Contact: {user.contact}</p>
        </div>
    );
}