import json
import openai

# Set your OpenAI API key
# openai.api_key = ""

# Load relevant reviews from JSON file
with open("relevant_reviews.json", "r") as file:
    relevant_reviews = json.load(file)


# Function to analyze reviews using ChatGPT
def analyze_reviews(reviews):
    prompt = (
        f"Please analyze the following reviews and provide the following insights:\n"
    )
    prompt += "1. Sentiment analysis (positive, negative, neutral)\n"
    prompt += "2. Audience categorization (demographics, interests)\n"
    prompt += "3. Consumer behavior analysis\n"
    prompt += "4. Marketing and advertising strategies\n"
    prompt += "5. Sample ad campaigns with content and graphics suggestions\n"
    prompt += "6. Any additional information or metrics required for running different types of Facebook ad campaigns (Awareness, Traffic, Engagement, Sales)\n"
    reviews_text = "\n".join(reviews)
    prompt += reviews_text

    response = openai.Completion.create(
        engine="gpt-3.5-turbo-instruct",
        prompt=prompt,
        max_tokens=2000,
        n=1,
        stop=None,
        temperature=0.5,
    )

    analysis_results = response.choices[0].text.strip()
    return analysis_results


# Analyze the relevant reviews
analysis_results = analyze_reviews(relevant_reviews)

# Print the analysis results
print("Analysis Results:")
print(analysis_results)

# Save analysis results to JSON file (optional)
with open("analysis_results.json", "w") as file:
    json.dump({"analysis_results": analysis_results}, file, indent=4)
