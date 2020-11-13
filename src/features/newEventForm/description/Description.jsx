import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setValue, selectValue } from './descriptionSlice'
import styles from '../NewEventForm.module.scss'
import { formControl } from './Description.module.scss'
import clsx from 'clsx'

const MAX_LENGTH = 140

const Description = () => {
	const value = useSelector(selectValue)
	const dispatch = useDispatch()

	const ref = useRef(null)
	const [error, setError] = useState(true)

	useEffect(() => {
		setError(!ref.current.validity.valid)
	}, [value])

	return (
		<div className={styles.group}>
			<label
				htmlFor="description"
				className={clsx(styles.label, error && styles.error)}
			>
				Description*
			</label>
			<div className={formControl}>
				<textarea
					id="description"
					name="description"
					ref={ref}
					placeholder="Write about your event, be creative"
					required
					value={value}
					maxLength={MAX_LENGTH}
					className={clsx(error && styles.error)}
					onChange={(e) => dispatch(setValue(e.target.value))}
				/>
				<small>{`${value.length}/${MAX_LENGTH}`}</small>
			</div>
		</div>
	)
}

export default Description
