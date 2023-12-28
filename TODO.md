# HIGH PRIORITY !!

## Scraper : (highest priority)

- add test module for scrapper
- test _Request_ sinon _CurlCffi_ >> _UC_
- analysis : scraped data source : html ? json? (json_parser + html_parser ?) # FYI : pics/color !!
- analysis : returned data structure

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
