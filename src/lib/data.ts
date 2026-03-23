import { Highlight, Amenity, GalleryImage } from '@/types';

/**
 * Project Highlights Data
 * Validates Requirements 4.1, 4.2, 4.3, 4.4
 */
export const highlights: Highlight[] = [
  {
    icon: '🏢',
    title: 'Vị trí đắc địa',
    description: 'Nằm tại trung tâm thành phố, kết nối mọi tiện ích trong bán kính 5km'
  },
  {
    icon: '🌳',
    title: 'Không gian xanh',
    description: 'Hơn 70% diện tích dành cho cây xanh và mặt nước, tạo môi trường sống trong lành'
  },
  {
    icon: '🏗️',
    title: 'Thiết kế hiện đại',
    description: 'Kiến trúc đương đại kết hợp hài hòa với thiên nhiên, tối ưu ánh sáng tự nhiên'
  },
  {
    icon: '🔒',
    title: 'An ninh 24/7',
    description: 'Hệ thống an ninh thông minh với camera AI và bảo vệ chuyên nghiệp'
  },
  {
    icon: '🚗',
    title: 'Giao thông thuận lợi',
    description: 'Kết nối nhanh chóng với sân bay, trung tâm thương mại và các khu vực quan trọng'
  },
  {
    icon: '⭐',
    title: 'Tiện ích đẳng cấp',
    description: 'Hệ thống tiện ích nội khu hoàn chỉnh phục vụ mọi nhu cầu của cư dân'
  }
];

/**
 * Amenities Data
 * Validates Requirements 4.1, 4.2, 4.3, 4.4
 */
export const amenities: Amenity[] = [
  {
    name: 'Hồ bơi vô cực',
    description: 'Hồ bơi ngoài trời với tầm nhìn panorama, thiết kế hiện đại và sang trọng',
    icon: '🏊'
  },
  {
    name: 'Công viên trung tâm',
    description: 'Công viên rộng 5 hecta với đường dạo bộ, khu vui chơi trẻ em và không gian thư giãn',
    icon: '🌳'
  },
  {
    name: 'Phòng gym & Spa',
    description: 'Phòng tập gym hiện đại với thiết bị cao cấp và khu spa thư giãn đẳng cấp 5 sao',
    icon: '💪'
  },
  {
    name: 'Khu thể thao',
    description: 'Sân tennis, sân bóng đá mini, sân cầu lông và khu tập yoga ngoài trời',
    icon: '⚽'
  },
  {
    name: 'Khu BBQ',
    description: 'Khu vực nướng ngoài trời với view đẹp, phục vụ các buổi tiệc gia đình và bạn bè',
    icon: '🍖'
  },
  {
    name: 'Khu vui chơi trẻ em',
    description: 'Khu vui chơi an toàn với thiết bị hiện đại, phù hợp cho mọi lứa tuổi',
    icon: '🎠'
  },
  {
    name: 'Co-working Space',
    description: 'Không gian làm việc chung hiện đại với wifi tốc độ cao và đầy đủ tiện nghi',
    icon: '💼'
  },
  {
    name: 'Rạp chiếu phim',
    description: 'Rạp chiếu phim mini với hệ thống âm thanh Dolby Atmos và ghế ngồi cao cấp',
    icon: '🎬'
  }
];

/**
 * Gallery Images Data
 * Validates Requirements 4.1, 4.2, 4.3, 4.4
 */
export const galleryImages: GalleryImage[] = [
  {
    src: 'https://placehold.co/1920x1080/0F3D3E/FFFFFF?text=Exterior+View',
    alt: 'Tổng quan dự án từ trên cao',
    width: 1920,
    height: 1080
  },
  {
    src: 'https://placehold.co/1920x1080/1A5456/FFFFFF?text=Infinity+Pool',
    alt: 'Hồ bơi vô cực với tầm nhìn panorama',
    width: 1920,
    height: 1080
  },
  {
    src: 'https://placehold.co/1920x1080/0F3D3E/FFFFFF?text=Luxury+Lobby',
    alt: 'Sảnh đón sang trọng với thiết kế hiện đại',
    width: 1920,
    height: 1080
  },
  {
    src: 'https://placehold.co/1920x1280/1A5456/FFFFFF?text=Central+Park',
    alt: 'Công viên trung tâm với cây xanh và hồ nước',
    width: 1920,
    height: 1280
  },
  {
    src: 'https://placehold.co/1920x1080/0F3D3E/FFFFFF?text=Modern+Gym',
    alt: 'Phòng gym với thiết bị hiện đại',
    width: 1920,
    height: 1080
  },
  {
    src: 'https://placehold.co/1920x1280/1A5456/FFFFFF?text=Living+Room',
    alt: 'Phòng khách căn hộ mẫu với view đẹp',
    width: 1920,
    height: 1280
  },
  {
    src: 'https://placehold.co/1920x1280/0F3D3E/FFFFFF?text=Master+Bedroom',
    alt: 'Phòng ngủ master với thiết kế sang trọng',
    width: 1920,
    height: 1280
  },
  {
    src: 'https://placehold.co/1920x1080/1A5456/FFFFFF?text=Rooftop+Garden',
    alt: 'Khu vườn trên mái với view thành phố',
    width: 1920,
    height: 1080
  },
  {
    src: 'https://placehold.co/1920x1080/0F3D3E/FFFFFF?text=Night+View',
    alt: 'Dự án về đêm với hệ thống chiếu sáng nghệ thuật',
    width: 1920,
    height: 1080
  }
];
