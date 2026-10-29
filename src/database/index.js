import { assets } from "../constants";

// export const products = [
//   // id: 1 - School Management System
//   {
//     id: 1,
//     name: "School Management System",
//     slug: "school-management-system",
//     logo_path: assets.ophir_school_management_logo,
//     description: "All-in-One School Management System",
//     benefits: "The School Management System simplifies daily school operations by bringing student records, academic performance, attendance, and financial management into one centralized platform. Schools can reduce paperwork, improve administrative efficiency, monitor student progress, and maintain accurate academic and financial records. With organized student information and streamlined workflows, administrators and teachers can spend less time on manual tasks and more time supporting student success.",
//     for: [
//       {
//         id: 1,
//         label: "School Administrators",
//         description: "Manage student records, academic years, grade levels, and school operations efficiently.",
//         icon: "FaSchool"
//       },
//       {
//         id: 2,
//         label: "Teachers & Staff",
//         description: "Track student attendance, manage academic records, and monitor student performance.",
//         icon: "FaChalkboardTeacher"
//       },
//       {
//         id: 3,
//         label: "School Accountants",
//         description: "Manage student balances, record cash transactions, and maintain accurate financial records.",
//         icon: "FaMoneyBillWave"
//       }
//     ],
//     images: [],
//     production_links: [
//       { id: 1, label: "Website", url: "https://example.com" }
//     ],
//     features: [
//       {
//         id: 101,
//         title: "Student Management",
//         description: "Maintain student profiles, personal information, and student identification records.",
//         items: [
//           "Enrollment students",
//           "Tracking .. blabla..",
//         ]
//       },
//       {
//         id: 102,
//         title: "Academic Year Management",
//         description: "Organize academic years, grade levels, and class assignments."
//       },
//       {
//         id: 103,
//         title: "Student Attendance",
//         description: "Record and monitor daily student attendance efficiently."
//       },
//       {
//         id: 104,
//         title: "Student Financial Management",
//         description: "Track student balances, cash deposits, withdrawals, and transaction history."
//       },
//       {
//         id: 105,
//         title: "Academic Performance Tracking",
//         description: "Manage student grades, examination results, and academic progress."
//       },
//       {
//         id: 106,
//         title: "Reports & Analytics",
//         description: "Generate organized reports for student records, attendance, and financial transactions."
//       }
//     ],
//     is_active: true,
//   },
//   // id: 2 - Car Business Management Software
//   {
//     id: 2,
//     name: "Car Business Management Software",
//     slug: "car-business-management-software",
//     logo_path: assets.cbm_logo,
//     description: "Complete Car Dealership & Vehicle Sales Management System",
//     benefits:
//       "Manage vehicle inventory, customer information, sales transactions, and payment records efficiently in one centralized system. Track vehicle purchases, selling prices, outstanding balances, business expenses, and overall profitability with ease.",
//     for: [
//       "Car Dealership Owners",
//       "Car Sales Representatives",
//       "Dealership Accountants",
//     ],
//     images: [],
//     production_links: [
//       {
//         id: 1,
//         label: "Website",
//         url: "https://example.com",
//       },
//     ],
//     features: [
//       {
//         title: "Vehicle Inventory Management",
//         description:
//           "Manage vehicle details, specifications, purchase prices, selling prices, and availability status in one place.",
//       },
//       {
//         title: "Purchase & Sales Management",
//         description:
//           "Track vehicle purchases, sales transactions, selling prices, and completed sales records efficiently.",
//       },
//       {
//         title: "Customer Management",
//         description:
//           "Maintain customer profiles, contact information, and vehicle purchase histories for better customer service.",
//       },
//       {
//         title: "Payment & Balance Tracking",
//         description:
//           "Record customer payments, monitor outstanding balances, and keep accurate financial transaction records.",
//       },
//       {
//         title: "Profit & Expense Tracking",
//         description:
//           "Monitor vehicle acquisition costs, business expenses, sales revenue, and profit for each vehicle.",
//       },
//       {
//         title: "Sales Reports & Analytics",
//         description:
//           "Generate reports on vehicle inventory, sales performance, revenue, expenses, and overall business profitability.",
//       },
//     ],
//     is_active: true,
//   },
//   // id: 3 - Shop Pro
//   {
//     id: 3,
//     name: "Shop Pro",
//     slug: "shop-pro",
//     logo_path: assets.shop_pro_logo,
//     description: "All-in-One Retail Shop Management System",
//     benefits: "The Retail Shop Management System simplifies daily retail operations by centralizing product inventory, sales transactions, stock monitoring, and financial records in one convenient platform. Shop owners can monitor stock levels, track sales performance, manage product information, and maintain accurate transaction records. By reducing manual work and improving inventory control, businesses can minimize stock discrepancies, make better purchasing decisions, and manage their shops more efficiently.",
//     for: [
//       {
//         id: 1,
//         label: "Retail Shop Owners",
//         description: "Manage products, monitor inventory, track sales, and oversee daily business operations.",
//         icon: "FaStore"
//       },
//       {
//         id: 2,
//         label: "Cashiers & Sales Staff",
//         description: "Process customer purchases, record transactions, and manage daily sales activities.",
//         icon: "FaCashRegister"
//       },
//       {
//         id: 3,
//         label: "Inventory Managers",
//         description: "Monitor stock levels, manage product quantities, and track inventory movements.",
//         icon: "FaBoxes"
//       }
//     ],
//     images: [],
//     production_links: [
//       { id: 1, label: "Website", url: "https://example.com" }
//     ],
//     features: [
//       {
//         id: 201,
//         title: "Product Management",
//         description: "Organize product details, categories, prices, and stock information."
//       },
//       {
//         id: 202,
//         title: "Inventory Management",
//         description: "Monitor stock levels, track stock movements, and identify low-stock products."
//       },
//       {
//         id: 203,
//         title: "Sales & Transactions",
//         description: "Record sales, calculate totals, and maintain transaction history."
//       },
//       {
//         id: 204,
//         title: "Purchase Management",
//         description: "Record supplier purchases and track incoming inventory."
//       },
//       {
//         id: 205,
//         title: "Customer & Supplier Management",
//         description: "Maintain customer and supplier information for everyday business operations."
//       },
//       {
//         id: 206,
//         title: "Reports & Analytics",
//         description: "Review sales performance, inventory status, and business transaction reports."
//       }
//     ],
//     is_active: true,
//   },
//   // id: 4 - Ophir Restaurant POS
//   {
//     id: 4,
//     name: "Ophir Restaurant POS",
//     slug: "ophir-restaurant-pos",
//     logo_path: assets.ophirpos_logo,
//     description: "Complete point-of-sale and table management system for restaurants.",
//     benefits: "Ophir Restaurant POS optimizes restaurant operations by speeding up order processing, eliminating kitchen communication bottlenecks, and automatically tracking ingredient inventory. Restaurant owners gain real-time sales visibility and actionable analytics to maximize profitability and reduce food waste.",
//     for: [
//       {
//         id: 1,
//         label: "Restaurant & Cafe Owners",
//         description: "Business owners seeking full operational clarity and real-time sales revenue analytics.",
//         icon: "FaStore"
//       },
//       {
//         id: 2,
//         label: "Floor Captains & Waitstaff",
//         description: "Staff members needing quick table ordering, bill splitting, and instant kitchen transmission.",
//         icon: "FaReceipt"
//       },
//       {
//         id: 3,
//         label: "Kitchen Managers & Chefs",
//         description: "Kitchen teams tracking live incoming tickets and ingredient stock consumption.",
//         icon: "FaConciergeBell"
//       }
//     ],
//     images: assets.ophirpos_previews,
//     production_links: [
//       { id: 1, label: "Android", url: "https://example.com" },
//       { id: 2, label: "iOS", url: "https://example.com" },
//     ],
//     features: [
//       { id: 601, title: "Table & Order Management", description: "Manage dine-in, takeaway, and delivery orders" },
//       { id: 602, title: "Inventory Tracking", description: "Monitor stock levels and ingredient usage" },
//       { id: 603, title: "Sales Analytics Dashboard", description: "Real-time reports on daily revenue and top items" },
//       { id: 604, title: "Sales Analytics Dashboard", description: "Real-time reports on daily revenue and top items" },
//       { id: 603, title: "Sales Analytics Dashboard", description: "Real-time reports on daily revenue and top items" },
//       { id: 603, title: "Sales Analytics Dashboard", description: "Real-time reports on daily revenue and top items" }
//     ],
//     is_active: true,
//   },
//   // id: 5 - Ophir Business Management Software
//   {
//     id: 5,
//     name: "Ophir Business Management Software",
//     slug: "ophir-business-management-software",
//     logo_path: assets.ophir_business_management_logo,
//     description: "All-in-One Business Management System",
//     benefits: "A lot of businesss",
//     for: [
//       {
//         id: 1,
//         label: "Bla Bla Bla",
//         description: "descriiptoin",
//         icon: "FaCar",
//       }
//     ],
//     production_links: [
//       { id: 1, label: "Website", url: "https://ophirschoolmanagement.com" },
//     ],
//     is_active: true,
//   },
//   // id: 6 - Love Car Application
//   {
//     id: 6,
//     name: "Love Car (Application)",
//     slug: "love-car",
//     logo_path: assets.lovecar_logo,
//     description: "All-in-One Car Management System",
//     benefits: "Love Car takes the stress out of vehicle ownership by centralizing fuel tracking, maintenance schedules, and daily expenses into one easy-to-use mobile dashboard. Drivers can prevent costly breakdowns with timely automated alerts, optimize fuel consumption, and effortlessly keep accurate financial records for personal or family vehicle fleets.",
//     for: [
//       {
//         id: 1,
//         label: "Individual Car Owners",
//         description: "Drivers wanting to track fuel efficiency, repair logs, and daily driving expenses.",
//         icon: "FaCar"
//       },
//       {
//         id: 2,
//         label: "Family Fleet Managers",
//         description: "Head of households managing maintenance schedules across multiple family vehicles.",
//         icon: "FaUsers"
//       },
//       {
//         id: 3,
//         label: "Ride-Hailing & Taxi Drivers",
//         description: "Professional drivers needing accurate profit/loss and maintenance records.",
//         icon: "FaRoute"
//       }
//     ],
//     images: assets.lovecar_previews,
//     production_links: [
//       { id: 1, label: "Android", url: "https://example.com", },
//       { id: 2, label: "iOS", url: "https://example.com", },
//     ],
//     features: [
//       { id: 101, title: "Fuel Tracking", description: "Monitor fuel consumption & costs" },
//       { id: 102, title: "Maintenance Reminders", description: "Alerts for oil change & servicing" },
//       { id: 103, title: "Expense Management", description: "Track tolls, parking, & repair costs" },
//       { id: 104, title: "Cloud Backup & Sync", description: "Sync data across multiple devices" },
//       { id: 105, title: "24/7 Priority Support", description: "Get instant live chat support" }
//     ],
//     is_active: true,
//   },
// ];

