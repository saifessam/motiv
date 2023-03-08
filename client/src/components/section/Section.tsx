import './Section.css'

interface Props {
	children?: any
	horizontal?: boolean
	vertical?: boolean
	grid?: boolean
	grid3?: boolean
}

const Section = (props: Props) => {
	const renderCalssNames = (): Array<String> => {
		let classNames: Array<String> = [];

		if (props.horizontal) classNames.push("horizontal");
		if (props.vertical) classNames.push("vertical");
		if (props.grid) classNames.push("grid");
		if (props.grid3) classNames.push("grid-3");

		return classNames;
	}

	return (
		<section className={renderCalssNames().join(' ')}>{props.children}</section>
	)
}

export default Section