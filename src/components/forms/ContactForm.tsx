// ============================================================
// FILE: src/components/forms/ContactForm.tsx
// ============================================================
'use client'

import { useState } from 'react'
import FormField from './FormField'
import Button from '@/components/ui/Button'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const industryOptions = [
  { value: 'eco-fuel', label: 'Eco-Friendly Fuel' },
  { value: 'oil-gas', label: 'Oil & Gas' },
  { value: 'construction', label: 'Construction Machinery' },
  { value: 'food', label: 'Food Ingredients' },
  { value: 'renewable', label: 'Renewable Energy' },
  { value: 'automotive', label: 'Automotive Parts' },
  { value: 'general', label: 'General Trading' },
  { value: 'other', label: 'Other' },
]

const productOptions = [
  { value: 'charcoal', label: 'Sawdust Briquette Charcoal' },
  { value: 'petroleum', label: 'Petroleum Products' },
  { value: 'equipment', label: 'Construction Equipment' },
  { value: 'food-materials', label: 'Food Raw Materials' },
  { value: 'solar', label: 'Solar & Renewable Energy' },
  { value: 'auto-parts', label: 'Automotive Parts' },
  { value: 'cif-lc', label: 'CIF / L/C Trade' },
  { value: 'logistics', label: 'Procurement & Logistics' },
  { value: 'private-label', label: 'Private Label Development' },
  { value: 'other', label: 'Other' },
]

const countryOptions = [
  { value: 'ae', label: 'United Arab Emirates' },
  { value: 'sa', label: 'Saudi Arabia' },
  { value: 'kw', label: 'Kuwait' },
  { value: 'qa', label: 'Qatar' },
  { value: 'bh', label: 'Bahrain' },
  { value: 'om', label: 'Oman' },
  { value: 'eg', label: 'Egypt' },
  { value: 'jo', label: 'Jordan' },
  { value: 'lb', label: 'Lebanon' },
  { value: 'iq', label: 'Iraq' },
  { value: 'pk', label: 'Pakistan' },
  { value: 'in', label: 'India' },
  { value: 'gb', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'other', label: 'Other' },
]

interface FormState {
  fullName: string
  company: string
  country: string
  email: string
  phone: string
  industry: string
  product: string
  message: string
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState<FormState>({
    fullName: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    industry: '',
    product: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Replace with your API endpoint or form service (e.g., Formspree, Resend)
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div
        role="status"
        className="bg-green-50 border border-green-200 rounded-xl p-10 text-center"
      >
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <span className="text-green-600 text-2xl" aria-hidden="true">✓</span>
        </div>
        <p className="text-green-700 font-semibold text-xl mb-2">
          Enquiry Sent Successfully!
        </p>
        <p className="text-green-600 text-sm">
          Our team will respond within 24 hours. Arabic and English support available.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          id="fullName"
          label="Full Name"
          required
          autoComplete="name"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Your full name"
        />
        <FormField
          id="company"
          label="Company Name"
          required
          autoComplete="organization"
          value={form.company}
          onChange={handleChange}
          placeholder="Your company"
        />
      </div>

      <FormField
        id="country"
        label="Country"
        required
        options={countryOptions}
        value={form.country}
        onChange={handleChange}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          id="email"
          label="Email Address"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@company.com"
        />
        <FormField
          id="phone"
          label="Phone Number"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="+971 XX XXX XXXX"
        />
      </div>

      <FormField
        id="industry"
        label="Industry / Sector"
        required
        options={industryOptions}
        value={form.industry}
        onChange={handleChange}
      />

      <FormField
        id="product"
        label="Product / Service Interest"
        required
        options={productOptions}
        value={form.product}
        onChange={handleChange}
      />

      <FormField
        id="message"
        label="Message / Requirements"
        rows={5}
        required
        placeholder="Describe your requirements, quantities, specifications, or any specific questions..."
        value={form.message}
        onChange={handleChange}
      />

      {status === 'error' && (
        <div
          role="alert"
          className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-4"
        >
          Something went wrong. Please try again or contact us directly at{' '}
          <a
            href="mailto:info@globalhightrend.com"
            className="font-semibold underline"
          >
            info@globalhightrend.com
          </a>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === 'sending'}
        className="w-full sm:w-auto"
      >
        {status === 'sending' ? 'Sending Enquiry...' : 'Send Enquiry'}
      </Button>
    </form>
  )
}
