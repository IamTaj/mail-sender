"use client"

import { useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function Home() {
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		message: '',
	})
 
	const [form, setForm] = useState('')
 
	const onSubmitForm = async (e) => {
		e.preventDefault()
 
		if (!inputs.name && !inputs.email && !inputs.message) {
			setForm({ state: 'loading' })
			try {
				const res = await fetch(`api/contact`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(inputs),
				})
 
				const { error } = await res.json()
 
				if (error) {
					setForm({
						state: 'error',
						message: error,
					})
					return
				}
 
				setForm({
					state: 'success',
					message: 'Your message was sent successfully.',
				})
				setInputs({
					name: '',
					email: '',
					message: '',
				})
			} catch (error) {
				setForm({
					state: 'error',
					message: 'Something went wrong',
				})
			}
		}
	}

	return (
		<>
		<div className={styles.container} style={{display:'flex',justifyContent:'center',margin:'4vw 0vw'}}>
			<p>S</p>
			<form className={styles.form} onSubmit={(e) => onSubmitForm(e)}>
				<input type='submit' className={styles.button} />
				{form.state === 'loading' ? (
					<div>Sending....</div>
				) : form.state === 'error' ? (
					<div>{form.message}</div>
				) : (
					form.state === 'success' && <div>Sent successfully</div>
				)}
			</form>
		</div>
		</>
	)
}