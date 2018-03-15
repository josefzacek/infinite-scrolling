[![Dependency Status](https://gemnasium.com/badges/github.com/josefzacek/infinite-scrolling.svg)](https://gemnasium.com/github.com/josefzacek/infinite-scrolling)

# Page scrolling
3 ways to load more records from database

Demo available at [https://infinite-scrolling.herokuapp.com/](https://infinite-scrolling.herokuapp.com/)

## Infinite Scrolling
Loads new records as user scrolls down

## Load more button
Loads more records on click of button at the bottom of page

## Paginate
Traditional pagination at the bottom of page

---

Ruby versin: 2.3.1

Rails version:  5.1.4

---

## Gems installed

* `gem 'will_paginate', '~> 3.1'`

* `gem 'bootstrap-sass', '~> 3.3', '>= 3.3.6'`

* `gem 'bootstrap-will_paginate', '~> 0.0.10'`

* `gem 'slim', '~> 3.0', '>= 3.0.7'`

## Gem removed

* `gem 'turbolinks'`

**NOTE:** I have tried multiple ways to get **Infinite Scrolling** and **Load more button** pages working with Turbolinks without refreshing page which seemed to be unsuccessful.

Removing **Turbolinks** was the only (**temporary**) option to fix this problem.

### All suggestions to get it working with Turbolinks more than welcome
