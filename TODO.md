# HIGH PRIORITY !!

## Scraper : (highest priority)

DONE - get rid of les doublons in the array with the link to the details pages of the products

DONE - testing headless ( doesn't work => scroll down probably needed )

- wrape the get of the webdriver to add :
   - add scroll down ( to load ajax)
   - enable reconnects
   - get rid of popups

- try catch ( for exceptions )

- scraped.txt -> model ( process data w/ BS4)

- test new collections

- test (blkhef) concurency in anothe branch

- complete the refactoring ( loader + .env + readme + requirements(auto))
   - Scraper: Retrieves the scraper configuration from Loader to know which URLs to scrape, delays between requests, etc. ( chrome options like *headless*)
   - DataProcessor: May require certain configuration parameters for data cleaning, formatting, etc.
   - Database Module: Retrieves the MongoDB URI from Loader and any other relevant database settings to establish a connection to MongoDB and push data.

- analysis : returned data structure

- *MODIFY FE conception since we are cloning the website*

- model -> db ( database )

- scrape and populate db w/ products ( db prod )


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

# SCRAPER : (minor priority)
- scrape fabrics ? collections ?

---

# CMS & CRM : ( least priority )
- Contentful
- Salesforce
