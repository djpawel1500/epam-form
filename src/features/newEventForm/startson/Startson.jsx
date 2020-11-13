import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setDate, selectDate, setTime, selectTime } from './startsonSlice'
import styles from '../NewEventForm.module.scss'
import styles2 from './Startson.module.scss'
import clsx from 'clsx'

const Startson = () => {
	const date = useSelector(selectDate)
	const time = useSelector(selectTime)
	const dispatch = useDispatch()

	const dateRef = useRef(null)
	const [dateError, setDateError] = useState(true)
	const timeRef = useRef(null)
	const [timeError, setTimeError] = useState(true)

	useEffect(() => {
		setDateError(!dateRef.current.validity.valid)
	}, [date])
	useEffect(() => {
		setTimeError(!timeRef.current.validity.valid)
	}, [time])

	return (
		<div className={styles.group}>
			<label
				htmlFor="date"
				className={clsx(
					styles.label,
					(dateError || timeError) && styles.error
				)}
			>
				Starts on*
			</label>
			<div className={styles2.formControl}>
				<input
					id="date"
					ref={dateRef}
					name="date"
					type="date"
					value={date}
					onChange={(e) => dispatch(setDate(e.target.value))}
					className={clsx(dateError && styles.error)}
					required
				/>
				<label>
					at
					<input
						id="time"
						ref={timeRef}
						name="time"
						type="time"
						value={time}
						onChange={(e) => dispatch(setTime(e.target.value))}
						className={clsx(timeError && styles.error)}
						required
					/>
				</label>
			</div>
		</div>
	)
}

export default Startson
