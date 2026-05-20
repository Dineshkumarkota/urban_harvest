# 🌾 Urban Harvest Dashboard

A responsive and user-friendly admin dashboard for a fictional food delivery/farm-to-table platform called Urban Harvest. Built with React, Redux, and modern UI/UX principles.

## 📋 Project Overview

Urban Harvest Dashboard is a complete admin management system featuring:
- **Login Authentication** - Secure login with "Remember Me" functionality
- **Dashboard** - Real-time statistics and recent orders overview
- **Product Management** - Add, edit, and manage products with search/filter capabilities
- **Responsive Design** - Mobile-first approach for all devices
- **State Management** - Redux for centralized state management
- **Clean Architecture** - Reusable components and organized folder structure

## ✨ Key Features

### 1. **Login Page**
- Email & Password authentication fields
- "Remember Me" checkbox with localStorage
- Form validation with error messages
- Modern gradient design with animations
- Demo credentials display

### 2. **Dashboard**
- Welcome header with user profile
- 4 statistical cards showing:
  - Total Orders (with growth percentage)
  - Total Revenue (with growth percentage)
  - Active Users (with growth percentage)
  - Pending Deliveries (with growth percentage)
- Recent Orders Table with:
  - Order ID, Customer name, Items count
  - Total amount, Status badge, Date
  - Responsive table layout
- Sidebar navigation
- Top navigation header

### 3. **Products Management**
- Product grid/card view with:
  - Product emoji representation
  - Name, category, and description
  - Price and stock quantity
  - Status badge (Available/Out of Stock)
  - Edit and Delete action buttons
- Search functionality (search by name/category)
- Filter buttons (All, Available, Out of Stock)
- Add Product form with validation
- Mock data with 8 pre-populated products

### 4. **Navigation & Layout**
- Fixed sidebar with collapsible menu (mobile responsive)
- Top header with notifications and user profile
- Protected routes (redirects to login if not authenticated)
- Smooth navigation between pages
- Mobile hamburger menu

## 🛠️ Technical Stack

- **Frontend Framework**: React 18.2.0
- **State Management**: Redux Toolkit 2.0.0
- **Routing**: React Router DOM 6.21.0
- **Build Tool**: React Scripts
- **Styling**: CSS3 with CSS Variables
- **Data**: Mock data (no external API)

## 📁 Project Structure

```
urban-harvest-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Sidebar.js
│   │   ├── Header.js
│   │   ├── StatCard.js
│   │   ├── ProductCard.js
│   │   └── OrderTable.js
│   ├── pages/
│   │   ├── Login.js
│   │   ├── Dashboard.js
│   │   └── Products.js
│   ├── redux/
│   │   ├── store.js
│   │   ├── authSlice.js
│   │   └── productSlice.js
│   ├── data/
│   │   └── mockData.js
│   ├── styles/
│   │   ├── Sidebar.css
│   │   ├── Header.css
│   │   ├── StatCard.css
│   │   ├── ProductCard.css
│   │   ├── OrderTable.css
│   │   ├── Login.css
│   │   ├── Dashboard.css
│   │   └── Products.css
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/urban-harvest-dashboard.git
   cd urban-harvest-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will open in your browser at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```
   Creates an optimized production build in the `build/` folder

## 🔐 Login Credentials

Use any email and password with 6+ characters:
- **Email**: admin@urbanharvest.com (or any email)
- **Password**: any password with 6+ characters

The "Remember Me" checkbox saves your email in localStorage.

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

Features:
- Collapsible sidebar on mobile
- Hamburger menu for navigation
- Responsive grid layouts
- Touch-friendly buttons and inputs
- Optimized table scrolling on small screens

## 🎨 UI/UX Features

### Color Scheme
- **Primary Green**: #27ae60 (for successful actions)
- **Dark Blue**: #2c3e50 (for headers and text)
- **Light Gray**: #f5f7fa (for backgrounds)
- **Red Accent**: #e74c3c (for warnings)
- **Yellow**: #f39c12 (for alerts)

### Animations & Interactions
- Smooth page transitions
- Hover effects on cards and buttons
- Loading states for forms
- Badge animations
- Float animations on product emojis
- Sidebar slide-in/out animations
- Button transformations on hover

### Component Highlights
- **Cards**: Elevated design with shadow on hover
- **Buttons**: Primary, secondary, outline, and icon variants
- **Forms**: Clean input fields with focus states
- **Tables**: Striped rows with hover effects
- **Badges**: Color-coded status indicators

## 📊 Redux State Management

### Auth Slice
```javascript
{
  isAuthenticated: boolean,
  user: {
    name, email, role, avatar, phone, joinDate
  },
  rememberMe: boolean
}
```

### Products Slice
```javascript
{
  products: [],
  filteredProducts: [],
  searchTerm: string,
  filterStatus: 'all' | 'Available' | 'Out of Stock'
}
```

## 🎯 Key Redux Actions

### Auth
- `login(user, email, rememberMe)` - Authenticate user
- `logout()` - Clear authentication
- `setRememberMe(boolean)` - Toggle remember me

### Products
- `searchProducts(term)` - Search products
- `filterByStatus(status)` - Filter by availability
- `addProduct(product)` - Add new product
- `deleteProduct(id)` - Remove product
- `updateProduct(product)` - Update product

## 💾 Data Persistence

- **Authentication**: Stored in localStorage
- **Email**: Saved when "Remember Me" is checked
- **Products**: Managed through Redux (mock data)
- **User Preferences**: Maintained during session

## 🐛 Debugging

### Redux DevTools
Install Redux DevTools extension for Chrome to inspect state:
- [Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools)

### Console Logs
Check browser console for any warnings or errors

### Common Issues
- **Blank page**: Check browser console for errors
- **Styles not loading**: Ensure CSS files are in `styles/` folder
- **Login not working**: Verify email format and password length
- **Products not displaying**: Check mockData.js is properly imported

## 📈 Future Enhancements

- [ ] Backend API integration
- [ ] Real authentication with JWT
- [ ] Database connectivity
- [ ] Advanced product filtering (price range, ratings)
- [ ] User profile editing
- [ ] Order management with status updates
- [ ] Analytics dashboard
- [ ] Dark mode theme
- [ ] Multi-language support
- [ ] Export reports to PDF/Excel

## 🔒 Security Notes

- Currently using mock authentication (for demo purposes)
- Passwords are NOT encrypted
- localStorage is not secure for sensitive data
- Replace with proper backend authentication for production

## 📝 Code Quality

- Clean, readable code with comments
- Consistent naming conventions
- Reusable component structure
- CSS organization with variables
- Proper error handling
- Form validation on client-side

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

- **Name**: [Your Name]
- **Email**: [your.email@example.com]
- **GitHub**: [Your GitHub Profile]

## 🙏 Acknowledgments

- React.js community
- Redux Toolkit documentation
- Font Awesome for icons inspiration
- Modern UI/UX design principles

## 📞 Support

For support, email support@urbanharvest.com or create an issue in the GitHub repository.

## 🎓 Learning Resources

- [React Documentation](https://reactjs.org)
- [Redux Toolkit Guide](https://redux-toolkit.js.org)
- [React Router Documentation](https://reactrouter.com)
- [CSS Grid & Flexbox](https://css-tricks.com)

---

**Happy Coding! 🚀**

Built with ❤️ for the Urban Harvest Platform
