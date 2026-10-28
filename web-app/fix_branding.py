import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace "MUSIC.AI" with "ULTRASOUND"
content = content.replace("MUSIC.AI", "ULTRASOUND")

# Replace "Music AI Studio" with "Ultrasound Studio"
content = content.replace("Music AI Studio & Marketplace", "Ultrasound Studio & Marketplace")

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated page.tsx")
