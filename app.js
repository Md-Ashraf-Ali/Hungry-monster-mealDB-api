
const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
    .catch(error => showDisplayError(' Hi!, something is wrong!! please try again later.'));
}

const displayMeals = items => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = "";
    items.forEach(item => {
      const mealDiv = document.createElement('div');
      mealDiv.className = 'meal-style';
      const mealInfo = `
      <h3 class="meal-header">${item.strMeal}</h3>
      <img class ="img-size" src ="${item.strMealThumb}">
      <button onclick = "displayMealDetails('${item.idMeal}')">Details</button>
      `;
      mealDiv.innerHTML = mealInfo;
      mealContainer.appendChild(mealDiv);
    })

    const displayHideDetails = document.getElementById('Meal-thumb');
    displayHideDetails.style.display = "none";
} 

 const displayMealDetails = (details) => {
     console.log(details);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details}`
    fetch(url)
    .then(res => res.json())
    .then(data => showDetails(data.meals[0]))
}

const showDetails = thumb =>{
    const thumbDiv = document.getElementById('Meal-thumb');
    thumbDiv.style.display ="block";
    thumbDiv.innerHTML = `
    <img class="thumb-img" src="${thumb.strMealThumb}">
    <h4 class="meal-info">${thumb.strArea}</h4>
    <h3 class="meal-header">${thumb.strMeal}</h3>
    <p class="meal-info">${thumb.strInstructions}</p>
    `;

    const displayHide = document.getElementById('meal-container');
    displayHide.style.display = "none";
}
const showDisplayError = error => {
    const missingTag = document.getElementById('error-message');
    missingTag.innerText = error;
}




