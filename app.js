
const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container');
    meals.forEach(meal => {
      const mealDiv = document.createElement('div');
      mealDiv.className = 'meal-style';
    //   const h3 = document.createElement('h3');
    //   h3.innerText = meal.strCategory;
    //   mealDiv.appendChild(h3);
    //   const p = document.createElement('p');
    //   p.innerText = meal.strInstructions;
    //   mealDiv.appendChild(p);

      const mealInfo = `
      <h3 class="meal-header">${meal.strCategory}</h3>
      <p class="meal-info">${meal.strInstructions}</p>
      <button onclick ="displayMealDetails('${meals.strMealThumb}')">Details</button>
      `;

      mealDiv.innerHTML = mealInfo;
      mealContainer.appendChild(mealDiv);
    })
} 


displayMealDetails = details => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${details}`
    fetch(url)
    .then(res => res.json())
    .then(data = console.log(meals[0]));

}
const strMealThumb = thumb =>{
    console.log(thumb);
    const thumbDiv = document.getElementById('Meal-thumb');
    thumbDiv.innerHTML = `
    <img src="www.themealdb.com\/images\/media\/meals\/qxytrx1511304021.jpg"">
    `
}



// function searchMeal(e){
//     e.presentDefault();

//     singleMeal.innerHTML = "";

//     const term = search.value;

//     if (term.trim()) {
//         fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             resultHeading.innerHTML = `<h2> Search Result for ${term}`;
//             if (data.meals === null){
//                 resultHeading.innerHTML = `<h2> There Are No Result for ${term}`;

//             }
//             else{
//               mealEl.innerHTML = data.meals.map(
//                 meal =>`
//                     <div class = "meal">
//                     <img src = " ${meal.strMealThumb}" alt = "${meal.strMeal}">
//                     </div>
//                     `
//              );
//            }
//         });
        
//     }
// }


// submit.addEventListener('submit',searchMeal);
