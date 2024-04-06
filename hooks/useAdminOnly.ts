import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { isAdmin } from "@/actions/auth";

export default function useAdminOnly() {
  const router = useRouter();
  useEffect(() => {
    async function checkAccess() {
      const access = await isAdmin();
      if (!access) {
        router.push("/");
      }
    }
    checkAccess();
  }, [router]);
}
