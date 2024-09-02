import json
from facebook_business.api import FacebookAdsApi
from facebook_business.adobjects.adaccount import AdAccount
from facebook_business.adobjects.adimage import AdImage
from facebook_business.adobjects.adcreative import AdCreative
from facebook_business.adobjects.ad import Ad
from facebook_business.adobjects.campaign import Campaign
from facebook_business.adobjects.adset import AdSet

# Load the JSON file
with open("input.json") as f:
    data = json.load(f)

# Set up the Facebook Ads API
access_token = "YOUR_ACCESS_TOKEN"
ad_account_id = "YOUR_AD_ACCOUNT_ID"
FacebookAdsApi.init(access_token=access_token)

# Create a Campaign object
campaign = Campaign(ad_account_id)
campaign[Campaign.Field.name] = data["campaign_name"]
campaign[Campaign.Field.objective] = data["campaign_objective"]
campaign[Campaign.Field.status] = Campaign.Status.paused
campaign.remote_create()

# Create an AdSet object
adset = AdSet(ad_account_id)
adset[AdSet.Field.name] = data["adset_name"]
adset[AdSet.Field.campaign_id] = campaign.get_id_assured()
adset[AdSet.Field.daily_budget] = data["daily_budget"]
adset[AdSet.Field.start_time] = data["start_date"]
adset[AdSet.Field.end_time] = data["end_date"]
adset[AdSet.Field.bid_amount] = data["cost_per_result_goal"]
adset[AdSet.Field.optimization_goal] = AdSet.OptimizationGoal.post_engagement
adset[AdSet.Field.status] = AdSet.Status.paused
adset.remote_create()

# Create an AdImage object
image = AdImage()
image[AdImage.Field.filename] = "image.jpg"
image[AdImage.Field_caption] = data["image_caption"]
image.remote_create()

# Create an AdCreative object
creative = AdCreative(ad_account_id)
creative[AdCreative.Field.title] = data["title"]
creative[AdCreative.Field_body] = data["body"]
creative[AdCreative.Field_image_hash] = image[AdImage.Field.hash]
creative[AdCreative.Field_object_story_spec] = {
    "page_id": "YOUR_PAGE_ID",
    "template_data": {
        "headline": {"text": data["headline"]},
        "call_to_action": {
            "type": data["call_to_action"],
            "value": {"link": data["destination"]},
        },
        "description": {"text": data["description"]},
    },
}
creative[AdCreative.Field_object_story_spec[AdCreative.Field.page_id]] = "YOUR_PAGE_ID"
creative[AdCreative.Field_object_story_spec[AdCreative.Field.link_url]] = data[
    "destination"
]
creative[AdCreative.Field_partnership] = data["partnership_ad"]
creative[AdCreative.Field_status] = AdCreative.Status.paused
creative.remote_create()

# Create an Ad object
ad = Ad(ad_account_id)
ad[Ad.Field.name] = data["ad_name"]
ad[Ad.Field.adset_id] = adset.get_id_assured()
ad[Ad.Field.creative] = creative
ad[Ad.Field.status] = Ad.Status.paused
ad.remote_create()
