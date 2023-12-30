# Main script to start scraping process
from .scraperr import Scraper
from ..config.collectionsUrls import EXPORTED_COLLECTIONS_URLS

if __name__ == '__main__':
    url = EXPORTED_COLLECTIONS_URLS[0]
    scraper = Scraper(url)
    scraper.scrape_collection_links()
