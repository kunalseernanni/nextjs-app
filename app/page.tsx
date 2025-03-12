import client from "@/db"
async function getUserDetails() {

  const response = await client.user.findFirst({})
  return {
    email: response?.username,
    name: "kunal"
  }
}
export default async function Home() {
  const userData = await getUserDetails();
  
  return (
    <div>
      {userData.name}
      {userData.email}
    </div>
  );
}
