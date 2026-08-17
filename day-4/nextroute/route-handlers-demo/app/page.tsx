import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Hii It is demo of API Routing</h1>
      <ul>
        <li>/api</li>
        <li>/api/users</li>
      </ul>
      
    </div>
  );
}
