import { assets } from "../constants";

export const products = [
  // id: 1 - School Management System
  {
    id: 1,
    name: "School Management System",
    slug: "school-management-system",
    logo_path: assets.ophir_school_management_logo,
    description: "All-in-One School Management System",
    benefits: "The School Management System simplifies daily school operations by bringing student records, academic performance, attendance, and financial management into one centralized platform. Schools can reduce paperwork, improve administrative efficiency, monitor student progress, and maintain accurate academic and financial records. With organized student information and streamlined workflows, administrators and teachers can spend less time on manual tasks and more time supporting student success.",
    for: [
      {
        id: 1,
        label: "School Administrators",
        description: "Manage student records, academic years, grade levels, and school operations efficiently.",
        icon: "FaSchool"
      },
      {
        id: 2,
        label: "Teachers & Staff",
        description: "Track student attendance, manage academic records, and monitor student performance.",
        icon: "FaChalkboardTeacher"
      },
      {
        id: 3,
        label: "School Accountants",
        description: "Manage student balances, record cash transactions, and maintain accurate financial records.",
        icon: "FaMoneyBillWave"
      }
    ],
    images: [],
    production_links: [
      { id: 1, label: "Web Application", url: "https://example.com" }
    ],
    features: [
      {
        id: 101,
        title: "Student Management",
        description: "Maintain student profiles, personal information, and student identification records."
      },
      {
        id: 102,
        title: "Academic Year Management",
        description: "Organize academic years, grade levels, and class assignments."
      },
      {
        id: 103,
        title: "Student Attendance",
        description: "Record and monitor daily student attendance efficiently."
      },
      {
        id: 104,
        title: "Student Financial Management",
        description: "Track student balances, cash deposits, withdrawals, and transaction history."
      },
      {
        id: 105,
        title: "Academic Performance Tracking",
        description: "Manage student grades, examination results, and academic progress."
      },
      {
        id: 106,
        title: "Reports & Analytics",
        description: "Generate organized reports for student records, attendance, and financial transactions."
      }
    ],
    is_active: true,
  },
  // id: 2 - Car Business Management Software
  {
    id: 2,
    name: "Car Business Management Software",
    slug: "car-business-management-software",
    logo_path: assets.cbm_logo,
    description: "Complete Car Dealership & Vehicle Sales Management System",
    benefits:
      "Manage vehicle inventory, customer information, sales transactions, and payment records efficiently in one centralized system. Track vehicle purchases, selling prices, outstanding balances, business expenses, and overall profitability with ease.",
    for: [
      "Car Dealership Owners",
      "Car Sales Representatives",
      "Dealership Accountants",
    ],
    images: [],
    production_links: [
      {
        id: 1,
        label: "Web Application",
        url: "https://example.com",
      },
    ],
    features: [
      {
        title: "Vehicle Inventory Management",
        description:
          "Manage vehicle details, specifications, purchase prices, selling prices, and availability status in one place.",
      },
      {
        title: "Purchase & Sales Management",
        description:
          "Track vehicle purchases, sales transactions, selling prices, and completed sales records efficiently.",
      },
      {
        title: "Customer Management",
        description:
          "Maintain customer profiles, contact information, and vehicle purchase histories for better customer service.",
      },
      {
        title: "Payment & Balance Tracking",
        description:
          "Record customer payments, monitor outstanding balances, and keep accurate financial transaction records.",
      },
      {
        title: "Profit & Expense Tracking",
        description:
          "Monitor vehicle acquisition costs, business expenses, sales revenue, and profit for each vehicle.",
      },
      {
        title: "Sales Reports & Analytics",
        description:
          "Generate reports on vehicle inventory, sales performance, revenue, expenses, and overall business profitability.",
      },
    ],
    is_active: true,
  },
  // id: 3 - Shop Pro
  {
    id: 3,
    name: "Shop Pro",
    slug: "shop-pro",
    logo_path: assets.shop_pro_logo,
    description: "All-in-One Retail Shop Management System",
    benefits: "The Retail Shop Management System simplifies daily retail operations by centralizing product inventory, sales transactions, stock monitoring, and financial records in one convenient platform. Shop owners can monitor stock levels, track sales performance, manage product information, and maintain accurate transaction records. By reducing manual work and improving inventory control, businesses can minimize stock discrepancies, make better purchasing decisions, and manage their shops more efficiently.",
    for: [
      {
        id: 1,
        label: "Retail Shop Owners",
        description: "Manage products, monitor inventory, track sales, and oversee daily business operations.",
        icon: "FaStore"
      },
      {
        id: 2,
        label: "Cashiers & Sales Staff",
        description: "Process customer purchases, record transactions, and manage daily sales activities.",
        icon: "FaCashRegister"
      },
      {
        id: 3,
        label: "Inventory Managers",
        description: "Monitor stock levels, manage product quantities, and track inventory movements.",
        icon: "FaBoxes"
      }
    ],
    images: [],
    production_links: [
      { id: 1, label: "Web Application", url: "https://example.com" }
    ],
    features: [
      {
        id: 201,
        title: "Product Management",
        description: "Organize product details, categories, prices, and stock information."
      },
      {
        id: 202,
        title: "Inventory Management",
        description: "Monitor stock levels, track stock movements, and identify low-stock products."
      },
      {
        id: 203,
        title: "Sales & Transactions",
        description: "Record sales, calculate totals, and maintain transaction history."
      },
      {
        id: 204,
        title: "Purchase Management",
        description: "Record supplier purchases and track incoming inventory."
      },
      {
        id: 205,
        title: "Customer & Supplier Management",
        description: "Maintain customer and supplier information for everyday business operations."
      },
      {
        id: 206,
        title: "Reports & Analytics",
        description: "Review sales performance, inventory status, and business transaction reports."
      }
    ],
    is_active: true,
  },
  // id: 4 - Ophir Restaurant POS
  {
    id: 4,
    name: "Ophir Restaurant POS",
    slug: "ophir-restaurant-pos",
    logo_path: assets.ophirpos_logo,
    description: "Complete point-of-sale and table management system for restaurants.",
    benefits: "Ophir Restaurant POS optimizes restaurant operations by speeding up order processing, eliminating kitchen communication bottlenecks, and automatically tracking ingredient inventory. Restaurant owners gain real-time sales visibility and actionable analytics to maximize profitability and reduce food waste.",
    for: [
      {
        id: 1,
        label: "Restaurant & Cafe Owners",
        description: "Business owners seeking full operational clarity and real-time sales revenue analytics.",
        icon: "FaStore"
      },
      {
        id: 2,
        label: "Floor Captains & Waitstaff",
        description: "Staff members needing quick table ordering, bill splitting, and instant kitchen transmission.",
        icon: "FaReceipt"
      },
      {
        id: 3,
        label: "Kitchen Managers & Chefs",
        description: "Kitchen teams tracking live incoming tickets and ingredient stock consumption.",
        icon: "FaConciergeBell"
      }
    ],
    images: assets.ophirpos_previews,
    production_links: [
      { id: 1, label: "Android", url: "https://example.com" },
      { id: 2, label: "iOS", url: "https://example.com" },
    ],
    features: [
      { id: 601, title: "Table & Order Management", description: "Manage dine-in, takeaway, and delivery orders" },
      { id: 602, title: "Inventory Tracking", description: "Monitor stock levels and ingredient usage" },
      { id: 603, title: "Sales Analytics Dashboard", description: "Real-time reports on daily revenue and top items" },
      { id: 604, title: "Sales Analytics Dashboard", description: "Real-time reports on daily revenue and top items" },
      { id: 603, title: "Sales Analytics Dashboard", description: "Real-time reports on daily revenue and top items" },
      { id: 603, title: "Sales Analytics Dashboard", description: "Real-time reports on daily revenue and top items" }
    ],
    is_active: true,
  },
  // id: 5 - Ophir Business Management Software
  {
    id: 5,
    name: "Ophir Business Management Software",
    slug: "ophir-business-management-software",
    logo_path: "#",
    description: "All-in-One Business Management System",
    benefits: "A lot of businesss",
    for: [
      {
        id: 1,
        label: "Bla Bla Bla",
        description: "descriiptoin",
        icon: "FaCar",
      }
    ],
    is_active: true,
  },
  // id: 6 - Love Car Application
  {
    id: 6,
    name: "Love Car (Application)",
    slug: "love-car",
    logo_path: assets.lovecar_logo,
    description: "All-in-One Car Management System",
    benefits: "Love Car takes the stress out of vehicle ownership by centralizing fuel tracking, maintenance schedules, and daily expenses into one easy-to-use mobile dashboard. Drivers can prevent costly breakdowns with timely automated alerts, optimize fuel consumption, and effortlessly keep accurate financial records for personal or family vehicle fleets.",
    for: [
      {
        id: 1,
        label: "Individual Car Owners",
        description: "Drivers wanting to track fuel efficiency, repair logs, and daily driving expenses.",
        icon: "FaCar"
      },
      {
        id: 2,
        label: "Family Fleet Managers",
        description: "Head of households managing maintenance schedules across multiple family vehicles.",
        icon: "FaUsers"
      },
      {
        id: 3,
        label: "Ride-Hailing & Taxi Drivers",
        description: "Professional drivers needing accurate profit/loss and maintenance records.",
        icon: "FaRoute"
      }
    ],
    images: assets.lovecar_previews,
    production_links: [
      { id: 1, label: "Android", url: "https://example.com", },
      { id: 2, label: "iOS", url: "https://example.com", },
    ],
    features: [
      { id: 101, title: "Fuel Tracking", description: "Monitor fuel consumption & costs" },
      { id: 102, title: "Maintenance Reminders", description: "Alerts for oil change & servicing" },
      { id: 103, title: "Expense Management", description: "Track tolls, parking, & repair costs" },
      { id: 104, title: "Cloud Backup & Sync", description: "Sync data across multiple devices" },
      { id: 105, title: "24/7 Priority Support", description: "Get instant live chat support" }
    ],
    is_active: true,
  },
];

export const projects = [
  ...products.map(({ name, logo_path }) => ({ name, logo_path })),
  { name: "Start Grade Education", logo_path: assets.stargrade_logo },
  { name: "Food Burma", logo_path: assets.foodburma_logo },
  { name: "Sayar Zaw Math", logo_path: assets.sayazawmaths_logo }
];