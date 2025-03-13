import "./input-field.css"

export const InputField = ({className, ...props} : React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={`input-field ${className}`}>
      <input {...props} className={`input-field__input`}/>
    </div>
  )
}
