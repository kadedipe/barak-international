# Barak International - Corporate Website

![Barak International](https://img.shields.io/badge/Barak-International-orange)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen)

## 📋 Overview

Barak International is a diversified global enterprise offering comprehensive solutions across **Legal Services**, **Health & Wellness**, **Wealth Management**, **Information Technology**, **Real Estate & Logistics**, and **Empowerment Programs**.

This website serves as the official online presence for Barak International, providing information about services, products, company leadership, and a document management system.

**Live Demo:** [Open index.html](index.html)

---

## 🚀 Features

### Core Features
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile devices
- ✅ **6 Complete Pages** - Home, About, Services, Contact, Products, Documents
- ✅ **External CSS** - Clean, maintainable styling
- ✅ **External JavaScript** - Modular functionality
- ✅ **Mobile Menu** - Hamburger menu for small screens
- ✅ **Smooth Scrolling** - Enhanced navigation experience

### Page-Specific Features

| Page | Features |
| :--- | :--- |
| **Home** | Hero section, service cards, company statistics, CTA |
| **About** | Vision & Mission, Core objectives, Leadership team |
| **Services** | Expandable service sections, Yield program calculator |
| **Contact** | Contact form, location map, department selection |
| **Products** | Tabbed product display (Kyoor/Zetta/Zarrcof), ingredient information |
| **Documents** | Document upload, search, filter, preview, download, delete |

### Document Hub Features
- 📄 Upload new documents (PDF, DOC, DOCX)
- 🔍 Search documents by title or description
- 🏷️ Filter documents by category (Legal, Health, Wealth, IT, General)
- 👁️ Preview document content
- 📥 Download documents from the `documents/` folder
- 🗑️ Delete documents (with confirmation)

---

## 📁 File Structure
barak-international-website/
│
├── index.html # Homepage
├── about.html # About Us page
├── services.html # Services page
├── contact.html # Contact page
├── products.html # Products page
├── documents.html # Document Hub page
├── styles.css # Main stylesheet (all CSS)
├── script.js # Main JavaScript (all functionality)
├── README.md # This file
│
├── images/ # Image assets
│ ├── Dr-Kolapo-1.jpg
│ ├── Dr-Kolapo-2.jpg
│ ├── Madam-Fiona.jpg
│ ├── Zetta-1.jpg
│ ├── Zetta-2.jpg
│ ├── cover-17.jpg
│ ├── cover-18.jpg
│ ├── cover-19.jpg
│ ├── cover-27.jpg
│ ├── cover-74.jpg
│ ├── cover-76.jpg
│ ├── cover-77.jpg
│ ├── cover-78.jpg
│ ├── cover-81.jpg
│ ├── cover-82.jpg
│ ├── cover-83.jpg
│ ├── cover-84.jpg
│ ├── cover-91.jpg
│ ├── cover-95.jpg
│ ├── cover-101.jpg
│ └── Cosmetics.jpg
│
└── documents/ # Downloadable documents (PDF, DOC, DOCX)
├── memorandum-of-association-template.pdf
├── kyoor-nutritional-analysis-report.pdf
├── yield-contract-agreement-v2.3.pdf
├── project-sawa-charter.pdf
├── z-pay-user-manual.pdf
└── land-title-transfer-application-form.pdf

text

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Structure and content |
| **CSS3** | Styling, animations, responsive design |
| **JavaScript (ES6)** | Interactivity, document management, form handling |
| **LocalStorage** | Document persistence (demo mode) |
| **Google Maps Embed** | Location display on contact page |

---

## 🎨 Color Scheme

| Color | Hex Code | Usage |
| :--- | :--- | :--- |
| Navy Blue | `#1a1a2e` | Navigation bar, footer, headers, gradients |
| Dark Navy | `#16213e` | Gradient backgrounds |
| Orange | `#e67e22` | Buttons, links, accents, icons |
| Dark Orange | `#d35400` | Button hover states |
| Light Gray | `#f8f9fa` | Card backgrounds, info panels |
| White | `#ffffff` | Text on dark backgrounds |

---

## 📱 Responsive Breakpoints

| Device | Breakpoint | Behavior |
| :--- | :--- | :--- |
| Desktop | > 768px | Full layout, horizontal navigation |
| Tablet/Mobile | ≤ 768px | Stacked layout, hamburger menu |

---

## 🔧 Installation & Setup

### Local Development

1. **Clone or download** the repository
2. **Open the folder** in your code editor
3. **Launch the website** by opening `index.html` in your browser

```bash
# If using a local server (recommended)
cd barak-international-website
python -m http.server 8000
# Then visit http://localhost:8000
File Requirements
All HTML files must be in the same folder as styles.css and script.js

Create an images/ folder for all image assets

Create a documents/ folder for all downloadable PDF files

📝 Customization Guide
Changing Colors
Edit the following variables in styles.css:

css
/* Find and replace these hex codes */
#1a1a2e  /* Navy blue - headers, nav, footer */
#e67e22  /* Orange - buttons, links, accents */
Adding New Documents
Add your PDF file to the documents/ folder

Update the documents array in script.js:

javascript
{
    id: 7,
    title: "Your Document Title",
    category: "Legal", // Legal, Health, Wealth, IT, General
    date: "2024-01-01",
    description: "Brief description of the document...",
    content: "Full content preview...",
    file: "documents/your-filename.pdf"
}
Adding New Products
Add a new tab button in products.html:

html
<button class="tab-btn" onclick="showTab('newproduct')">🌟 New Product</button>
Add the corresponding tab content:

html
<div id="newproduct" class="tab-content">
    <!-- Product content here -->
</div>
Updating Contact Information
Edit the contact details in each HTML file or update the footer section:

html
<div class="footer-col">
    <h4>Contact</h4>
    <a href="tel:+256702663294">Legal: +256702663294</a>
    <a href="tel:+256760451604">Empowerment: +256760451604</a>
    <a href="mailto:your@email.com">Email Us</a>
</div>
📞 Contact Information
Department	Contact
Legal Department	+256702663294
Wealth Management	+256760451604
CEO Office	+256745111659
US Line	+1 (718) 717-8771
Email	adedipebabatundekolapo@gmail.com
Address: Jinja City, Busoga, Uganda

👥 Leadership
Name	Title
Dr. Kolapo Adedipe	Managing Director / CEO
Ms. Fiona Violet Sanyuka	Executive Director
📄 License
This website is proprietary to Barak International. All rights reserved.

© 2026 Barak International

🤝 Support
For technical support or inquiries about this website:

Email: adedipebabatundekolapo@gmail.com

Phone: +256745111659

📦 Version History
Version	Date	Changes
1.0.0	2026	Initial release - Complete website with 6 pages
🙏 Acknowledgments
Dr. Kolapo Adedipe - Vision and leadership

Ms. Fiona Violet Sanyuka - Project SAWA initiative

Dr. Suraya Ariffin - Kyoor nutritional research

🔜 Future Enhancements
Backend integration for contact form

User authentication for document uploads

Newsletter subscription feature

Blog/News section

Multi-language support

E-commerce functionality for products

📸 Screenshots
Homepage
https://images/cover-17.jpg

Products Page
https://images/cover-81.jpg

Document Hub
https://images/cover-74.jpg

Built with ❤️ for Barak International

text

---

## How to Use This README

1. **Create a new file** called `README.md` in your website folder
2. **Copy the entire code above** into that file
3. **Save the file**

---

## What the README Includes

| Section | Description |
| :--- | :--- |
| **Overview** | Brief description of the company and website |
| **Features** | Complete list of website features |
| **File Structure** | Visual tree of all files and folders |
| **Technologies** | Technologies used to build the site |
| **Color Scheme** | Brand colors and their usage |
| **Installation** | Setup instructions for local development |
| **Customization Guide** | How to change colors, add documents, add products |
| **Contact Information** | All business contact details |
| **Leadership** | Key personnel |
| **Version History** | Release tracking |
| **Future Enhancements** | Planned features |

---

## Final File Structure Now Includes README
barak-international-website/
│
├── index.html
├── about.html
├── services.html
├── contact.html
├── products.html
├── documents.html
├── styles.css
├── script.js
├── README.md ← New file
│
├── images/
│ └── (your images)
│
└── documents/
└── (your PDF files)