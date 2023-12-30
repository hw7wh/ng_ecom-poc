# E-Commerce Product Scraper

## Overview

This Python scraper is designed to extract product information from the Outdoor Voices e-commerce website. It populates a MongoDB database with data related to products, collections, and fabrics, and reviews.

## Features

- Scrape product's details page urls from designated collections pages found.
- Extract individual product information such as name, price, and description from product details pages.
- Save scraped data to a MongoDB database.

## Technology Stack

- **HTTP client**: Selenium
- **HTML parser**: BeautifulSoup4
- **Database**: Mongodb Atlas
- **Additional python packages**: pymongo,,

## Installation & Usage

### Requirements

- Python 3.x
- MongoDB Atlas account
- Python packages: `beautifulsoup4`, `pymongo`,`selenium`

### Setting Up the Development Environment

1. Clone the repository:
   ```
   git clone https://github.com/hw7wh/ng_ecom-poc ecomm-poc
   ```
2. Navigate to the project directory:
   ```
   cd ecomm-poc/ecommerce_scraper
   ```
3. set up virtual envirenement:
   ```
   python -m venv venv
   ```
4. Activate virtual environment:
   ```
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
5. Install required packages:
   ```
   pip install -r requirements.txt
   ```

### Running the Application

1. Navigate to the project directory:
   ```
   cd ecomm-poc/db_populator
   ```
2. To start the scraper, run:
   ```
   python main.py
   ```

## Configuration

1. Create a `.env` file at the project root (refer to `.env.example` as a template).
2. Add the following environment variables:
   ```
   MONGO_URI=your_mongodb_uri
   ```
3. Alternatively, set these variables in `config/settings.py` (not recommended for sensitive data like `MONGO_URI`).

## Scrapper Structure

- `main.py`: entry point
- `scraper/`: Core scraping logic
- `models/`: Data models representing the structure of scraped data.
- `database/`: Database connection and operations.
- `utils/`: General utility scripts and helper functions.
- `config/`: Configuration files (like .json or .yaml) that store settings and parameters.
- `data/`: Temporarily store data before pushing to MongoDB.
- `logs/`: Stors log files.
- `requirements.txt`: List of Python dependencies.

### Folder structure

```
ecommerce_scraper/
│
├── scraper/
│   |
│   ├── main.py                # Main script to start scraping process
│   ├── scraper.py             # Core scraping logic
│   ├── parser.py              # Parse HTML content
│   └── data_processor.py      # Process and format data for database
│
├── models/
|   |
│   └── product.py             # Data models representing products, etc.
│
├── database/
|   |
│   ├── db_connector.py        # Database connection setup
│   └── db_operations.py       # Database CRUD operations
│
├── utils/
|   |
│   └── common_utils.py        # Utility functions, e.g., logging
│
├── requirements.txt           # Python dependencies
└── README.md                  # Project
```

## Contributing

Contributions to this project are welcome. Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
