const apiUrl = "https://www.themealdb.com/api/json/v1/1";

fetch(`${apiUrl}/search.php?s=chicken`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: Código de estado ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const meals = data.meals;
    if (meals) {
      meals.forEach((meal) => {
        console.log(`Nombre de la receta: ${meal.strMeal}`);
      });
    } else {
      console.log("No se encontraron recetas.");
    }
  })
  .catch((error) => {
    console.error(error);
  });