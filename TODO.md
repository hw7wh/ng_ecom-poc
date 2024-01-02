# HIGH PRIORITY !!

## Scraper : (highest priority)

- /collections /pages/fabrics --> loop all valide : home/fabrics/fabric --> for every prod intercept graphAPI call --> JSONparser -> savedb

- to avoid network issues when scraping collections (~fabrics) wait a sec scroll to bottom then to top then to bottom  

- do more research concerning the target website go route by route to figure out the categories, the relevant routes
==> starting pt : collections/ ( fabrics + special collections + collabs)
=> apply the rules and filter to :
   --> scrape fabrics
   --> scrape top categories, categories & subcategories ( by gender ? )
   --> ONLY scrape products that have a (topcat,cat,fabric)

- find a new sutable scraping strategie ( routes )
- what data to keep

- refactor scraper logic to integrate all the varaints of a same prod as
diff prods ( ask gpt for design pattern to solve this problem )

- scraped.txt -> model ( process data w/ BS4)
   - GPT HELP : main -> scraper -> parser -> data processor

- Up scraper:
   - scrape_variants_links() -> returns list of links
   - scrape_variants_details() ->

- try catch ( for exceptions )
   - create GPT convo w/ current code and ask for help in trycatch

- handle colors
   - first - collection url -> products urls -> 
   - then - product details page -> variants(colors) urls -> 
   - then - varianst details page -> scrape -> format -> saveDb



- test new collections

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

- test (blkhef) concurency in anothe branch

---

# CMS & CRM : ( least priority )
- Contentful
- Salesforce
