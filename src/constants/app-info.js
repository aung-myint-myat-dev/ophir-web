// App Info
export const APP_NAME = "Ophir IT Solutions";
export const APP_VERSION = "1.0.0";

// API
export const API_BASE_URL = "https://localhost:3000";
export const TIMEOUT = 5000;

// Routes
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  STAR_GRADE: "/saya-zaw",
  POS: "/pos-page",
};

// Roles (enum-like)
export const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
  GUEST: "guest",
};

// Status
export const STATUS = {
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading",
};

// Theme Colors
export const COLORS = {
  PRIMARY: "#0d6efd",
  SECONDARY: "#6c757d",
  SUCCESS: "#198754",
  DANGER: "#dc3545",
  WARNING: "#ffc107",
};

// Array Example
export const SOCIAL_LINKS = [
  { name: "Facebook", url: "https://facebook.com" },
  { name: "Twitter", url: "https://twitter.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
];

// Regex
export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[0-9]{7,15}$/,
};

// Default Values
export const DEFAULTS = {
  PAGE_SIZE: 10,
  LANGUAGE: "en",
};