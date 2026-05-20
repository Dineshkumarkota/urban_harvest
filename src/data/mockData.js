// Mock data for the dashboard

export const mockOrders = [
  {
    id: 1,
    orderNumber: '#ORD001',
    customer: 'John Smith',
    items: 5,
    total: '$45.99',
    status: 'Delivered',
    date: '2024-05-18',
    address: '123 Main St, City'
  },
  {
    id: 2,
    orderNumber: '#ORD002',
    customer: 'Sarah Johnson',
    items: 3,
    total: '$32.50',
    status: 'In Transit',
    date: '2024-05-19',
    address: '456 Oak Ave, Town'
  },
  {
    id: 3,
    orderNumber: '#ORD003',
    customer: 'Michael Brown',
    items: 8,
    total: '$78.00',
    status: 'Pending',
    date: '2024-05-20',
    address: '789 Elm Rd, Village'
  },
  {
    id: 4,
    orderNumber: '#ORD004',
    customer: 'Emily Davis',
    items: 4,
    total: '$56.75',
    status: 'Delivered',
    date: '2024-05-17',
    address: '321 Pine Ln, Metro'
  },
  {
    id: 5,
    orderNumber: '#ORD005',
    customer: 'Robert Wilson',
    items: 6,
    total: '$89.99',
    status: 'In Transit',
    date: '2024-05-16',
    address: '654 Maple Dr, City'
  }
];

export const mockProducts = [
  {
    id: 1,
    name: 'Organic Tomatoes',
    category: 'Vegetables',
    price: '$4.99',
    quantity: 150,
    status: 'Available',
    image: '🍅',
    description: 'Fresh organic tomatoes from local farms'
  },
  {
    id: 2,
    name: 'Dairy Milk',
    category: 'Dairy',
    price: '$3.49',
    quantity: 0,
    status: 'Out of Stock',
    image: '🥛',
    description: 'Premium quality dairy milk'
  },
  {
    id: 3,
    name: 'Whole Wheat Bread',
    category: 'Bakery',
    price: '$5.99',
    quantity: 75,
    status: 'Available',
    image: '🍞',
    description: 'Fresh baked whole wheat bread'
  },
  {
    id: 4,
    name: 'Fresh Apples',
    category: 'Fruits',
    price: '$6.99',
    quantity: 200,
    status: 'Available',
    image: '🍎',
    description: 'Crisp and juicy red apples'
  },
  {
    id: 5,
    name: 'Chicken Breast',
    category: 'Meat',
    price: '$12.99',
    quantity: 50,
    status: 'Available',
    image: '🍗',
    description: 'Premium quality chicken breast'
  },
  {
    id: 6,
    name: 'Cheddar Cheese',
    category: 'Dairy',
    price: '$7.49',
    quantity: 0,
    status: 'Out of Stock',
    image: '🧀',
    description: 'Sharp cheddar cheese block'
  },
  {
    id: 7,
    name: 'Olive Oil',
    category: 'Oils',
    price: '$15.99',
    quantity: 120,
    status: 'Available',
    image: '🫒',
    description: 'Extra virgin olive oil'
  },
  {
    id: 8,
    name: 'Spinach',
    category: 'Vegetables',
    price: '$2.99',
    quantity: 100,
    status: 'Available',
    image: '🥬',
    description: 'Fresh spinach leaves'
  }
];

export const mockDashboardStats = {
  totalOrders: 1248,
  totalRevenue: '$52,340.00',
  activeUsers: 3450,
  pendingDeliveries: 28,
  ordersGrowth: '+12.5%',
  revenueGrowth: '+8.2%',
  usersGrowth: '+5.8%',
  deliveriesGrowth: '-2.3%'
};

export const mockUser = {
  id: 1,
  name: 'Admin User',
  email: 'admin@urbanharvest.com',
  role: 'Administrator',
  avatar: '👤',
  phone: '+1 (555) 123-4567',
  joinDate: '2023-01-15'
};

export const mockNotifications = [
  { id: 1, message: 'New order received', time: '5 min ago', icon: '📦' },
  { id: 2, message: 'Delivery completed', time: '15 min ago', icon: '✅' },
  { id: 3, message: 'Low stock alert', time: '1 hour ago', icon: '⚠️' }
];
