import sys
import os
from PIL import Image, ImageDraw

def create_squircle_mask(size, power=3.2):
    mask = Image.new('L', (size, size), 0)
    # A squircle formula: |x|^n + |y|^n = r^n
    pixels = mask.load()
    center = size / 2.0
    radius = size / 2.0
    
    for y in range(size):
        for x in range(size):
            dx = abs((x - center) / radius)
            dy = abs((y - center) / radius)
            if (dx**power + dy**power) <= 1.0:
                pixels[x, y] = 255
                
    return mask

def main():
    if len(sys.argv) < 3:
        print("Usage: python3 generate_squircle.py <input> <output>")
        sys.exit(1)
        
    input_path = sys.argv[1]
    output_path = sys.argv[2]
    
    if not os.path.exists(input_path):
        print(f"Error: Could not find {input_path}")
        sys.exit(1)
    
    img = Image.open(input_path).convert("RGBA")
    
    # Make it a perfect square
    min_dim = min(img.size)
    left = (img.width - min_dim)/2
    top = (img.height - min_dim)/2
    right = (img.width + min_dim)/2
    bottom = (img.height + min_dim)/2
    img = img.crop((left, top, right, bottom))
    
    # Resize to standard favicon size for better quality before masking
    img = img.resize((512, 512), Image.Resampling.LANCZOS)
    
    # Create the squircle mask
    mask = create_squircle_mask(512, power=3.2) # 3.2 gives a nice Apple-like squircle
    
    # Apply mask
    result = Image.new("RGBA", (512, 512), (0,0,0,0))
    result.paste(img, (0,0), mask=mask)
    
    # Save the result
    result.save(output_path)
    print(f"Success! Squircle icon saved to {output_path}")

if __name__ == "__main__":
    main()
