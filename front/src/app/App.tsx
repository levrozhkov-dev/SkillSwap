import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:2000/')
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return <>Hello Project</>;
}

export default App;
