import cf from './formsControls.module.css';

const FormControl = ({ input, meta, children, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={cf.error}>
      <div>
        {props.children}
      </div>
      <div>
        {hasError && <span id='error-span'>{meta.error}</span>}
      </div>
    </div>
  )
}

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
