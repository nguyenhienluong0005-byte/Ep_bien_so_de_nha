export const personal = {
  name: 'Tên Của Bạn',
  role: 'Front-end Developer',
  tagline: 'Xây sản phẩm web nhanh, mượt, tinh gọn.',
  location: 'TP. HCM, Việt Nam',
  email: 'you@example.com',
  avatar: '/profile.jpg',

  socials: [
    { name: 'GitHub', url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yourusername' },
    { name: 'Facebook', url: 'https://facebook.com/yourusername' },
  ],

  about: `Xin chào! Mình là lập trình viên front-end yêu cái đẹp, thích UX gọn gàng
và code sạch. Mục tiêu của mình là biến ý tưởng thành sản phẩm web nhanh và chất lượng.`,

  skills: [
    'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS',
    'Framer Motion', 'Node.js', 'REST API', 'Figma', 'Git/GitHub'
  ],

  projects: [
    {
      title: 'Landing Page SaaS',
      description: 'Trang giới thiệu sản phẩm SaaS với tỉ lệ chuyển đổi cao, tối ưu tốc độ.',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      image: '/projects/project-a.jpg',
      link: 'https://example.com',
      source: 'https://github.com/yourusername/saas-landing'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Bảng điều khiển số liệu với biểu đồ và filter động.',
      tech: ['React', 'Vite', 'Chart.js'],
      image: '/projects/project-b.jpg',
      link: 'https://example.com',
      source: 'https://github.com/yourusername/analytics-dashboard'
    },
    {
      title: 'E-commerce UI Kit',
      description: 'Bộ giao diện thương mại điện tử tái sử dụng, themeable.',
      tech: ['React', 'Tailwind'],
      image: '/projects/project-c.jpg',
      link: 'https://example.com',
      source: 'https://github.com/yourusername/ecommerce-ui-kit'
    }
  ]
}
