# Main script to start scraping process
from scraper import Scraper

if __name__ == '__main__':
    url = 'https://www.example.com/collection'  # Collection URL
    scraper = Scraper(url)
    scraper.scrape_collection_links()
