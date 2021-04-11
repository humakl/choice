import cf from './formsControls.module..css';

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={cf.error}>
      <div>
        <textarea {...input} {...props} />
      </div>
      <div>
        {hasError && <span id='error-span'>{meta.error}</span>}
      </div>
    </div>
  )
}

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={cf.error}>
      <div>
        <input {...input} {...props} />
      </div>
      <div>
        {hasError && <span id='error-span'>{meta.error}</span>}
      </div>
    </div>
  )
}