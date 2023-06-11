export default function input({
    type,
    className,
    placeholder,
    name,
    id,
    required,
}: any) {
    return (
        <div className="form__group field">
            <input
                type={type}
                placeholder={placeholder}
                id={id}
                name={name}
                required={required}
            />
            <label htmlFor="name" className="form__label">
                Name
            </label>
        </div>
    );
}
