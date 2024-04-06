import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { isOwner } from "@/actions/auth";

export default function useAdminOnly() {
  const router = useRouter();
  useEffect(() => {
    async function checkAccess() {
      const access = await isOwner();
      if (!access) {
        router.push("/");
      }
    }
    checkAccess();
  }, [router]);
}
