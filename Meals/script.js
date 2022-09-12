// Getting data and creating products cards using Ajax 

$.ajax({
    type: 'get',
    url: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=canadian',
    success: function(response){
        var newItem = '';

        for(var i=0; i<response.meals.length; i++)
        {
            newItem  = `<div class='meal center'>
            <p>${response.meals[i].strMeal}</p>
            <img src="${response.meals[i].strMealThumb}">
            <p>${response.meals[i].idMeal}</p>
            </div>`;

            $('#meals').append(newItem);
        }
    },
    error: function(error)
    {
        alert('Error!!!')
    }
})

//End of the Ajax function