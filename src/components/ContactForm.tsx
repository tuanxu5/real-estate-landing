'use client';

import { useState, FormEvent } from 'react';
import SectionWrapper from './ui/SectionWrapper';
import AnimatedSection from './ui/AnimatedSection';
import Button from './ui/Button';
import { FormData, FormErrors } from '@/types';

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

  return (
    <SectionWrapper id="contact" background="white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Đăng ký nhận thông tin
          </h2>
          <p className="font-inter text-lg text-neutral-gray-800">
            Để lại thông tin để nhận báo giá và tư vấn chi tiết từ chúng tôi
          </p>
        </div>

        <AnimatedSection animation="fadeUp">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block font-inter font-medium text-primary mb-2">
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border-2 font-inter transition-colors focus:outline-none focus:ring-2 focus:ring-accent-gold ${
                  errors.name
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-neutral-gray-300 focus:border-accent-gold'
                }`}
                placeholder="Nhập họ và tên của bạn"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-500 font-inter">{errors.name}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block font-inter font-medium text-primary mb-2">
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border-2 font-inter transition-colors focus:outline-none focus:ring-2 focus:ring-accent-gold ${
                  errors.phone
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-neutral-gray-300 focus:border-accent-gold'
                }`}
                placeholder="Nhập số điện thoại"
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-500 font-inter">{errors.phone}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block font-inter font-medium text-primary mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border-2 font-inter transition-colors focus:outline-none focus:ring-2 focus:ring-accent-gold ${
                  errors.email
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-neutral-gray-300 focus:border-accent-gold'
                }`}
                placeholder="Nhập địa chỉ email"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500 font-inter">{errors.email}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Đang gửi...' : 'Nhận báo giá'}
            </Button>

            {/* Success Message */}
            {submitSuccess && (
              <div className="p-4 bg-green-50 border-2 border-green-500 rounded-xl text-center">
                <p className="font-inter text-green-700 font-medium">
                  ✓ Cảm ơn bạn! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
                </p>
              </div>
            )}
          </form>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
