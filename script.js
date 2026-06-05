/* ============================================
   BARAK INTERNATIONAL - MAIN JAVASCRIPT FILE
   Author: Barak International
   Updated: 2026
   ============================================ */

/* ============================================
   GLOBAL VARIABLES
   ============================================ */

// Check which page we are on
const currentPage = window.location.pathname.split('/').pop();

/* ============================================
   PRODUCTS PAGE - TAB FUNCTIONALITY
   ============================================ */

function showTab(tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to clicked button
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

/* ============================================
   PRODUCTS PAGE - ORDER FUNCTION
   ============================================ */

function orderProduct(productName) {
    alert(`Thank you for your interest in ${productName}!\n\nPlease contact our sales team:\n🌿 Health & Wellness: +256745111659\n💰 Wealth Management: +256760451604\n⚖️ Legal: +256702663294\n📧 Email: adedipebabatundekolapo@gmail.com`);
}

/* ============================================
   SERVICES PAGE - TOGGLE SECTIONS
   ============================================ */

function toggleSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.classList.toggle('active');
    }
}

/* ============================================
   CONTACT PAGE - FORM HANDLING
   ============================================ */

// Initialize contact form if on contact page
if (currentPage === 'contact.html' || document.getElementById('contactForm')) {
    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contactForm');
        const successMsg = document.getElementById('successMsg');
        const errorMsg = document.getElementById('errorMsg');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name') ? document.getElementById('name').value : '';
                const email = document.getElementById('email') ? document.getElementById('email').value : '';
                const message = document.getElementById('message') ? document.getElementById('message').value : '';
                
                // Simple validation
                if (!name || !email || !message) {
                    if (errorMsg) errorMsg.style.display = 'block';
                    if (successMsg) successMsg.style.display = 'none';
                    setTimeout(() => {
                        if (errorMsg) errorMsg.style.display = 'none';
                    }, 3000);
                    return;
                }
                
                // Simulate form submission
                if (successMsg) successMsg.style.display = 'block';
                if (errorMsg) errorMsg.style.display = 'none';
                contactForm.reset();
                
                setTimeout(() => {
                    if (successMsg) successMsg.style.display = 'none';
                }, 5000);
            });
        }
    });
}

/* ============================================
   DOCUMENTS PAGE - DOCUMENT MANAGEMENT SYSTEM
   ============================================ */

// Sample initial documents with file paths for real PDF downloads
let documents = [
    {
        id: 1,
        title: "Memorandum of Association Template",
        category: "Legal",
        date: "2024-05-20",
        description: "Standard MOA for Ltd by Shares. Includes director clauses and share structure.",
        content: "This is the standard Memorandum of Association template for companies limited by shares...",
        file: "documents/memorandum-of-association-template.pdf"
    },
    {
        id: 2,
        title: "KYOOR Nutritional Analysis Report",
        category: "Health",
        date: "2024-04-15",
        description: "Full breakdown of Ashwagandha, Black Seed, Honey, and Vitamin C levels.",
        content: "Based on the research by Dr. Suraya Ariffin, this document details the complete nutritional profile of Kyoor...",
        file: "documents/kyoor-nutritional-analysis-report.pdf"
    },
    {
        id: 3,
        title: "Yield Contract Agreement v2.3",
        category: "Wealth",
        date: "2024-03-01",
        description: "Terms for 0.12% daily returns. 150-day maturity clause.",
        content: "This contract outlines the terms and conditions of the Yield Program including daily dividend calculations...",
        file: "documents/yield-contract-agreement-v2.3.pdf"
    },
    {
        id: 4,
        title: "Project SAWA Charter",
        category: "General",
        date: "2024-02-10",
        description: "The constitution of 'Saving Afrika with Afrika' for Busoga region.",
        content: "Project SAWA is a self-help, self-reliant sustainable development goal program...",
        file: "documents/project-sawa-charter.pdf"
    },
    {
        id: 5,
        title: "Z Pay User Manual",
        category: "IT",
        date: "2024-01-05",
        description: "How to convert USDT to PX Wallet and buy contracts.",
        content: "Step-by-step guide to using Z Pay Mastercard and the Pixiu platform...",
        file: "documents/z-pay-user-manual.pdf"
    },
    {
        id: 6,
        title: "Land Title Transfer Application Form",
        category: "Legal",
        date: "2024-03-20",
        description: "Official application form for land title registration and transfer.",
        content: "Complete this form to initiate land title transfer processing...",
        file: "documents/land-title-transfer-application-form.pdf"
    }
];

let nextId = 7;

