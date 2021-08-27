
const searchFood = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // Clear Data
    searchField.value = '';
    if (searchText == '') {
        // 
    }
    // Load Data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displaySearchResult(data.meals)
    }
    catch (error) {
        console.log(error);
    }

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displaySearchResult(data.meals))
}


const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML = '';
    searchResult.textContent = '';
    if (meals.length == 0) {
        // 
    }
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
}

const loadMealDetail = async mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0]);

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {
    // console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetails.appendChild(div);
}

