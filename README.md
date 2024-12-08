# Next.js Infinite Redirect Loop

This repository demonstrates a common error in Next.js applications: infinite redirect loops.  The `useRouter.push()` method, when used incorrectly, can lead to an app crashing due to endless route changes.

## Bug Description

The `bug.js` file contains a component that uses `useRouter.push()` to navigate to a route.  If the user is already on that route, calling `push()` again will trigger an infinite redirect loop, as the route remains unchanged and the method is continuously called.

## Solution

The `bugSolution.js` file shows how to resolve this issue by using the `router.replace()` method and/or checking the current route before attempting navigation to prevent unnecessary redirects.  This is a much safer and more robust approach.