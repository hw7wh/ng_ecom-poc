import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class WebpageInteractionHelper:
    def __init__(self, driver):
        self.driver = driver

    def scroll_to_bottom(self, pause_time=1.5):
        """Scrolls the web page to the bottom."""
        screen_height = self.driver.execute_script("return window.innerHeight;")
        scrolled_height = 0

        while True:
            # Scroll down to bottom
            self.driver.execute_script("window.scrollBy(0, arguments[0]);", screen_height)
            # Wait to load page
            time.sleep(pause_time)
            # Calculate new scroll height and compare with last scroll height
            scrolled_height += screen_height
            total_height = self.driver.execute_script("return document.body.scrollHeight;")

            if scrolled_height >= total_height:
                break

    def wait_for_element(self, locator, timeout=10):
        """Waits for an element to be loaded on the page."""
        WebDriverWait(self.driver, timeout).until(
            EC.presence_of_element_located(locator) # ("By.ID", "someElementId")
        )
