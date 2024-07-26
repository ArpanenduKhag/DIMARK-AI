import json
import openai

# Set your OpenAI API key
# openai.api_key = ""

# Load reviews from JSON file
with open("reviews.json", "r") as file:
    reviews_data = json.load(file)

# Extract reviews from JSON data
reviews = list(reviews_data.values())


# Function to filter reviews based on keywords using ChatGPT
def filter_reviews(reviews, keywords):
    prompt = f"Please filter the following reviews and provide only those that mention keywords related to {keywords}:\n"
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

    filtered_reviews = response.choices[0].text.strip()
    return filtered_reviews.split("\n")


# Function to get at least 30 relevant reviews
def get_relevant_reviews(reviews, keywords, batch_size=30):
    relevant_reviews = []
    remaining_reviews = reviews.copy()

    while len(relevant_reviews) < 30 and remaining_reviews:
        batch = remaining_reviews[:batch_size]
        remaining_reviews = remaining_reviews[batch_size:]

        filtered_reviews = filter_reviews(batch, keywords)
        relevant_reviews.extend(filtered_reviews)

    return relevant_reviews[:30]


# Example usage
keywords = ["bike", "Yamaha R15 V2"]
relevant_reviews = get_relevant_reviews(reviews, keywords)

# Output the relevant reviews
print("Relevant Reviews:")
for review in relevant_reviews:
    print(review)

# Save relevant reviews to JSON file (optional)
with open("relevant_reviews.json", "w") as file:
    json.dump(relevant_reviews, file, indent=4)
