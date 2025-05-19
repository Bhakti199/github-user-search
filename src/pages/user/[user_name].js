import { useRouter } from "next/router";

function UserDetailsPage() {
  const router = useRouter();
  const { user_name } = router.query;
  console.log("user_name", user_name);
  return (
    <div>
      <h1>User details</h1>
    </div>
  );
}

export default UserDetailsPage;
