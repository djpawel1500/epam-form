import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setValue, selectValue } from './rewardSlice'
import styles from '../NewEventForm.module.scss'
import styles2 from './Reward.module.scss'
import clsx from 'clsx'

const Reward = () => {
	const value = useSelector(selectValue)
	const dispatch = useDispatch()

	// const ref = useRef(null)
	// const [error, setError] = useState(true)

	return (
		<div className={styles.group}>
			<div className={clsx(styles.label)}>Reward</div>
			<div className={styles2.formControl}>
				<input
					id="reward"
					name="reward"
					type="number"
					min={0}
					step={1}
					value={value}
					onChange={(e) => dispatch(setValue(e.target.value))}
					placeholder="Number"
				/>
				<label className={styles2.reward}>
					reward points for attendance
				</label>
			</div>
		</div>
	)
}

export default Reward
