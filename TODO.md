# HIGH PRIORITY !!

## Scraper : (highest priority)

DONE - focus on the mighty cotton collection 7 prods

DONE - analysis : scraped data source : html ? json? (json_parser + html_parser ?) # FYI : pics/color !!
-SOLUTION-> html parsing 

DONE- test one of the large collections

DONE- test a couple of different collections

DONE - from last run of app check terminal stdout and look why some products don't return nth --> probablu time to load / or network related stuff

DONE - test if scraping multiple pages doesn't trigger a 403 or else


- try catch ( for exceptions )

- get rid of les doublons in the array with the link to the details pages of the products

- wrape the get of the webdriver to add reconnects 

- test (blkhef) concurency in anothe branch

- complete the refactoring ( readme + requirements(auto))


- analysis : returned data structure

- *MODIFY FE conception since we are cloning the website*

- back to conception

- scrape and populate db w/ products ( db prod )

- scrape fabrics ? collections ?

## BE : (very high priority)

- Init project structure

## UI : (high priority)

- template for listing products

## FE : (high priority)

- rethink folder structure / modules ( standalone components ???)

---

# FE : (major priority)

1. Product model

   1. Create data.ts
      1. Add sample products ( generate w/ gpt )
   2. Add images to assets or link to some cdn w/ corresponding images
   3. Create Product service
   4. Create Generic Product Listing component
      1. Title
      2. Filter
      3. Product Grid

2. Search
   1. Add method to Food service
   2. Add search route
   3. Show search result in Home component
   4. Generate search component
      1. Add to home component
      2. Add ts
      3. Add html
      4. Add css

---

# UI : (minor priority)

review that all is well integrated UI & routing !

- fix : z index problem of /contact-us page ( can't click on navbar)
- fix : z index men/women menu desktop of /about-us page ( hero img above menu )
- less random text
- add page 404 + routing
- template for listing collections

---

# CMS & CRM : ( least priority )
- Contentful
- Salesforce
