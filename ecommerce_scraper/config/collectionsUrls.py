BASE_URL = 'https://www.outdoorvoices.com'

PRODUCTS_BY_COLLECTION_PAGE_URL = BASE_URL + '/collections'

FABRICS_LISTING_PAGE_URL = BASE_URL + '/pages/fabrics'

# Wearables collections to scrape
RECTREK_URL = "/rectrek"
CLOUDKNIT_URL = "/cloudknit"
LIGHTSPEED_URL = "/lightspeed"
MIGHTY_COTTON_URL = "/mighty-cotton"
ORGANIC_COTTON_JERSEY_URL = "/organic-cotton-jersey"
ORGANIC_COTTON_TERRY_URL = "/organic-cotton-terry"
BEACHTREE_COTTON_URL = "/beachtree-cotton"
NIMBUS_COTTON_URL = "/nimbus-cotton"
TEXTURED_COMPRESSION_URL = "/textured-compression"
TECH_SWEAT_URL = "/tech-sweat"
THINKFAST_URL = "/thinkfast"
FREEFORM_URL = "/freeform"
PRIMOFLEECE_URL = "/primofleece"
MEGAFLEECE_URL = "/megafleece"
SEAMLESS_URL = "/seamless-rib"
GRIDTEK_URL = "/gridtek"
RECFLEECE_URL = "/recfleece"
TSW_URL = "/train-stretch-woven"
REC_POLY_URL = "/rec-poly"
FROSTKNIT_URL = "/frostknit"
SOFTSHIELD_URL = "/softshield"

COLLECTIONS_URLS = [
    RECTREK_URL,
    CLOUDKNIT_URL,
    LIGHTSPEED_URL,
    MIGHTY_COTTON_URL,
    ORGANIC_COTTON_JERSEY_URL,
    ORGANIC_COTTON_TERRY_URL,
    BEACHTREE_COTTON_URL,
    NIMBUS_COTTON_URL,
    TEXTURED_COMPRESSION_URL,
    TECH_SWEAT_URL,
    THINKFAST_URL,
    FREEFORM_URL,
    PRIMOFLEECE_URL,
    MEGAFLEECE_URL,
    SEAMLESS_URL,
    GRIDTEK_URL,
    RECFLEECE_URL,
    TSW_URL,
    REC_POLY_URL,
    FROSTKNIT_URL,
    SOFTSHIELD_URL
]

EXPORTED_COLLECTIONS_URLS = [ PRODUCTS_BY_COLLECTION_PAGE_URL + collection for collection in COLLECTIONS_URLS]
