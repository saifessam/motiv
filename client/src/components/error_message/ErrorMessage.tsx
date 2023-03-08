import SVGsProvider from '../../data/SVGsProvider'
import './ErrorMessage.css'

const ErrorMessage = () => {
	return (
		<div className='error-message'>
			<SVGsProvider.InfoIcon />
			<span>Error 404 | Page not found</span>
		</div>
	)
}

export default ErrorMessage