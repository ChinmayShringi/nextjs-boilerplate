// export default authMiddleware({
//   publicRoutes: (req: NextRequest) =>
//     !req.nextUrl.pathname.startsWith('/dashboard'),
//   // eslint-disable-next-line consistent-return
//   afterAuth(auth, req) {
//     // handle users who aren't authenticated
//     if (!auth.userId && !auth.isPublicRoute) {
//       return redirectToSignIn({ returnBackUrl: req.url });
//     }
//   },
// });
export default function data() {}

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
