```javascript
import {useRouter} from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Check if the route is already active before pushing
    if (router.pathname !== '/my-route') {
      // Or use replace to avoid adding to browser history
      router.replace('/my-route');
    }
  };

  return (
    <button onClick={handleClick}>Go to My Route</button>
  );
}

export default MyComponent;```