# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'destroying all previous info of 

-- Genres 
-- Trope
-- Location
-- User

-- Book Author, Location, genre, trope

'

BookAuthor.destroy_all
BookGenre.destroy_all
BookTrope.destroy_all
BookLocation.destroy_all

Genre.destroy_all
Trope.destroy_all
Location.destroy_all
Author.destroy_all
User.destroy_all




puts "seeding of constant elements begins"


puts " ----

seeding test User
----

"
testUser1 = User.create(first_name:"Isa", last_name:"Woobly", user_name:"IsaReader", email:"woobly@123.com", password:"123")
testUser2 = User.create(first_name:"Test", last_name:"Woobly", user_name:"TestReader", email:"test@123.com", password:"123")


puts "

seeding Genre

"
Genre.create!([
    {name: "Historical Fiction"},
    {name: "Plays"},
    {name: "Fiction"},
    {name: "Fantasy"},
    {name: "Bopgraphy"},
    {name: "Science-Fiction"},
    {name: "Romance"},
    {name: "Myster"},
    {name: "Thriller"},
    {name: "Horror"},
    {name: "Western"},
    {name: "Speculative Fiction"},
    {name: "Dystopian"},
    {name: "Magical Realism"},
    {name: "Realist"},
    {name: "Action & Adventur"},
    {name: "Suspence"},
    {name: "Women's Fiction"},
    {name: "LGBTQ+"},
    {name: "Contemporary Fiction"},
    {name: "Graphic Novel"},
    {name: "Short Story"},
    {name: "Young Adult"},
    {name: "New Adult"},
    {name: "Childrens"},
    {name: "Memoir"},
    {name: "Autobiography"},
    {name: "Food & Drink"},
    {name: "Art & Photography"},
    {name: "Self-help"},
    {name: "History"},
    {name: "Travel"},
    {name: "True Crime"},
    {name: "Humor"},
    {name: "Essays"},
    {name: "Guide/How-to"},
    {name: "Religion"},
    {name: "Spirituality"},
    {name: "Humanities"},
    {name: "Social Sciences"},
    {name: "Science"},
    {name: "Technology"}
])

puts "

seeding Trope

"
Trope.create!([ 
    {name: "Chosen One"},
    {name: "Secret Heir"},
    {name: "Evil Overlord"},
    {name: "Reluctant Hero"},
    {name: "Mentor"},
    {name: "World that never Progresses"},
    {name: "Pseudo-Europen Medieval Setting"},
    {name: "Soul Mates"},
    {name: "Second Chance"},
    {name: "Orphan"},
    {name: "Rejected as Unworthy"},
    {name: "Enemies to Lovers"},
    {name: "Royal"},
    {name: "Widow"},
    {name: "Femme Fatale"},
    {name: "Waiting Evil"},
    {name: "Vamp"},
    {name: "Woman Scorned"},
    {name: "Loveable Rogue"},
    {name: "Found Family"},
    {name: "Rivals"},
    {name: "Ancient Setting"},
    {name: "Time Travel"},
    {name: "Powerful Artifacts"},
    {name: "Fairytale Retelling"},
    {name: "Love Triangle"},
    {name: "Magic"},
    {name: "Magic School"},
    {name: "Mistaken Identity"},
    {name: "Heroes Quest"},
    {name: "Training Sequence"}
])

puts ' 

Seeding Locations 

'
Location.create!([
    {name: "iBooks"},
    {name: "Kindle"},
    {name: "Nook"},
    {name: "Office Library"},
    {name: "Bedroom Library"},
    {name: "Attic Library"},
    {name: "Packed In Moving Box"}
])

puts '

seeding Authors 

'

Author.create!([
    {first_name:"JK",
        last_name:"Rowling"
    },
    {first_name:"F Scott",
        last_name:" Fitzgerald"
    },
    {first_name:"William",
        last_name:"Shakespear"
    }
])

puts '

seeding Books 

'

Book.create!([
    {title: "Harry Potter and Sommething Happens",
        user_id: 2,
        price: 15.99,
        comment: "This is the best book ever! not really, its just ok"
    },
    {title: "Hamlet",
        user_id: 1,
        price: 5.00,
        comment: "Reminds me of the Lion King somehow"
    },
    {title: "The Great Gatsby",
        user_id: 1,
        price: 12.99,
        comment: "I still dont know why English teachers love this book so much"
    }
])

puts " 
seeding book_genre
"
BookGenre.create!([
    {book_id: 1,
    genre_id: 22
    },
    {book_id: 2,
    genre_id: 2
    },
    {book_id: 3,
    genre_id: 7
    },
])

puts '
seeding bookLocation
'
BookLocation.create!([
    {book_id:1,
    location_id:2
    },
    {book_id:2,
    location_id:7
    },
    {book_id:3,
    location_id:5
    }
])

puts "
seeding book author
"
BookAuthor.create!([
    {book_id:1,
    author_id:1
    },
    {book_id:2,
    author_id:3
    },
    {book_id:3,
    author_id:2
    }
])