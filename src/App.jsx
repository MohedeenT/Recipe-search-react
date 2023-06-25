import { useImmer } from 'use-immer';
import React, { useState } from 'react';
import "./styles.css"
import Recipes from './components/Recipes';
import Form from './components/Forms';

export const ThemeContext = React.createContext()

function App() {

  const[darkTheme, setTheme] = useState(false)

  function toggleTheme(){
    setTheme(prevTheme => !prevTheme)
  }

  const[state, setState] = useImmer(
    {
    queryString:"",
    queryTitle:"",
    testing:false,
    recipes:[]
    }
  )


  return (
    <ThemeContext.Provider value={darkTheme}>
      <div
      id='btn-container'>
      {state.recipes.length !== 0 && <button
      id='theme-change-btn'
      onClick={toggleTheme}
      >{darkTheme ? "Light Theme":"Dark Theme"}</button>}
      </div>
    <div className="App">
      <Form state={state} setState={setState} />
      <div id='recipes' >
        {state.recipes.length === 0 && <p>Nohting to show</p>}
      <h2>{state.queryTitle}</h2>
        <div 
        className='recipe-container'>
          {state.recipes.map(recipe=><Recipes state={state} recipe={recipe}/>)}
        </div>
    </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
