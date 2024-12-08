```javascript
import {useRouter} from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // This will cause an infinite redirect loop if the route is already active
    router.push('/my-route');
  };

  return (
    <button onClick={handleClick}>Go to My Route</button>
  );
}

export default MyComponent;```