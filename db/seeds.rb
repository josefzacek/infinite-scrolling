# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

150.times do
  Post.create(title: Faker::Book.title,
              body: Faker::Lorem.paragraph(2, false, 4))

  sleep 3
end