// Load documents from localStorage
function loadDocuments() {
    const stored = localStorage.getItem('barak_documents');
    if (stored) {
        const parsedDocs = JSON.parse(stored);
        // Merge stored docs with existing docs (preserve file paths for original docs)
        documents = parsedDocs.map(doc => {
            const existingDoc = documents.find(origDoc => origDoc.id === doc.id);
            if (existingDoc && existingDoc.file) {
                return { ...doc, file: existingDoc.file };
            }
            return doc;
        });
        nextId = Math.max(...documents.map(d => d.id), 0) + 1;
    }
    renderDocuments();
}

// Save documents to localStorage
function saveDocuments() {
    localStorage.setItem('barak_documents', JSON.stringify(documents));
}

// Get category class for badge styling
function getCategoryClass(category) {
    const map = {
        'Legal': 'legal',
        'Health': 'health',
        'Wealth': 'wealth',
        'IT': 'it',
        'General': 'general'
    };
    return map[category] || 'general';
}

// Render documents table
function renderDocuments() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (!searchInput || !categoryFilter) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const categoryValue = categoryFilter.value;
    
    const filtered = documents.filter(doc => {
        const matchesSearch = doc.title.toLowerCase().includes(searchTerm) || 
                              doc.description.toLowerCase().includes(searchTerm);
        const matchesCategory = categoryValue === 'all' || doc.category === categoryValue;
        return matchesSearch && matchesCategory;
    });
    
    const tbody = document.getElementById('documentsBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    filtered.forEach(doc => {
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = `<strong>${escapeHtml(doc.title)}</strong>`;
        row.insertCell(1).innerHTML = `<span class="badge badge-${getCategoryClass(doc.category)}">${doc.category}</span>`;
        row.insertCell(2).innerHTML = doc.date;
        row.insertCell(3).innerHTML = doc.description.substring(0, 60) + (doc.description.length > 60 ? '...' : '');
        row.insertCell(4).innerHTML = `
            <button class="action-btn preview" onclick="previewDocument(${doc.id})">👁️ Preview</button>
            <button class="action-btn" onclick="downloadDocument(${doc.id})">📥 Download</button>
            <button class="action-btn delete" onclick="deleteDocument(${doc.id})">🗑️ Delete</button>
        `;
    });
    
    if (filtered.length === 0) {
        const row = tbody.insertRow();
        row.insertCell(0).colSpan = 5;
        row.insertCell(0).innerHTML = '<p style="text-align:center; padding:40px;">No documents found. Upload a document using the Admin panel above.</p>';
    }
}

// Escape HTML to prevent XSS attacks
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Upload document
function uploadDocument() {
    const titleInput = document.getElementById('docTitle');
    const categorySelect = document.getElementById('docCategory');
    const descriptionTextarea = document.getElementById('docDescription');
    const fileInput = document.getElementById('docFile');
    
    if (!titleInput || !categorySelect) return;
    
    const title = titleInput.value;
    const category = categorySelect.value;
    const description = descriptionTextarea ? descriptionTextarea.value : '';
    
    if (!title) {
        alert('Please enter a document title');
        return;
    }
    
    let fileName = '';
    let filePath = '';
    if (fileInput && fileInput.files.length > 0) {
        fileName = fileInput.files[0].name;
        filePath = `documents/${fileName}`;
    }
    
    const newDoc = {
        id: nextId++,
        title: title,
        category: category,
        date: new Date().toISOString().split('T')[0],
        description: description || 'No description provided',
        content: `Document: ${title}\nCategory: ${category}\nUploaded: ${new Date().toLocaleString()}\nFile: ${fileName || 'No file attached'}\n\nThis document is stored in the documents folder.`,
        file: filePath || null
    };
    
    documents.push(newDoc);
    saveDocuments();
    renderDocuments();
    
    // Clear form
    if (titleInput) titleInput.value = '';
    if (descriptionTextarea) descriptionTextarea.value = '';
    if (fileInput) fileInput.value = '';
    
    alert('Document uploaded successfully! Note: In production, the file would be saved to the documents folder.');
}

// Preview document
function previewDocument(id) {
    const doc = documents.find(d => d.id === id);
    if (doc) {
        const modalTitle = document.getElementById('modalTitle');
        const modalContent = document.getElementById('modalContent');
        
        if (modalTitle) modalTitle.innerHTML = doc.title;
        if (modalContent) {
            modalContent.innerHTML = `
                <p><strong>Category:</strong> ${doc.category}</p>
                <p><strong>Date Uploaded:</strong> ${doc.date}</p>
                <p><strong>Description:</strong></p>
                <p>${escapeHtml(doc.description)}</p>
                <hr>
                <p><strong>Content Preview:</strong></p>
                <p>${escapeHtml(doc.content)}</p>
                ${doc.file ? `<hr><p><strong>File:</strong> ${doc.file.split('/').pop()}</p>` : ''}
                <hr>
                <p><small>To download the full document, click the Download button in the table.</small></p>
            `;
        }
        
        const modal = document.getElementById('previewModal');
        if (modal) modal.style.display = 'flex';
    }
}

