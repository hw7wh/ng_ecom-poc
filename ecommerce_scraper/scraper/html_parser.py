from bs4 import BeautifulSoup

class MY_HTML_PARSER:
    def __init__(self, url):
        self.url = url
    # Parse HTML content

    def parse_product_links(html_content):
        product_links = []

        # Parse and return product links
        soup = BeautifulSoup(html_content, 'html.parser')
        ul_elem = soup.select_one("ul.Collection_list__JGj0g")
        for li_elem in ul_elem:
            a_elem = li_elem.select_one("a")
            product_links.append(a_elem['href'])
        return product_links

    def parse_product_details(html_content):
        # Parse and return product details
        pass
