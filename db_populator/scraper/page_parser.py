from bs4 import BeautifulSoup
from utils.array_utils import ArrayUtils

# Parse HTML content
class MY_HTML_PARSER:
    def parse_product_links(html_content):
        product_links = []

        # Parse and return product links
        soup = BeautifulSoup(html_content, 'html.parser')
        ul_elem = soup.select_one("ul.Collection_list__JGj0g")
        for li_elem in ul_elem:
            a_elem = li_elem.select_one("a")
            product_links.append(a_elem['href'])
        return ArrayUtils.remove_duplicates_ordered(product_links) 

    def parse_product_details(html_content):
        # Parse and return product details as an object
        soup = BeautifulSoup(html_content, 'html.parser')
        div_elem = soup.select_one("div#content")
        if div_elem:
            return div_elem.text
        else:
            return 'For some reason this one returns NONE' 
