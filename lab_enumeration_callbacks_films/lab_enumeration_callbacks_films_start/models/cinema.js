const Cinema = function (films) {
  this.films = films;
};





Cinema.prototype.findAllTitles = function (){
  const result = this.films.map((film) => {
    return film.title;
  })
  return result;
};


Cinema.prototype.findFilmByTitle = function(name){
  return this.films.find(film => film.title === name);
};

Cinema.prototype.filterFilmsByGenre = function(genre){
  const result = this.films.filter(film => film.genre === genre);
  return result;
}

Cinema.prototype.filterFilmsByYear = function(year){
  const result = this.films.filter(film => film.year === year);
  return result;
}

Cinema.prototype.filterFilmsByDuration = function(time){
  const result = this.films.filter(film => film.length > time);
  return result;
}

Cinema.prototype.totalRunningTime = function(){
  const total = this.films.length.reduce((accumulator, 1) => {

    })
    return total;
}

module.exports = Cinema;
