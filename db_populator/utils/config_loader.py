from dotenv import load_dotenv
import os
import yaml
import json

class Loader:
    def __init__(self, url):
        # Load .env file
        load_dotenv()
        # Get MongoDB URI from .env
        self.mongo_uri = os.getenv('MONGO_URI')
    
    def load_scraper_config():
        # Load scraper configuration from a JSON file
        with open('config/scraper_config.json', 'r') as file:
            return json.load(file)
    
    
    def load_db_config(path):
        # Load non-sensitive configurations from db_config.yaml
        with open('config/db_config.yaml', 'r') as file:
            return yaml.safe_load(file)
        
