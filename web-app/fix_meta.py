with open('src/app/layout.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("MUSIC.AI | Generative AI Music Studio", "Ultrasound Label | Generative AI Music Studio")

with open('src/app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated layout.tsx")
