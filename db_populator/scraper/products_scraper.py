# Core scraping logic
from selenium import webdriver
from .page_parser import MY_HTML_PARSER
import time
import random

class Scraper:
    def __init__(self, url):
        self.url = url
        options = webdriver.ChromeOptions()
        #options.add_argument("--headless")
        self.driver = webdriver.Chrome(options=options)#version_main=114
        self.driver.implicitly_wait(15)


    def scrape_collection_links(self):
        print('----------------------- Scraping collection links -----------------------')      
        self.driver.get(self.url)
        product_links = MY_HTML_PARSER.parse_product_links(self.driver.page_source)
        print("----------------------- Done scraping collection links -----------------------")
        print(product_links)
        print('----------------------- Scraping products details -----------------------')      
        for link in product_links:
            print(f'----------- Scraping product :  {link}')
            time.sleep(random.uniform(2, 4))
            self.scrape_product_details(link)
            print(f'----------- Done Scraping product -----------')         
        self.driver.quit()

    def scrape_product_details(self, product_url):
        self.driver.get(product_url)
        product_details = MY_HTML_PARSER.parse_product_details(self.driver.page_source)
        print(product_details)
        # Process and save these details to the database
