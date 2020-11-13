import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFee, selectFee, setPaid, selectPaid } from './paymentSlice'
import styles from '../NewEventForm.module.scss'
import styles2 from './Payment.module.scss'
import clsx from 'clsx'

const Payment = () => {
	const fee = useSelector(selectFee)
	const paid = useSelector(selectPaid)
	const dispatch = useDispatch()

	const ref = useRef(null)
	const [error, setError] = useState(true)

	useEffect(() => {
		setError(paid && !ref.current.validity.valid)
	}, [paid, fee])

	return (
		<div className={styles.group}>
			<div className={clsx(styles.label, error && styles.error)}>
				Payment
			</div>
			<div className={styles2.formControl}>
				<label className={styles2.radio}>
					<input
						type="radio"
						name="paid"
						checked={paid === false}
						value={false}
						onChange={() => dispatch(setPaid(false))}
					/>
					Free event
				</label>
				<label className={styles2.radio}>
					<input
						type="radio"
						name="paid"
						checked={paid === true}
						value={true}
						onChange={() => dispatch(setPaid(true))}
					/>
					Paid event
				</label>
				{paid && (
					<label className={styles2.fee}>
						<input
							id="fee"
							name="fee"
							ref={ref}
							type="number"
							min={0.01}
							step={0.01}
							required
							value={fee}
							onChange={(e) => dispatch(setFee(e.target.value))}
							placeholder="Fee"
							className={clsx(error && styles.error)}
						/>
						$
					</label>
				)}
			</div>
			{/* <input
				type="text"
				id="title"
				ref={ref}
				placeholder="Make it short and clear"
				required
				value={value}
				className={clsx(error && styles.error)}
				onChange={(e) => dispatch(setValue(e.target.value))}
			/> */}
		</div>
	)
}

export default Payment
