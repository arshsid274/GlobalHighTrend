// ============================================================
// FILE: src/components/forms/FormField.tsx
// ============================================================
interface FormFieldProps {
  id: string
  label: string
  type?: string
  required?: boolean
  rows?: number
  autoComplete?: string
  value?: string
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void
  options?: { value: string; label: string }[]
  placeholder?: string
}

const inputClass =
  'w-full px-4 py-3 border border-brand-border rounded-lg bg-white text-brand-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-sm'

export default function FormField({
  id,
  label,
  type = 'text',
  required,
  rows,
  autoComplete,
  value,
  onChange,
  options,
  placeholder,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-brand-dark">
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {options ? (
        <select
          id={id}
          name={id}
          required={required}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLSelectElement>}
          className={inputClass}
          aria-label={label}
        >
          <option value="">Select {label}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : rows ? (
        <textarea
          id={id}
          name={id}
          required={required}
          rows={rows}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          placeholder={placeholder}
          className={inputClass}
          aria-label={label}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          placeholder={placeholder}
          className={inputClass}
          aria-label={label}
        />
      )}
    </div>
  )
}
