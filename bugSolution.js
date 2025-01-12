The solution is to ensure that `useParams` is used within a component rendered by a route.  Here is the corrected code:

```javascript
import { useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  return <div>Component {id}</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/:id" element={<MyComponent />}/>
    </Routes>
  );
}

export default App;
```

In this example, `MyComponent` is now correctly nested within a `<Route>` component, allowing `useParams` to access the route parameters.