export const products = [
  // id: 1 - School Management System
  {
    id: 1,
    name: "School Management System",
    slug: "school-management-system",
    logo_path: assets.ophir_school_management_logo,
    description: "All-in-One School Management System",
    benefits:
      "The School Management System helps schools manage student records, attendance, academic performance, and financial information in one place. It reduces paperwork, saves time, and makes daily school operations easier and more efficient. Teachers and administrators can easily track student progress, manage school activities, and maintain accurate records. This allows schools to work more effectively and focus on improving students’ learning experiences.",
    for: [
      {
        id: 1,
        label: "Private Schools",
        description:
          "Manage student records, academic years, grade levels, and school operations efficiently.",
        icon: "FaSchool",
      },
      {
        id: 2,
        label: "International Schools",
        description:
          "Manage international curricula, student attendance, academic records, and student performance.",
        icon: "FaGlobe",
      },
    ],
    images: [],
    production_links: [
      { id: 1, label: "Website", url: "https://example.com" },
    ],
    features: [
      {
        id: 101,
        title: "Student Management",
        description:
          "Maintain student profiles, personal information, and student identification records.",
        items: [
          "Apply for school admission online.",
          "Automatically send applications to the school admin for review.",
          "Register students and maintain enrollment records easily.",
          "Track daily attendance and view attendance percentages for present, absent, and late students.",
          "Monitoring student's academic progress and behavior.",
          "Generate student and enrollment reports.",
          "Enable students, guardians, and teachers to communicate in one place.",
        ],
      },
      {
        id: 102,
        title: "Academic Management",
        description:
          "Organize academic years, grade levels, and class assignments.",
        items: [
          "Schedule academic events and display them on the calendar.",
          "Manage multiple campuses within a single school management system.",
          "Organize classes, grades, and subjects.",
          "Assign teachers to classes and subjects.",
          "Maintain academic records.",
          "Manage class timetables and schedules.",
          // "Record exam results and manage student grades.",
          // "Generate academic performance reports.",
        ],
      },
      {
        id: 103,
        title: "Financial Management",
        description:
          "Record and monitor daily student attendance efficiently.",
        items: [
          "Setup school fees/payment plans. ( Monthly, 2 Installments )",
          "Manage discounts, promotions, and student fines with ease.",
          "Track unpaid fees and outstanding balances by grade.",
          "Generate financial reports on income and payments.",
          "Estimate the total school fees for an academic year in advance.",
          "Process payments through the cashier and generate payment receipts instantly.",
        ],
      },
      {
        id: 104,
        title: "Academic Performance Tracking",
        description:
          "Track student balances, cash deposits, withdrawals, and transaction history.",
        items: [
          "Record and manage student grades.",
          "Track student examination results.",
          "Monitor academic progress by class and grade.",
          // "Review individual student performance.",
          // "Identify students who need academic support.",
        ],
      },
      {
        id: 106,
        title: "Reports & Analytics",
        description:
          "Generate organized reports for student records, attendance, and financial transactions.",
        items: [
          "Generate daily student attendance reports.",
          "View student and teacher attendance statistics.",
          "Monitor class attendance and absences.",
          // "Generate academic performance reports.",
          "Review student enrollment records.",
          "Analyze school data for better management.",
        ],
      },
      {
        id: 105,
        title: "Others",
        description: "More features in us.",
        items: [
          "Share important announcements and notices with students, teachers, and guardians.",
          "Publish and share the latest school news, activities, and achievements.",
        ]
      },
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
        label: "Website",
        url: "https://example.com",
      },
    ],
    features: [
      {
        id: 201,
        title: "Vehicle Inventory Management",
        description:
          "Manage vehicle details, specifications, purchase prices, selling prices, and availability status in one place.",
        items: [
          "Register and manage vehicle information",
          "Maintain vehicle specifications and details",
          "Track vehicle purchase and selling prices",
          "Monitor vehicle availability status",
          "View and organize vehicle inventory",
        ],
      },
      {
        id: 202,
        title: "Purchase & Sales Management",
        description:
          "Track vehicle purchases, sales transactions, selling prices, and completed sales records efficiently.",
        items: [
          "Record vehicle purchase transactions",
          "Manage vehicle sales and selling prices",
          "Track completed sales records",
          "Maintain vehicle purchase and sales histories",
          "Monitor ongoing and completed transactions",
        ],
      },
      {
        id: 203,
        title: "Customer Management",
        description:
          "Maintain customer profiles, contact information, and vehicle purchase histories for better customer service.",
        items: [
          "Register and manage customer profiles",
          "Maintain customer contact information",
          "Track customer vehicle purchase histories",
          "Access customer transaction records",
          "Organize customer information",
        ],
      },
      {
        id: 204,
        title: "Payment & Balance Tracking",
        description:
          "Record customer payments, monitor outstanding balances, and keep accurate financial transaction records.",
        items: [
          "Record customer payments",
          "Track outstanding customer balances",
          "Monitor partial and completed payments",
          "Review payment transaction histories",
          "Maintain accurate customer financial records",
        ],
      },
      {
        id: 205,
        title: "Profit & Expense Tracking",
        description:
          "Monitor vehicle acquisition costs, business expenses, sales revenue, and profit for each vehicle.",
        items: [
          "Track vehicle acquisition costs",
          "Record business expenses",
          "Monitor vehicle sales revenue",
          "Calculate profit for individual vehicles",
          "Review overall business profitability",
        ],
      },
      {
        id: 206,
        title: "Sales Reports & Analytics",
        description:
          "Generate reports on vehicle inventory, sales performance, revenue, expenses, and overall business profitability.",
        items: [
          "Generate vehicle inventory reports",
          "Analyze vehicle sales performance",
          "Review sales revenue and business expenses",
          "Compare vehicle purchase costs and selling prices",
          "Monitor overall business profitability",
        ],
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
    benefits:
      "The Retail Shop Management System simplifies daily retail operations by centralizing product inventory, sales transactions, stock monitoring, and financial records in one convenient platform. Shop owners can monitor stock levels, track sales performance, manage product information, and maintain accurate transaction records. By reducing manual work and improving inventory control, businesses can minimize stock discrepancies, make better purchasing decisions, and manage their shops more efficiently.",
    for: [
      {
        id: 1,
        label: "Retail Shop Owners",
        description:
          "Manage products, monitor inventory, track sales, and oversee daily business operations.",
        icon: "FaStore",
      },
      {
        id: 2,
        label: "Cashiers & Sales Staff",
        description:
          "Process customer purchases, record transactions, and manage daily sales activities.",
        icon: "FaCashRegister",
      },
      {
        id: 3,
        label: "Inventory Managers",
        description:
          "Monitor stock levels, manage product quantities, and track inventory movements.",
        icon: "FaBoxes",
      },
    ],
    images: [],
    production_links: [
      { id: 1, label: "Website", url: "https://example.com" },
    ],
    features: [
      {
        id: 301,
        title: "Product Management",
        description:
          "Organize product details, categories, prices, and stock information.",
        items: [
          "Add and manage product information",
          "Organize products by category",
          "Set and update product prices",
          "Maintain product codes and details",
          "View product availability and stock information",
        ],
      },
      {
        id: 302,
        title: "Inventory Management",
        description:
          "Monitor stock levels, track stock movements, and identify low-stock products.",
        items: [
          "Monitor current stock quantities",
          "Track incoming and outgoing inventory",
          "Identify low-stock products",
          "Maintain inventory movement history",
          "Improve stock control and accuracy",
        ],
      },
      {
        id: 303,
        title: "Sales & Transactions",
        description:
          "Record sales, calculate totals, and maintain transaction history.",
        items: [
          "Process customer sales transactions",
          "Calculate item totals and order amounts",
          "Record completed sales",
          "Maintain sales transaction histories",
          "Review daily sales activities",
        ],
      },
      {
        id: 304,
        title: "Purchase Management",
        description:
          "Record supplier purchases and track incoming inventory.",
        items: [
          "Record product purchase transactions",
          "Manage supplier purchase information",
          "Track incoming stock quantities",
          "Monitor purchase costs",
          "Maintain purchase transaction histories",
        ],
      },
      {
        id: 305,
        title: "Customer & Supplier Management",
        description:
          "Maintain customer and supplier information for everyday business operations.",
        items: [
          "Register and manage customer profiles",
          "Maintain supplier contact information",
          "Track customer purchase histories",
          "Organize supplier information",
          "Access customer and supplier records",
        ],
      },
      {
        id: 306,
        title: "Reports & Analytics",
        description:
          "Review sales performance, inventory status, and business transaction reports.",
        items: [
          "Generate daily and periodic sales reports",
          "Review inventory status and stock movements",
          "Analyze product sales performance",
          "Review purchase and sales transactions",
          "Monitor overall shop performance",
        ],
      },
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
    benefits:
      "Ophir Restaurant POS optimizes restaurant operations by speeding up order processing, eliminating kitchen communication bottlenecks, and automatically tracking ingredient inventory. Restaurant owners gain real-time sales visibility and actionable analytics to maximize profitability and reduce food waste.",
    for: [
      {
        id: 1,
        label: "Restaurant & Cafe Owners",
        description:
          "Business owners seeking full operational clarity and real-time sales revenue analytics.",
        icon: "FaStore",
      },
      {
        id: 2,
        label: "Floor Captains & Waitstaff",
        description:
          "Staff members needing quick table ordering, bill splitting, and instant kitchen transmission.",
        icon: "FaReceipt",
      },
      {
        id: 3,
        label: "Kitchen Managers & Chefs",
        description:
          "Kitchen teams tracking live incoming tickets and ingredient stock consumption.",
        icon: "FaConciergeBell",
      },
    ],
    images: assets.ophirpos_previews,
    production_links: [
      { id: 1, label: "Android", url: "https://example.com" },
      { id: 2, label: "iOS", url: "https://example.com" },
    ],
    features: [
      {
        id: 401,
        title: "Table & Order Management",
        description:
          "Manage dine-in, takeaway, and delivery orders.",
        items: [
          "Manage restaurant tables and seating",
          "Create and process dine-in orders",
          "Handle takeaway orders",
          "Manage delivery orders",
          "Track order status and progress",
        ],
      },
      {
        id: 402,
        title: "Inventory Tracking",
        description:
          "Monitor stock levels and ingredient usage.",
        items: [
          "Monitor ingredient stock levels",
          "Track ingredient usage during order preparation",
          "Identify low-stock ingredients",
          "Maintain inventory movement records",
          "Monitor ingredient consumption",
        ],
      },
      {
        id: 403,
        title: "Sales Analytics Dashboard",
        description:
          "Real-time reports on daily revenue and top items.",
        items: [
          "Monitor daily sales revenue",
          "Identify top-selling menu items",
          "Review sales performance",
          "Analyze revenue trends",
          "Track restaurant sales activities",
        ],
      },
      {
        id: 404,
        title: "Kitchen Order Management",
        description:
          "Streamline communication between service staff and kitchen teams.",
        items: [
          "Send orders to the kitchen",
          "View incoming kitchen orders",
          "Track order preparation status",
          "Coordinate order updates between staff and kitchen",
          "Monitor pending orders",
        ],
      },
    ],
    is_active: true,
  },

  // id: 5 - Ophir Business Management Software
  {
    id: 5,
    name: "Ophir Business Management Software",
    slug: "ophir-business-management-software",
    logo_path: assets.ophir_business_management_logo,
    description: "All-in-One Business Management System",
    benefits:
      "Manage essential business activities, customer information, financial records, and operational performance in one centralized system.",
    for: [
      {
        id: 1,
        label: "Business Owners",
        description:
          "Oversee business operations, financial performance, and important business records.",
        icon: "FaBriefcase",
      },
      {
        id: 2,
        label: "Business Managers",
        description:
          "Organize daily operations, monitor activities, and review business performance.",
        icon: "FaUsers",
      },
      {
        id: 3,
        label: "Accountants",
        description:
          "Maintain financial records, track income and expenses, and review transactions.",
        icon: "FaMoneyBillWave",
      },
    ],
    production_links: [
      { id: 1, label: "Website", url: "https://ophirschoolmanagement.com" },
    ],
    features: [
      {
        id: 501,
        title: "Business Operations Management",
        description:
          "Manage essential business activities and operational records in one centralized system.",
        items: [
          "Organize daily business operations",
          "Maintain centralized business records",
          "Monitor ongoing business activities",
          "Improve operational workflows",
          "Keep important business information organized",
        ],
      },
      {
        id: 502,
        title: "Customer Management",
        description:
          "Maintain customer information and business relationship records.",
        items: [
          "Register and manage customer profiles",
          "Maintain customer contact information",
          "Review customer activity histories",
          "Organize customer records",
          "Access customer information when needed",
        ],
      },
      {
        id: 503,
        title: "Financial Management",
        description:
          "Track business income, expenses, and financial transactions.",
        items: [
          "Record business income",
          "Track operational expenses",
          "Maintain financial transaction histories",
          "Review income and expense summaries",
          "Organize financial records",
        ],
      },
      {
        id: 504,
        title: "Reports & Analytics",
        description:
          "Review business performance through organized reports and analytics.",
        items: [
          "Generate business activity reports",
          "Review financial summaries",
          "Monitor operational performance",
          "Analyze business activity records",
          "Support business decision-making with reports",
        ],
      },
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
    benefits:
      "Love Car takes the stress out of vehicle ownership by centralizing fuel tracking, maintenance schedules, and daily expenses into one easy-to-use mobile dashboard. Drivers can prevent costly breakdowns with timely automated alerts, optimize fuel consumption, and effortlessly keep accurate financial records for personal or family vehicle fleets.",
    for: [
      {
        id: 1,
        label: "Individual Car Owners",
        description:
          "Drivers wanting to track fuel efficiency, repair logs, and daily driving expenses.",
        icon: "FaCar",
      },
      {
        id: 2,
        label: "Family Fleet Managers",
        description:
          "Head of households managing maintenance schedules across multiple family vehicles.",
        icon: "FaUsers",
      },
      {
        id: 3,
        label: "Ride-Hailing & Taxi Drivers",
        description:
          "Professional drivers needing accurate profit/loss and maintenance records.",
        icon: "FaRoute",
      },
    ],
    images: assets.lovecar_previews,
    production_links: [
      { id: 1, label: "Android", url: "https://example.com" },
      { id: 2, label: "iOS", url: "https://example.com" },
    ],
    features: [
      {
        id: 601,
        title: "Fuel Tracking",
        description: "Monitor fuel consumption and costs.",
        items: [
          "Record fuel purchases and refills",
          "Track fuel expenses",
          "Monitor fuel consumption",
          "Calculate vehicle fuel efficiency",
          "Review fuel usage history",
        ],
      },
      {
        id: 602,
        title: "Maintenance Reminders",
        description: "Receive alerts for oil changes and vehicle servicing.",
        items: [
          "Schedule vehicle maintenance",
          "Set oil change reminders",
          "Track servicing schedules",
          "Maintain vehicle maintenance histories",
          "Receive reminders for upcoming maintenance",
        ],
      },
      {
        id: 603,
        title: "Expense Management",
        description: "Track tolls, parking, and repair costs.",
        items: [
          "Record vehicle-related expenses",
          "Track toll and parking costs",
          "Manage repair and servicing expenses",
          "Review daily and monthly expenses",
          "Monitor overall vehicle ownership costs",
        ],
      },
      {
        id: 604,
        title: "Cloud Backup & Sync",
        description: "Sync data across multiple devices.",
        items: [
          "Synchronize vehicle records across devices",
          "Access vehicle data across supported devices",
          "Back up vehicle information",
          "Keep records consistent across devices",
        ],
      },
      {
        id: 605,
        title: "24/7 Priority Support",
        description: "Get instant live chat support.",
        items: [
          "Access customer support",
          "Get assistance with application issues",
          "Receive help with vehicle management features",
          "Contact support when assistance is needed",
        ],
      },
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