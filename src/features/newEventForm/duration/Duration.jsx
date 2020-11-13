import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setValue, selectValue } from './durationSlice'
import styles from '../NewEventForm.module.scss'
import styles2 from './Duration.module.scss'
import clsx from 'clsx'

const Duration = () => {
	const value = useSelector(selectValue)
	const dispatch = useDispatch()

	// const ref = useRef(null)
	// const [error, setError] = useState(true)

	return (
		<div className={styles.group}>
			<label htmlFor="duration" className={clsx(styles.label)}>
				Duration
			</label>
			<div className={styles2.formControl}>
				<input
					id="duration"
					name="duration"
					type="number"
					min={0}
					step={0.5}
					value={value}
					onChange={(e) => dispatch(setValue(e.target.value))}
					placeholder="Number"
				/>
				<label className={styles2.duration}>
					{value === 1 ? 'hour' : 'hours'}
				</label>
			</div>
		</div>
	)
}

export default Duration
