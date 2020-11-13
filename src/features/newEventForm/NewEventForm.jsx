import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectFormData } from './newEventFormData'
import Title from './title/Title'
import Description from './description/Description'
import Category from './category/Category'
import Payment from './payment/Payment'
import Reward from './reward/Reward'
import Coordinator from './coordinator/Coordinator'
import Duration from './duration/Duration'
import Startson from './startson/Startson'
import clsx from 'clsx'
import styles from './NewEventForm.module.scss'

const NewEventForm = () => {
	const [showErrors, setShowErrors] = useState(false)
	const [success, setSuccess] = useState(false)
	const formData = useSelector(selectFormData)

	const handleInvalid = () => {
		setShowErrors(true)
	}
	const handleSubmit = (event) => {
		setShowErrors(true)
		event.preventDefault()
		if (!event.target.checkValidity()) {
			return false
		}
		console.log(formData)
		setSuccess(true)
	}
	return (
		<>
			<header className={styles.header}>
				<h1>New event</h1>
			</header>
			{success ? (
				<div className={styles.form}>
					<div className={clsx(styles.section, styles.success)}>
						<h2>Success</h2>
						<div>Event has been created.</div>
					</div>
				</div>
			) : (
				<form
					onSubmit={handleSubmit}
					className={clsx(
						styles.form,
						showErrors && styles.showErrors
					)}
					onInvalid={handleInvalid}
					// noValidate
					autoComplete="off"
				>
					<div className={styles.section}>
						<h2>About</h2>
						<Title />
						<Description />
						<Category />
						<Payment />
						<Reward />
					</div>
					<div className={styles.section}>
						<h2>Coordinator</h2>
						<Coordinator />
					</div>
					<div className={styles.section}>
						<h2>When</h2>
						<Startson />
						<Duration />
					</div>
					<div className={styles.submit}>
						<button type="submit">Publish event</button>
					</div>
				</form>
			)}
		</>
	)
}

export default NewEventForm
