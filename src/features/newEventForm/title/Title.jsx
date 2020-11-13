import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setValue, selectValue } from './titleSlice'
import styles from '../NewEventForm.module.scss'
import clsx from 'clsx'

const Title = () => {
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
				htmlFor="title"
				className={clsx(styles.label, error && styles.error)}
			>
				Title*
			</label>
			<input
				type="text"
				id="title"
				name="title"
				ref={ref}
				placeholder="Make it short and clear"
				required
				value={value}
				className={clsx(error && styles.error)}
				onChange={(e) => dispatch(setValue(e.target.value))}
			/>
		</div>
	)
}

export default Title
