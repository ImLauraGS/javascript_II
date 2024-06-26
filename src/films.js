

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map((movie) => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
    let result =  array.filter((movie) => movie.director === director).map((movie) => movie);

    console.log("EXERCICE 2 ->", result);
    return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let result =  array.filter((movie) => movie.director === director).map((movie) => movie.score);
  let sum = result.reduce((acc, score) => acc + score, 0);
  let average = sum / result.length;
  console.log("EXERCICE 3 ->", average);
  return average;
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.map((movie) => movie.title).sort().slice(0, 20);
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = array
    .map((movie, index) => ({ index, movie }))
    .sort((a, b) => {
      const keyA = `${a.movie.year}-${a.movie.title}`;
      const keyB = `${b.movie.year}-${b.movie.title}`;
      return keyA.localeCompare(keyB);
    })
    .map(({ movie }) => movie);

  console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {

  let result =  array.filter((movie) => movie.genre.includes(category)).map((movie) => movie.score);

  let sum = result.reduce((acc, score) => acc + score, 0);
  let average = sum / result.length;

  console.log("EXERCICE 6 ->", average);

  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  return array.map((item) => {
    const [hours, minutes] = item.duration.split('h');
    let totalMinutes = parseInt(hours) * 60;

    if (minutes) {
      totalMinutes += parseInt(minutes);
    }

    return {
        ...item,
        duration: totalMinutes,
    };
  });
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  let result = array.filter((movie) => movie.year === year).reduce((acc, movie) => {
    if (acc.score < movie.score) {
      return movie;
    }
    return acc;
  });
  console.log("EXERCICE 8 ->", result);
  
  return [result];
  
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
