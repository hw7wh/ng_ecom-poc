# Main script to start scraping process
from scraper.products_scraper import Scraper
from utils.config_loader import Loader

# FOR DEBUG ONLY : unicode chars
import sys
import codecs

sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())
# ______

# scraper_config = Loader.load_scraper_config('config/scraper_config.json')
# db_config = Loader.load_db_config('config/db_config.yaml')


if __name__ == '__main__':
    collections_urls = [
        'https://www.outdoorvoices.com/collections/cloudknit',
        'https://www.outdoorvoices.com/collections/rectrek',
        'https://www.outdoorvoices.com/collections/mighty-cotton',
        'https://www.outdoorvoices.com/collections/recfleece',
        'https://www.outdoorvoices.com/collections/rec-poly'
    ]
    for url in collections_urls:
        # later on we would loop on the collections urls
        scraper = Scraper(url)
        scraper.scrape_collection_links()
