import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	setValue,
	selectValue,
	selectItems,
	selectItemsError,
	fetchItems,
} from './categorySlice'
import styles from '../NewEventForm.module.scss'
import styles2 from './Category.module.scss'
import clsx from 'clsx'

const Category = () => {
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

	return (
		<div className={styles.group}>
			<label
				htmlFor="category"
				className={clsx(styles.label, error && styles.error)}
			>
				Category
			</label>
			{items === null && !itemsError && (
				<div className={styles2.loading}>Loading...</div>
			)}
			{items === null && itemsError && (
				<div className={styles2.loading}>Load error...</div>
			)}
			<select
				id="category"
				name="category"
				ref={ref}
				placeholder="Select category"
				required
				value={items === null ? '' : value}
				className={clsx(
					!(value >= 0) && styles2.notSelected,
					items === null && styles2.notLoaded
				)}
				onChange={(e) => dispatch(setValue(e.target.value))}
			>
				{items === null ? (
					<option value=""></option>
				) : (
					<>
						<option value={-1} className={styles2.notSelected}>
							Select category
						</option>
						{items.map((item) => (
							<option key={item.id} value={item.id}>
								{item.name}
							</option>
						))}
					</>
				)}
			</select>
		</div>
	)
}

export default Category
