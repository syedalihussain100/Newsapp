import React, { useContext, useEffect } from 'react'
import Navbar from './component/Navbar'
import News from './component/News';
import "./App.css";
import ThemeContext from './context/Themecontext';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    localStorage.setItem('newstheme', JSON.stringify(theme));
  }, [theme])


  const toggletheme = () => {
    setTheme(!theme)
  }
  return (
    <div className={theme ? "light" : "dark"}>
      <Router>
        <Navbar toggle={toggletheme} theme={theme} />
        <Switch>
          <Route exact path="/">
            <News key="general" theme={theme} pageSize={5} country="us" category="general" />
          </Route>
          <Route exact path="/business">
            <News key="business" theme={theme} pageSize={5} country="us" category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News key="entertainment" theme={theme} pageSize={5} country="us" category="entertainment" />
          </Route>
          <Route exact path="/health">
            <News key="health" theme={theme} pageSize={5} country="us" category="health" />
          </Route>
          <Route exact path="/science">
            <News key="science" theme={theme} pageSize={5} country="us" category="science" />
          </Route>
          <Route exact path="/sports">
            <News key="sports" theme={theme} pageSize={5} country="us" category="sports" />
          </Route>
          <Route exact path="/technology">
            <News key="technology" theme={theme} pageSize={5} country="us" category="technology" />
          </Route>


        </Switch>
      </Router>

    </div>
  )
}

export default App











// import React, { Component } from 'react'
// import Navbar from './component/Navbar'
// import News from './component/News';
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="app">
//         <Navbar />
//         <News/>
//       </div>
//     )
//   }
// }

// export default App



/*
News Api Key : b9ff63836b064ce79cda127791005f7f
*/
