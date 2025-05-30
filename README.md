# Payroll Management System

This is a full-stack payroll management application designed for small restaurants and businesses to manage employees, process payroll, and handle taxes.

## Features
- Admin authentication (JWT)
- Employee management (Add/Edit/Delete)
- Payroll scheduling (weekly/biweekly/monthly)
- Overtime, tips, and bonus handling
- Tax calculation and compliance features
- PDF payslip generation (planned)

## Tech Stack
- Frontend: React + TailwindCSS
- Backend: Express.js (Node.js)
- Database: PostgreSQL or MongoDB
- Deployment: Vercel (frontend), Render (backend)

## Getting Started
```bash
# Clone the repo
https://github.com/your-username/payroll-app.git
cd payroll-app

# Install dependencies
cd client && npm install
cd ../server && npm install

# Run locally
# Start backend
cd server && npm run dev

# Start frontend
cd ../client && npm run dev