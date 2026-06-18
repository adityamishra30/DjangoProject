# Antigravity Tech - Django Web Application

A premium, interactive, and fully responsive multi-page website built with Django, customized vanilla CSS, and client-side JavaScript. This project showcases next-gen digital design featuring glassmorphism, dynamic animations, and interactive web elements.

---

## ✨ Features

- **🌓 Dynamic Theme Switcher:** Integrated dark and light theme toggle with local storage persistence to remember user preferences.
- **📱 Responsive Layouts:** Optimized for all screen sizes (mobile, tablet, and desktop) utilizing CSS flexbox and grid components.
- **✨ Micro-Animations:** Clean transition variables, custom hover translations, and radial glow backgrounds.
- **📊 Interactive Stats Counter:** Number statistics on the home page that dynamically count up when scrolled into view.
- **💬 Testimonials Slider:** A custom, autoplaying slide carousel showcasing client feedback with navigation buttons and indicator dots.
- **🔍 FAQ Accordion:** Expanding FAQ panels with smooth height transitions.
- **🗂 Specialization Tabs:** Interactive tab panels on the About page detailing workflows.
- **📬 Contact Form Toast:** Dynamic feedback notifications with a progress timer on email/contact submission.

---

## 🛠 Tech Stack

- **Backend:** Python, Django 6.0
- **Frontend:** HTML5 (semantic elements), Custom CSS3, Vanilla JavaScript
- **Icons:** FontAwesome v6
- **Fonts:** Outfit, Plus Jakarta Sans (via Google Fonts)

---

## 📂 Directory Structure

```text
myproject/
│
├── .gitignore
├── README.md
│
└── my_django_project/
    ├── manage.py
    │
    ├── my_django_project/       # Settings & routing config
    │   ├── settings.py
    │   ├── urls.py
    │   └── views.py
    │
    ├── static/                  # Shared stylesheet and scripts
    │   ├── style.css
    │   └── script.js
    │
    └── templates/               # HTML template configurations
        └── websites/
            ├── base.html
            ├── index.html
            ├── about.html
            └── contact.html
```

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have Python installed on your machine.

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/adityamishra30/DjangoProject.git
   cd DjangoProject
   ```

2. **Navigate into the Django folder:**
   ```bash
   cd my_django_project
   ```

3. **Set up virtual environment (optional but recommended):**
   ```bash
   python -m venv env
   # Activate env (Windows)
   env\Scripts\activate
   # Activate env (Mac/Linux)
   source env/bin/activate
   ```

4. **Apply migrations:**
   ```bash
   python manage.py migrate
   ```

5. **Run the server:**
   ```bash
   python manage.py runserver
   ```

6. Open your browser and navigate to **http://127.0.0.1:8080/** to view the site.
