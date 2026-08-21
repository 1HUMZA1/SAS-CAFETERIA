import re

with open('menu.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find the start of the full-menu-grid
grid_start = html.find('<div class="full-menu-grid">')

# Extract all categories
category_pattern = re.compile(r'(<div class="full-menu-category fade-in">.*?</div>\s*)(?=<!--|<footer)', re.DOTALL)
categories = []
pos = grid_start
while True:
    match = re.search(r'<div class="full-menu-category fade-in">', html[pos:])
    if not match: break
    start_idx = pos + match.start()
    
    # Simple nested div parser
    div_count = 0
    i = start_idx
    while i < len(html):
        if html[i:i+4] == '<div': div_count += 1
        elif html[i:i+5] == '</div':
            div_count -= 1
            if div_count == 0:
                categories.append(html[start_idx:i+6])
                pos = i + 6
                break
        i += 1

sidebar_html = '<aside class="dashboard-sidebar">\n    <h3 class="sidebar-title">Menu Categories</h3>\n    <ul class="dashboard-tabs">\n'

for i, cat_html in enumerate(categories):
    icon_match = re.search(r'<i class="fa-solid (.*?)"></i>', cat_html)
    title_match = re.search(r'<h3>(.*?)</h3>', cat_html)
    icon = icon_match.group(1) if icon_match else 'fa-utensils'
    title = title_match.group(1) if title_match else 'Category'
    active_class = 'active' if i == 0 else ''
    sidebar_html += f'        <li class="tab-link {active_class}" data-target="category-{i}"><i class="fa-solid {icon}"></i> {title}</li>\n'

sidebar_html += '    </ul>\n</aside>\n'

content_html = '<main class="dashboard-content">\n'
for i, cat_html in enumerate(categories):
    active_class = 'active' if i == 0 else ''
    # inject id and modify classes
    cat_html = cat_html.replace('class="full-menu-category fade-in"', f'id="category-{i}" class="full-menu-category dashboard-panel {active_class}"')
    content_html += cat_html + '\n'
content_html += '</main>\n'

dashboard_html = f'<div class="menu-dashboard">\n{sidebar_html}{content_html}</div>\n'

# Replace grid with dashboard
new_html = html[:grid_start] + dashboard_html + html[html.find('</div>', html.rfind('full-menu-category'))+6 : ] 
# The above replacement might be slightly inaccurate. Let's do it safer:
grid_end = html.find('</section>', grid_start)
# We will replace from grid_start to the closing div of the grid.
# The grid has a closing div right before </section>
grid_close_div = html.rfind('</div>', grid_start, grid_end)

new_html = html[:grid_start] + dashboard_html + html[grid_close_div+6:grid_end] + html[grid_end:]

with open('menu.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("Dashboard created successfully.")
