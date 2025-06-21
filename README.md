# LifeCalc - All-in-One Daily Life Calculator

LifeCalc is a modern web application that brings together various everyday calculators in one place. Built with Next.js and Tailwind CSS, it provides a beautiful and responsive user interface for performing common calculations.

## Features

- **EMI Calculator**: Calculate monthly EMI payments for loans and mortgages
- **BMI Calculator**: Calculate Body Mass Index and get health insights
- **Age Calculator**: Calculate exact age and important life milestones
- **SIP Calculator**: Plan your Systematic Investment Plan returns
- **Fuel Cost Estimator**: Calculate journey fuel costs and plan trips
- **Calorie Calculator**: Calculate daily calorie needs and track nutrition
- **Unit Converter**: Convert between different units of measurement
- **Paint Calculator**: Calculate the amount of paint needed for walls

## Tech Stack

- **Frontend Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Heroicons

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/lifecal.git
   cd lifecal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
lifecal/
├── src/
│   ├── app/
│   │   ├── calculators/
│   │   │   ├── emi/
│   │   │   ├── bmi/
│   │   │   ├── age/
│   │   │   ├── sip/
│   │   │   ├── fuel/
│   │   │   ├── calories/
│   │   │   ├── unit-converter/
│   │   │   └── paint/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── CalculatorCard.tsx
│       └── Footer.tsx
├── public/
├── package.json
├── tailwind.config.ts
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
