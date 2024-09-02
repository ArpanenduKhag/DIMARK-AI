import json
from facebook_business.api import FacebookAdsApi
from facebook_business.adobjects.adaccount import AdAccount
from facebook_business.adobjects.adimage import AdImage
from facebook_business.adobjects.adcreative import AdCreative
from facebook_business.adobjects.ad import Ad

# Load the JSON file
with open('input.json') as f:
    data = json.load(f)

# Set up the Facebook Ads API
access_token = 'YOUR_ACCESS_TOKEN'
ad_account_id = 'YOUR_AD_ACCOUNT_ID'
FacebookAdsApi.init(access_token=access_token)

# Create an AdAccount object
ad_account = AdAccount(ad_account_id)

# Create an AdImage object
image = AdImage()
image[AdImage.Field.filename] = 'image.jpg'
image[AdImage.Field_caption] = data['image_caption']
image.remote_create()

# Create an AdCreative object
creative = AdCreative(ad_account.get_id_assured())
creative[AdCreative.Field.title] = data['title']
creative[AdCreative.Field_body] = data['body']
creative[AdCreative.Field_image_hash] = image[AdImage.Field.hash]
creative.remote_create()

# Create an Ad object
ad = Ad(ad_account.get_id_assured())
ad[Ad.Field.name] = data['name']
ad[Ad.Field.adset_id] = data['adset_id']
ad[Ad.Field.creative] = creative
ad.remote_create()