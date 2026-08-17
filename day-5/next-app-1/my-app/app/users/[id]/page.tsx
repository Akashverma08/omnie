export default async function Userpage({params}: {params: Promise<{id: string}>}){
    const {i}=await params;
    return (
        <h1>Users Id :{id}</h1>
    )
}