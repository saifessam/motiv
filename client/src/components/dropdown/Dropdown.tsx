import { useState } from 'react'
import SVGsProvider from '../../data/SVGsProvider'
import './Dropdown.css'

interface Props {
	data: string[]
}

const Dropdown = ({ data }: Props) => {
	const [expanded, setExpanded] = useState(false);
	const [selected, setSelected] = useState(data[0]);

	const onChange = (item: string) => {
		setSelected(item);
		setExpanded(false);
	}

	return (
		<ul className='dropdown'>
			<li className='dropdown-selected' onClick={() => setExpanded((prev) => !prev)}>
				{selected}
				<SVGsProvider.DownwardIcon />
			</li>
			<ul className={expanded ? "dropdown-options active" : "dropdown-options"}>
				{data.map((item) => <li className={selected === item ? 'selected' : undefined} onClick={() => onChange(item)}>{item}</li>)}
			</ul>
		</ul>
	)
}

export default Dropdown