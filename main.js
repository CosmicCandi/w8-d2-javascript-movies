//Script to create an array of my 5 favorite movies

movie_array = []

class Movie {
  constructor(title, director_list, genre_list, year, actor_list, value, imdb_rating, imdb_meta){
    this.title = title
    this.director_list = director_list
    this.genre_list = genre_list
    this.year = year
    this.actor_list = actor_list
    this.imdb_rating = imdb_rating
    this.imdb_meta = imdb_meta
  }
}

lilo_stitch = new Movie("Lilo & Stitch", ["Dean DeBois","Chris Sanders"], ["Animation", "Adventure", "Comedy"], "2002", ["Daveigh Chase", "Chris Sanders", "Tia Carrere", "David Ogden Stiers", "Kevin McDonald", "Ving Rhames", "Zoe Caldwell", "Jason Scott Lee", "Kevin Michael Richardson"])

negotiator = new Movie("The Negotiator", ["F. Gary Gray"], ["Action", "Crime", "Drama"], "1998", ["Samuel L. Jackson", "Kevin Spacey", "David Morse"])

guardians = new Movie("Guardians of the Galaxy", ["James Gunn"], ["Action", "Adventure", "Sci-Fi"], "2014", ["Chris Pratt", "Zoe Saldana", "Dave Bautista", "Vin Diesel", "Bradley Cooper", "Karen Gillan", "John C. Reilly", "Glenn Close", "Djimon Hounsou", "Michael Rooker", "Lee Pace"])

avatar = new Movie("Avatar", ["James Cameron"], ["Action", "Adventure", "Fantasy"], "2009", ["Zoe Saldana", "Sam Worthington", "Sigourney Weaver", "Giovanni Ribisi"])

josie = new Movie("Josie and the Pussycats", ["Harry Elfont", "Debra Kaplan"], ["Comedy", "Music"], "2001", ["Tara Reid", "Rachel Leigh Cook", "Rosario Dawson", "Alan Cumming", "Parker Posey"])

//Populate the movies array one at a time
movie_array.push(lilo_stitch)
movie_array.push(negotiator)
movie_array.push(guardians)
movie_array.push(avatar)
movie_array.push(josie)

//Write a sorting function
function compare_titles(m1, m2){
  m1title = m1.title
  m2title = m2.title

  //1st Movie Less than 2nd Movie
  if (m1title < m2title) {
    return -1
  }
  //1st Movie is greater than 2nd Movie
  if (m1title > m2title) {
    return 1
  }
  //They're equal
  return 0
}

//Sort the array
movie_array.sort(compare_titles)

console.log(JSON.stringify(movie_array))

element = document.getElementById('movies')
movie_array.forEach(function(movie){
  row = ""
  row += "<tr>"
  row += "<td>" + movie.title + "</td>"
  row += "<td>" + movie.director_list + "</td>"
  row += "<td>" + movie.genre_list + "</td>"
  row += "<td>" + movie.year + "</td>"
  row += "<td>" + movie.actor_list + "</td>"
  row += "</tr>"

  element.innerHTML += row

})
