# 🏛️ Aura Estates | Luxury Real Estate Architecture

A high-performance, front-end real estate platform engineered to simulate a premium, high-end brokerage. Built with **React**, **Vite**, and **Tailwind CSS v4**, this application showcases advanced global state management, complex data filtering, and conversion-optimized UI/UX principles.

![Aura Estates Preview](https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000)

## 🚀 Live Demo
[Insert Your Vercel Link Here]

## 🧠 Technical Architecture & Features

### 1. The Filter Engine (Advanced Array Manipulation)
The core of this application is a custom-built search engine. It utilizes React `useState` and JavaScript array methods (`.filter`) to process multiple user inputs simultaneously. 
* Users can filter a mock database by **Property Type**, **Maximum Price**, and **Minimum Bedrooms**.
* The UI dynamically re-renders based on strict conditional logic without requiring a page reload or backend API call.
* Includes a graceful "Empty State" UI fallback if a user's filter combination yields zero results.

### 2. State-Driven Lead Generation ("Demo Mode")
Simulated a high-end CRM integration using multi-input React state forms. The Contact and Private Portfolio capture sections handle user typing, prevent default form submission behaviors, and trigger state-driven UI alerts to demonstrate how the frontend would hand off data to a backend service like Salesforce or a custom API.

### 3. Premium UI/UX & Responsive Design
* **Mobile-First Layout:** Leveraged Tailwind's utility classes (`md:`, `lg:`) to ensure flawless scaling from mobile devices to ultrawide desktop monitors.
* **Luxury Visual Hierarchy:** Implemented glass-morphism (backdrop blurs), dark gradients (`bg-gradient-to-r`), and edge-to-edge photography to convey a multi-million dollar brand identity.
* **Subtle Micro-Interactions:** Added smooth `group-hover` CSS transforms on property cards and agent profiles to elevate the perceived value of the application.

## 🛠️ Tech Stack
* **Framework:** React.js (Functional Components, Hooks)
* **Build Tool:** Vite (for lightning-fast HMR and optimized production builds)
* **Styling:** Tailwind CSS v4
* **Deployment:** Vercel

## 💾 The Mock Data Structure
Instead of relying on a live database, this application runs on a robust, hardcoded JavaScript object structure to simulate a live property feed. 

```javascript
{
  id: 1,
  title: "Modern Glass Villa",
  price: 2450000, // Stored as integer for math/filtering, parsed to locale string in UI
  address: "123 Ocean Breeze Dr, Malibu, CA",
  beds: 4,
  baths: 4.5,
  sqft: 4200,
  type: "Villa",
  image: "...",
  isFeatured: true
}