import { useContext } from "react"
import { ThemeContext } from "../App"

export default function Recipes({recipe}){

  const darkTheme = useContext(ThemeContext)

  const themeStyles = {
    backgroundColor: darkTheme ? '#333':'white',
    color: darkTheme ? '#CCC':'#333'
  }

    const showRecipes =(recipe)=>{

        return <div
        style={themeStyles}
        id={crypto.randomUUID}
        className='recipe-item'>
          <h3>{recipe.title}</h3>
          <img
          src={recipe.image} alt={recipe.title}/>
        </div>
      }

      return (<>
      {
        showRecipes(recipe)
        }
   </> )

}