// Download document - Now downloads real PDF files from the documents folder
function downloadDocument(id) {
    const doc = documents.find(d => d.id === id);
    if (doc) {
        // Check if the document has a file path
        if (doc.file) {
            // Download the actual file from the documents folder
            const link = document.createElement('a');
            link.href = doc.file;
            link.download = doc.file.split('/').pop();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            // Fallback to text download for documents without files
            const content = `Document: ${doc.title}\nCategory: ${doc.category}\nDate: ${doc.date}\nDescription: ${doc.description}\n\n${doc.content}\n\n---\nBarak International - Official Document`;
            const blob = new Blob([content], {type: 'text/plain'});
            const a = document.createElement('a');
            const url = URL.createObjectURL(blob);
            a.href = url;
            a.download = doc.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    }
}

// Delete document
function deleteDocument(id) {
    if (confirm('Are you sure you want to delete this document?')) {
        documents = documents.filter(d => d.id !== id);
        saveDocuments();
        renderDocuments();
    }
}

// Filter documents
function filterDocuments() {
    renderDocuments();
}

// Toggle admin panel
function toggleAdminPanel() {
    const uploadForm = document.getElementById('uploadForm');
    if (uploadForm) {
        if (uploadForm.style.display === 'none' || !uploadForm.style.display) {
            uploadForm.style.display = 'block';
        } else {
            uploadForm.style.display = 'none';
        }
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('previewModal');
    if (modal) modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('previewModal');
    if (modal && event.target === modal) {
        modal.style.display = 'none';
    }
}

// Initialize documents page if on documents page
if (currentPage === 'documents.html' || document.getElementById('documentsBody')) {
    document.addEventListener('DOMContentLoaded', function() {
        loadDocuments();
    });
}

/* ============================================
   HOMEPAGE - SMOOTH SCROLLING
   ============================================ */

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

/* ============================================
   RESPONSIVE NAVIGATION - MOBILE MENU
   ============================================ */

// Add mobile menu toggle for small screens
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navContainer = document.querySelector('.nav-container');
    
    if (navbar && navContainer && window.innerWidth <= 768) {
        // Create mobile menu button if it doesn't exist
        let menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (!menuBtn) {
            menuBtn = document.createElement('button');
            menuBtn.innerHTML = '☰';
            menuBtn.className = 'mobile-menu-btn';
            menuBtn.style.cssText = `
                background: #e67e22;
                color: white;
                border: none;
                padding: 10px 15px;
                font-size: 20px;
                border-radius: 5px;
                cursor: pointer;
                display: block;
            `;
            
            const logo = document.querySelector('.logo');
            if (logo) {
                logo.parentNode.insertBefore(menuBtn, logo.nextSibling);
            }
            
            const navLinks = document.querySelector('.nav-links');
            if (navLinks) {
                navLinks.style.display = 'none';
                navLinks.style.width = '100%';
                navLinks.style.flexDirection = 'column';
                navLinks.style.textAlign = 'center';
                navLinks.style.gap = '15px';
                navLinks.style.marginTop = '15px';
            }
            
            menuBtn.addEventListener('click', function() {
                if (navLinks) {
                    if (navLinks.style.display === 'none' || !navLinks.style.display) {
                        navLinks.style.display = 'flex';
                    } else {
                        navLinks.style.display = 'none';
                    }
                }
            });
        }
    }
});

/* ============================================
   WINDOW RESIZE HANDLER
   ============================================ */

window.addEventListener('resize', function() {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (window.innerWidth > 768) {
        if (navLinks) navLinks.style.display = 'flex';
        if (menuBtn) menuBtn.style.display = 'none';
    } else {
        if (menuBtn) menuBtn.style.display = 'block';
        if (navLinks && navLinks.style.display !== 'flex') {
            navLinks.style.display = 'none';
        }
    }
});

/* ============================================
   PAGE LOAD ANIMATIONS
   ============================================ */

// Add fade-in animation to main content
document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('.container');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 100);
    }
});

/* ============================================
   FORM VALIDATION HELPERS
   ============================================ */

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone number validation helper (Uganda format)
function isValidPhone(phone) {
    const phoneRegex = /^(\+256|0)[0-9]{9}$/;
    return phoneRegex.test(phone);
}

// Export functions for global use (if needed)
window.showTab = showTab;
window.orderProduct = orderProduct;
window.toggleSection = toggleSection;
window.uploadDocument = uploadDocument;
window.previewDocument = previewDocument;
window.downloadDocument = downloadDocument;
window.deleteDocument = deleteDocument;
window.filterDocuments = filterDocuments;
window.toggleAdminPanel = toggleAdminPanel;
window.closeModal = closeModal;