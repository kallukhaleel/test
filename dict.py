import json
indian_states = {
    "Uttar Pradesh": "Lucknow",
    "Maharashtra": "Mumbai",
    "Bihar": "Patna",
    "West Bengal": "Kolkata",
    "Karnataka": "Bengaluru",
    "Tamil Nadu": "Chennai",
    "Rajasthan": "Jaipur"
}
data  = indian_states

with open("state.json", 'w+') as f:
    json.dump(data, f)
