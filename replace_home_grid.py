import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find the start of the menu carousel
carousel_start = html.find('<div class="menu-carousel-wrapper fade-in">')
# Find the end of it (right before </section> of #menu)
carousel_end = html.find('</section>', carousel_start)

# Define the new grid HTML
new_grid = '''<div class="home-category-grid fade-in">
                <!-- Card 1 -->
                <a href="menu.html" class="home-cat-card">
                    <div class="home-cat-img" style="background-image: url('images/Ultra-realistic_premium_commer_16.jpg');"></div>
                    <div class="home-cat-content">
                        <h3>Softy Ice Cream</h3>
                        <p>Creamy, soft & delightful</p>
                        <span class="view-btn">View Items <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                </a>
                
                <!-- Card 2 -->
                <a href="menu.html" class="home-cat-card">
                    <div class="home-cat-img" style="background-image: url('images/Ultra-realistic_premium_chocol_6.jpg');"></div>
                    <div class="home-cat-content">
                        <h3>Doughnut</h3>
                        <p>Fresh, soft & delicious</p>
                        <span class="view-btn">View Items <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                </a>

                <!-- Card 3 -->
                <a href="menu.html" class="home-cat-card">
                    <div class="home-cat-img" style="background-image: url('images/Ultra-realistic_premium_commer_1.jpg');"></div>
                    <div class="home-cat-content">
                        <h3>Popcorn</h3>
                        <p>Crispy, crunchy & tasty</p>
                        <span class="view-btn">View Items <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                </a>

                <!-- Card 4 -->
                <a href="menu.html" class="home-cat-card">
                    <div class="home-cat-img" style="background-image: url('images/Ultra-realistic_premium_food_p_12.jpg');"></div>
                    <div class="home-cat-content">
                        <h3>French Fries & Nuggets</h3>
                        <p>Crispy fries & juicy nuggets</p>
                        <span class="view-btn">View Items <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                </a>

                <!-- Card 5 -->
                <a href="menu.html" class="home-cat-card">
                    <div class="home-cat-img" style="background-image: url('images/Ultra-realistic_premium_commer_8.jpg');"></div>
                    <div class="home-cat-content">
                        <h3>Burger</h3>
                        <p>Grilled to perfection</p>
                        <span class="view-btn">View Items <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                </a>

                <!-- Card 6 -->
                <a href="menu.html" class="home-cat-card">
                    <div class="home-cat-img" style="background-image: url('images/Ultra-realistic_premium_commer_9.jpg');"></div>
                    <div class="home-cat-content">
                        <h3>Cold Coffee</h3>
                        <p>Chilled, smooth & refreshing</p>
                        <span class="view-btn">View Items <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                </a>

                <!-- Card 7 -->
                <a href="menu.html" class="home-cat-card">
                    <div class="home-cat-img" style="background-image: url('images/Ultra-realistic_premium_carame_3.jpg');"></div>
                    <div class="home-cat-content">
                        <h3>Hot Beverages</h3>
                        <p>Warm, soothing & perfect</p>
                        <span class="view-btn">View Items <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                </a>

                <!-- Card 8 -->
                <a href="menu.html" class="home-cat-card">
                    <div class="home-cat-img" style="background-image: url('images/Ultra-realistic_premium_commer_16.jpg');"></div>
                    <div class="home-cat-content">
                        <h3>Brownie</h3>
                        <p>Rich, chocolatey & indulgent</p>
                        <span class="view-btn">View Items <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                </a>
            </div>
            '''

new_html = html[:carousel_start] + new_grid + html[carousel_end:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("index.html rewritten successfully.")
