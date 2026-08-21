from PIL import Image
import sys

def make_transparent(img_path, out_path, tolerance=30):
    img = Image.open(img_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    # Get the background color from the top-left pixel
    bg_color = data[0]
    
    for item in data:
        # Check if the pixel is close to the background color
        if abs(item[0] - bg_color[0]) < tolerance and \
           abs(item[1] - bg_color[1]) < tolerance and \
           abs(item[2] - bg_color[2]) < tolerance:
            # Change to transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(out_path, "PNG")

if __name__ == "__main__":
    make_transparent("logo.jpg", "logo.png")
