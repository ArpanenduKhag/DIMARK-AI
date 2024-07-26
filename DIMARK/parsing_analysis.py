import json

# Load analysis results from JSON file
with open("analysis_results.json", "r") as file:
    analysis_results = json.load(file)["analysis_results"]

# Parse the analysis results
sentiment_analysis = None
audience_categorization = None
consumer_behavior_analysis = None
marketing_strategies = None
sample_ad_campaigns = None
additional_info = None

for line in analysis_results.split("\n"):
    if line.startswith("1. Sentiment analysis"):
        sentiment_analysis = line.split(":")[1].strip()
    elif line.startswith("2. Audience categorization"):
        audience_categorization = line.split(":")[1].strip()
    elif line.startswith("3. Consumer behavior analysis"):
        consumer_behavior_analysis = line.split(":")[1].strip()
    elif line.startswith("4. Marketing and advertising strategies"):
        marketing_strategies = line.split(":")[1].strip()
    elif line.startswith("5. Sample ad campaigns"):
        sample_ad_campaigns = line.split(":")[1].strip()
    elif line.startswith("6. Any additional information"):
        additional_info = line.split(":")[1].strip()

# Print the parsed analysis results
print("Parsed Analysis Results:")
print("Sentiment Analysis:", sentiment_analysis)
print("Audience Categorization:", audience_categorization)
print("Consumer Behavior Analysis:", consumer_behavior_analysis)
print("Marketing Strategies:", marketing_strategies)
print("Sample Ad Campaigns:", sample_ad_campaigns)
print("Additional Info:", additional_info)
