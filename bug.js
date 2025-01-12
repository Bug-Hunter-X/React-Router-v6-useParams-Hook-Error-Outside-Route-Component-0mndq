In React Router Dom v6, attempting to use the `useParams` hook outside of a component rendered within a route defined by `<Route>` or `<Routes>` will result in an error.  This is because `useParams` relies on the routing context provided by React Router.  Example of erroneous code:

```javascript
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams(); // Error: Cannot read properties of undefined (reading 'id')
  return <div>Component {id}</div>;
}

export default MyComponent;
```

This will throw an error because `MyComponent` isn't nested within a route. 