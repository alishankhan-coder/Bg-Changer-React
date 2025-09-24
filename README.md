# React Background Color Changer

A simple yet elegant React application that allows users to change the background color of the screen by clicking on colorful buttons. Built with React, Vite, and styled with Tailwind CSS.



## 🎨 Features

- **Interactive Color Buttons**: Click any color button to instantly change the background
- **Responsive Design**: Styled with Tailwind CSS for a clean, modern look
- **Real-time Updates**: Background color changes instantly with React state management
- **Fixed Footer**: Color buttons are positioned at the bottom of the screen for easy access

## 🛠️ Technology Stack

- **React 19.1.0**: Modern React with hooks for state management
- **Vite**: Fast build tool and development server
- **Tailwind CSS 3.4.19**: Utility-first CSS framework for styling
- **PostCSS**: CSS processing with Tailwind integration
- **ESLint**: Code linting for better code quality

## 🚀 How It Works

1. The main `App` component manages the background color state using React's `useState` hook
2. The `Wraper` component renders a collection of color buttons in a fixed footer at the bottom of the screen
3. Each `Button` component represents a different color and handles click events
4. When clicked, a button updates the background color state, which immediately reflects on the screen

### Component Structure

```
App.jsx          # Main component with state management
├── Wraper.jsx   # Container component with footer styling
    └── Buttons.jsx  # Individual color button components
```

## 🎯 How to Run Locally

1. **Clone or download the project**
   ```bash
   cd BG-Changer-React+Tailwind
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Color Palette

The application includes buttons for various colors including:
- Red, Green, Blue (primary colors)
- Yellow, Orange, Pink (vibrant colors)
- Purple, Olive, Gray (additional colors)
- And more!

## 💡 Key Implementation Details

- **State Management**: Uses React's `useState` hook to manage the current background color
- **Props Passing**: Color change function is passed down from App to Button components
- **Event Handling**: Each button has an onClick handler that updates the global background color
- **CSS Classes**: Tailwind CSS classes are used for styling, including fixed positioning and responsive design
- **Component Reusability**: The Button component is reusable and accepts different colors and labels as props

## 🔧 Development Environment

- **Node.js**: Latest LTS version recommended
- **Package Manager**: npm (comes with Node.js)
- **Build Tool**: Vite for fast development and building
- **CSS Framework**: Tailwind CSS for rapid styling

## 📝 Notes

This project demonstrates fundamental React concepts including:
- Component composition
- State management with hooks
- Props and event handling
- Modern CSS with Tailwind
- Fast development with Vite

Perfect for learning React basics or as a foundation for more complex applications!



<img width="1920" height="1080" alt="Screenshot (20)" src="https://github.com/user-attachments/assets/36aad9c8-353b-4c7a-b9a3-d49521fff9ba" />
<img width="1920" height="1080" alt="Screenshot (19)" src="https://github.com/user-attachments/assets/9d00c055-cf52-4f1a-8156-68bc217fde41" />
<img width="1920" height="1080" alt="Screenshot (18)" src="https://github.com/user-attachments/assets/f9c21462-8bc6-49c0-9c5c-67f22c63ae0f" />
<img width="1920" height="1080" alt="Screenshot (24)" src="https://github.com/user-attachments/assets/607947b9-b710-401a-9797-b837bdf371fc" />
<img width="1920" height="1080" alt="Screenshot (23)" src="https://github.com/user-attachments/assets/e517d844-ee8b-4bdf-9fac-f0f8d30e0f9f" />
<img width="1920" height="1080" alt="Screenshot (22)" src="https://github.com/user-attachments/assets/284f677c-0efd-47d3-bf9b-6f19b080e0f1" />
<img width="1920" height="1080" alt="Screenshot (21)" src="https://github.com/user-attachments/assets/7bb65672-8e5d-4e6d-b40a-ab173cfc66ae" />
