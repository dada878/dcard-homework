import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => token?.role === "admin",
  },
});

export const config = { matcher: ["/blogs/create", "/blogs/:id/edit"] };
