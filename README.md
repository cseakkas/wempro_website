# Wempro.com

**Wempro.com** is a modern, responsive, and professional web platform designed to showcase services, portfolios, and projects. Built with scalability and user experience in mind, Wempro is tailored for companies and professionals who want to establish a strong digital presence.

## 🌐 Website
[https://wempro.com](https://wempro.com)

## 🚀 Features
- Responsive and mobile-first design
- SEO-friendly meta tags and structure
- Dynamic service and portfolio sections
- Blog module for news and updates
- Contact form with email integration
- Admin dashboard for content management
- Fast loading and optimized for performance

## 🛠️ Tech Stack
- **Frontend**: HTML5, CSS3, Bootstrap 5, JavaScript, jQuery
- **Backend**: Django (Python)
- **Database**: MySQL / PostgreSQL
- **Admin**: Django Admin / Custom Panel
- **Deployment**: Gunicorn, Nginx, Ubuntu VPS

## 🧩 Folder Structure
```
wempro/
├── static/
│   ├── css/
│   ├── js/
│   └── img/
├── templates/
│   ├── home/
│   ├── services/
│   ├── portfolio/
│   └── contact/
├── wempro/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── manage.py
└── README.md
```

## ⚙️ Installation (Development)
```bash
git clone https://github.com/yourusername/wempro.git
cd wempro
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## 🔐 Environment Variables
Create a `.env` file in the root directory:
```
DEBUG=True
SECRET_KEY=your-secret-key
ALLOWED_HOSTS=127.0.0.1, localhost
DATABASE_URL=your-database-url
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_HOST_USER=you@example.com
EMAIL_HOST_PASSWORD=your-email-password
```

## 📬 Contact
For support or inquiries:
- Email: support@wempro.com
- Website: [https://wempro.com](https://wempro.com)

## 📄 License
This project is licensed under the [MIT License](LICENSE).
