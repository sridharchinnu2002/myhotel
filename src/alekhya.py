import random

# Define a function to generate a personalized email
def generate_email(recipient_name, event_details, special_instructions):
    # Define a list of greeting options
    greetings = [
        f"Dear {recipient_name},",
        f"Hello {recipient_name},",
        f"Hi {recipient_name},",
    ]

    # Define a list of event detail options
    event_detail_options = [
        f"We are excited to invite you to {event_details['event_name']} on {event_details['event_date']} at {event_details['event_time']}.",
        f"You are cordially invited to {event_details['event_name']} on {event_details['event_date']} at {event_details['event_time']}.",
        f"Join us for {event_details['event_name']} on {event_details['event_date']} at {event_details['event_time']}.",
    ]

    # Define a list of special instruction options
    special_instruction_options = [
        f"Please note that {special_instructions}.",
        f"Important: {special_instructions}.",
        f"Don't forget: {special_instructions}.",
    ]

    # Define a list of closing options
    closings = [
        "Best regards,",
        "Sincerely,",
        "Thank you,",
    ]

    # Randomly select options from the lists
    greeting = random.choice(greetings)
    event_detail = random.choice(event_detail_options)
    special_instruction = random.choice(special_instruction_options)
    closing = random.choice(closings)

    # Generate the email
    email = f"""
{greeting}

{event_detail}

{special_instruction}

{closing}
[Your Name]
"""

    return email

# Example usage
recipient_name = "ramavath jairam"
event_details = {
    "event_name": "AI Conference",
    "event_date": "2024-03-12",
    "event_time": "10:00 AM",
}
special_instructions = "Please RSVP by March 5th."

email = generate_email(recipient_name, event_details, special_instructions)
print(email)