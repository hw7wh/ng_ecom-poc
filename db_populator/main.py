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
    COLLECTIONS_URL = 'https://www.outdoorvoices.com/collections'#?page=nbr

    for url in COLLECTIONS_URL:
        # later on we would loop on the collections urls
        scraper = Scraper(url)
        scraper.run()
