# Wearables E-Commerce Scrapper

## Overview
Scraper to populater ecommerce poc

## Folder structure

```
ecommerce_scraper/
│
├── scraper/
│   ├── __init__.py
│   ├── main.py                # Main script to start scraping process
│   ├── scraper.py             # Core scraping logic
│   ├── parser.py              # Parse HTML content
│   └── data_processor.py      # Process and format data for database
│
├── models/
│   ├── __init__.py
│   └── product.py             # Data models representing products, etc.
│
├── database/
│   ├── __init__.py
│   ├── db_connector.py        # Database connection setup
│   └── db_operations.py       # Database CRUD operations
│
├── utils/
│   ├── __init__.py
│   └── common_utils.py        # Utility functions, e.g., logging
│
├── requirements.txt           # Python dependencies
└── README.md                  # Project documentation

```

## Contributing
If you would like to contribute to this project, please feel free to submit a pull request.
