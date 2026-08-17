export default async function User() {
    return (
        <div>
            <h1>Here are the Users</h1>
            <table border={1}>
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>View</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Akash</td>
                        <td>akash@9891gmai.com</td>
                        <td>83377383</td>
                        <td ><a href="/users/1">View</a> </td>
                    </tr>
                    <tr>
                        <td>Akash</td>
                        <td>akash@9891gmai.com</td>
                        <td>83377383</td>
                        <td ><a href="/users/1">View</a> </td>
                    </tr>
                    <tr>
                        <td>Akash</td>
                        <td>akash@9891gmai.com</td>
                        <td>83377383</td>
                        <td ><a href="/users/3">View</a> </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}