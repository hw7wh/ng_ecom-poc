# Database connection setup
import os
from dotenv import load_dotenv

load_dotenv()  # Load variables from .env file

mongo_uri = os.getenv('MONGO_URI')
