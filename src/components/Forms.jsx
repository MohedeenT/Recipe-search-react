const apiKey = process.env.REACT_APP_API_KEY

export default function Form({state,setState}){

    const getRecipes=async(queryString)=>{
        if (queryString.length === 0) {
            return      
        }
        if (state.testing) {
          console.log("test mode");
          setState(draft=>{draft.recipes=[{
            id: 656329,
            image: "https://spoonacular.com/recipeImages/656329-312x231.jpg",
            imageType: "jpg",
            title: "Pizza bites with pumpkin"
          } ]
        })
       } else
        try {
          const req = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${queryString}&apiKey=${apiKey}`)
          const res = await req.json()
          console.log(res);
          setState(draft=>{
            draft.recipes = res.results
          })
          
        } catch (error) {
          console.log(error);
        }
      }

    return(<form
        onSubmit={(e)=>{e.preventDefault();setState(draft=>{draft.queryString=""})}}>
        <h1>What type of food are you in the mood for?</h1>
        <input
        value={state.queryString}
        id="recipe-query-field"
        onChange={(e)=>{
          setState(draft=>{
            draft.queryString = e.target.value
          })
        }}
        ></input>
        <button
        id='search-btn'
        onClick={()=>{
          if (state.queryString.length ===0) {
            return
          }
          setState(draft=>{
            draft.queryTitle = state.queryString
          })
          getRecipes(state.queryString);
        }}
        >Search</button>
        </form>)
}