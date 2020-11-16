import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	setValue,
	selectValue,
	selectItems,
	selectItemsError,
	fetchItems,
} from './coordinatorSlice'
import styles from '../NewEventForm.module.scss'
import styles2 from './Coordinator.module.scss'
import clsx from 'clsx'

const Coordinator = () => {
	const value = useSelector(selectValue)
	const items = useSelector(selectItems)
	const itemsError = useSelector(selectItemsError)
	const dispatch = useDispatch()

	const ref = useRef(null)
	const [error, setError] = useState(true)

	useEffect(() => {
		dispatch(fetchItems())
	}, [dispatch])

	useEffect(() => {
		setError(items === null || !ref.current.validity.valid)
	}, [value, items])

	const email =
		items !== null && value !== ''
			? items.find((item) => item.id === value).email
			: ''

	return (
		<>
			<div className={styles.group}>
				<label
					htmlFor="coordinator"
					className={clsx(styles.label, error && styles.error)}
				>
					Responsible*
				</label>
				{items === null && !itemsError && (
					<div className={styles2.loading}>Loading...</div>
				)}
				{items === null && itemsError && (
					<div className={styles2.loading}>Load error...</div>
				)}
				<select
					id="coordinator"
					name="cordinator"
					ref={ref}
					required
					value={items === null ? '' : value}
					className={clsx(
						value === '' && styles2.notSelected,
						error && styles.error,
						items === null && styles2.notLoaded
					)}
					onChange={(e) => dispatch(setValue(e.target.value))}
				>
					<>
						{(items === null || value === '') && (
							<option value="" className={styles2.notSelected}>
								Select cordinator
							</option>
						)}
						{items !== null &&
							items.map((item) => (
								<option key={item.id} value={item.id}>
									{`${item.name} ${item.lastname}`}
								</option>
							))}
					</>
				</select>
			</div>
			<div className={styles.group}>
				<label htmlFor="email" className={clsx(styles.label)}>
					Email
				</label>
				<input
					type="text"
					id="email"
					name="email"
					placeholder="Email"
					readOnly
					value={email}
				/>
			</div>
		</>
	)
}

export default Coordinator
