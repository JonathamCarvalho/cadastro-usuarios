import PropTypes from 'prop-types';
import { ButtonComponent } from "./styles";

function Button ({onClick, children, theme, ...props}) {
    return <ButtonComponent type="button" onClick={onClick} {...props} theme={theme}>{children}</ButtonComponent>
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

export default Button;