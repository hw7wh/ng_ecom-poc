# Core scraping logic
import undetected_chromedriver as uc
from bs4 import BeautifulSoup
from .html_parser import MY_HTML_PARSER


class Scraper:
    def __init__(self, url):
        self.url = url
        #options = uc.ChromeOptions()
        #options.add_argument("--headless")

        self.driver = uc.Chrome()#version_main=114
        self.driver.implicitly_wait(15)

    def scrape_collection_links(self):
        
        self.driver.get(self.url)

        # print(response.text)

        product_links = MY_HTML_PARSER.parse_product_links(self.driver.page_source)
        print(product_links)
        for link in product_links:
            self.scrape_product_details(link)
        self.driver.quit()

    def scrape_product_details(self, product_url):
        self.driver.get(product_url)
        product_details = MY_HTML_PARSER.parse_product_details(self.driver.page_source)
        print(product_details)
        # Process and save these details to the database
