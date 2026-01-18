import { useEffect } from 'react';
import { GlobalStyles } from '../shared/styles/theme';


function App() {
  useEffect(() => {
    fetch('http://localhost:2000/')
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <GlobalStyles />
      <p>Hello Project</p>
    </>
  );
}

export default App;
