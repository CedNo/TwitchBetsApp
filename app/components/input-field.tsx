export default function InputField(
    { className, value, onChange, placeholder, type = "text", name, autoComplete }:
    { className?: string, value: string, onChange: (value: string) => void, placeholder?: string, type?: string, name?: string, autoComplete?: string }
) {
    return (
        <input
            className={`p-2 border rounded-md w-full focus:outline-none focus:border-secondary-button-hover ${className}`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            name={name}
            autoComplete={autoComplete}
        />
    );
}