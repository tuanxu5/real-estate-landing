'use client';

import { useState, FormEvent } from 'react';
import AnimatedSection from './ui/AnimatedSection';
import Button from './ui/Button';
import { FormData, FormErrors } from '@/types';
import { User, Phone, Mail, CheckCircle, Send, MapPin, Clock, MessageSquare } from 'lucide-react';

/**
 * ContactForm Component
 * 
 * Collects user information with validation for name, phone, and email.
 * Features inline validation feedback and submit handling.
 * 
 * Validates: Requirements 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8
 */
export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  /**
   * Validates form data according to requirements
   * Validates: Requirements 9.6, 9.7, 9.8
   */
  const validateForm = (data: FormData): FormErrors => {
    const validationErrors: FormErrors = {};

    // Name validation: required, min 2 characters
    if (!data.name || data.name.trim().length < 2) {
      validationErrors.name = 'Vui lòng nhập tên (tối thiểu 2 ký tự)';
    }

    // Phone validation: required, valid phone format (10-11 digits)
    if (!data.phone || !/^[0-9]{10,11}$/.test(data.phone.replace(/\s/g, ''))) {
      validationErrors.phone = 'Vui lòng nhập số điện thoại hợp lệ (10-11 số)';
    }

    // Email validation: required, valid email format
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      validationErrors.email = 'Vui lòng nhập email hợp lệ';
    }

    return validationErrors;
  };

  /**
   * Handles form submission with validation
   * Validates: Requirements 9.6, 9.7, 9.8
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear errors
    setErrors({});
    setIsSubmitting(true);

    // Simulate form submission (console.log for now)
    console.log('Form submitted:', formData);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Reset form and show success
    setFormData({ name: '', phone: '', email: '' });
    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Hotline',
      content: '1900 1234',
      link: 'tel:19001234'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@luxuryestate.vn',
      link: 'mailto:info@luxuryestate.vn'
    },
    {
      icon: MapPin,
      title: 'Địa chỉ',
      content: '123 Đường ABC, Quận 1, TP.HCM',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Giờ làm việc',
      content: 'T2 - T7: 8:00 - 18:00',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-gray-50 via-white to-neutral-gray-50 pt-48 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection animation="fadeUp">
          <div className="text-center mb-16">
            <h1 className="font-crimson text-5xl md:text-6xl font-bold text-primary mb-6">
              Đăng ký nhận thông tin
            </h1>
            <p className="font-exo text-lg text-neutral-gray-600 max-w-2xl mx-auto">
              Để lại thông tin để nhận báo giá và tư vấn chi tiết từ đội ngũ chuyên gia của chúng tôi
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <AnimatedSection animation="fadeUp">
              <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 shadow-2xl">
                <h3 className="font-crimson text-3xl font-bold mb-4">
                  Liên hệ với chúng tôi
                </h3>
                <p className="font-exo text-neutral-gray-100 mb-8">
                  Đội ngũ tư vấn chuyên nghiệp sẵn sàng hỗ trợ bạn 24/7
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.link}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-full bg-accent-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-exo font-semibold text-accent-gold mb-1">
                            {item.title}
                          </p>
                          <p className="font-exo text-white">
                            {item.content}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Benefits */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-crimson text-xl font-bold mb-4">
                    Lợi ích khi đăng ký
                  </h4>
                  <ul className="space-y-3 font-exo">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0" />
                      <span>Nhận báo giá chi tiết và ưu đãi đặc biệt</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0" />
                      <span>Tư vấn miễn phí từ chuyên gia</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0" />
                      <span>Cập nhật tiến độ dự án thường xuyên</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0" />
                      <span>Ưu tiên xem nhà mẫu trực tiếp</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <AnimatedSection animation="fadeUp">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-accent-gold" />
                </div>
                <div>
                  <h3 className="font-crimson text-2xl font-bold text-primary">
                    Thông tin của bạn
                  </h3>
                  <p className="font-exo text-sm text-neutral-gray-600">
                    Vui lòng điền đầy đủ thông tin
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block font-exo font-semibold text-primary mb-2">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray-400" />
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 font-exo transition-all focus:outline-none focus:ring-2 focus:ring-accent-gold/50 ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-neutral-gray-200 focus:border-accent-gold'
                      }`}
                      placeholder="Nhập họ và tên của bạn"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500 font-exo flex items-center gap-1">
                      <span>⚠</span> {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block font-exo font-semibold text-primary mb-2">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 font-exo transition-all focus:outline-none focus:ring-2 focus:ring-accent-gold/50 ${
                        errors.phone
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-neutral-gray-200 focus:border-accent-gold'
                      }`}
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-500 font-exo flex items-center gap-1">
                      <span>⚠</span> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block font-exo font-semibold text-primary mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray-400" />
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 font-exo transition-all focus:outline-none focus:ring-2 focus:ring-accent-gold/50 ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-neutral-gray-200 focus:border-accent-gold'
                      }`}
                      placeholder="Nhập địa chỉ email"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500 font-exo flex items-center gap-1">
                      <span>⚠</span> {errors.email}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  className="w-full"
                  icon
                >
                  {isSubmitting ? 'Đang gửi...' : 'Gửi thông tin'}
                </Button>

                {/* Success Message */}
                {submitSuccess && (
                  <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-xl">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="font-exo text-green-700 font-semibold">
                          Đăng ký thành công!
                        </p>
                        <p className="font-exo text-sm text-green-600 mt-1">
                          Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Privacy Note */}
                <p className="text-xs text-neutral-gray-500 font-exo text-center">
                  Thông tin của bạn được bảo mật theo chính sách bảo mật của chúng tôi
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
