
async function getMealInfo(){
    const mealName=document.getElementById("meal-name").value;
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
    const data=await response.json();
    const meal=data.meals?data.meals[0]:null;

    if(meal){
        const mealHeader=document.getElementById("meal-header");
        const mealContainer=document.getElementById("meal-container");
        const videoContainer=document.getElementById("video-container");
        const textContainer=document.getElementById("text");
        mealHeader.innerHTML=`
            <h3>${meal.strMeal}</h3>

        `
        mealContainer.innerHTML=`
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        ` 
        videoContainer.innerHTML=`            
            ${meal.strYoutube ? `<iframe width="460" height="300" src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}" frameborder="0" allowfullscreen></iframe>` : ''}
        `
        textContainer.innerHTML=`
            <p>${meal.strInstructions}</p>

        `
    }
    else{
        alert("Yemek tapilmadi");
    }
}