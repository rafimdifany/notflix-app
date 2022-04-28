export const ButtonType = {
  BUTTON: 'button',
  SUBMIT: 'submit',
  RESET: 'reset'
}

export const ButtonTheme = {
  DEFAULT: 'default',
  ROUNDED: 'rounded'
}

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

const Button = (props) => {

  const {type, onClick, disabled, classProps, content} = props;

  return(
    <button type={type} onClick={onClick} disabled={disabled} className={classProps}>
      {content}
    </button>
  )
}

Button.defaultProps = {
  type: ButtonType.SUBMIT,
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.MEDIUM,
  onClick: () => {},
  className: '',
  content: ''
}

export default Button;