import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {

    const [text, setText] = useState('')
    const [rating, setRating] = useState()
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const { handleAdd, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackEdit.edit === true) {

            setbtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)

        }
    }, [feedbackEdit])



    const handleChange = (e) => {

        if (text === '') {
            setMessage(null)
        } else if (text.trim().length < 10) {
            setMessage('please enter more than 10 characters.')

        } else {
            setbtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text: text,
                rating: rating
            }

            if (feedbackEdit.edit == true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }
            else {
                handleAdd(newFeedback)
            }

        }
        setText('')

    }
    return (
        <Card>

            <form onSubmit={handleSubmit}>

                <h2>How would you rate my resume? Please leave a comment or advice </h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className='input-group'>
                    <input onChange={handleChange} placeholder='Please leave a comment.' value={text} />
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}

            </form>

        </Card>
    )
}

export default FeedbackForm