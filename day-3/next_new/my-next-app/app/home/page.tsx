export default async function Page() {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await data.json()

        return (
            <table border={2}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Street</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user: any) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address.street}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    } catch (err) {
        <h1>Error get </h1>

    }

}