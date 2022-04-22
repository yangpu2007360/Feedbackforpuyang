import { createContext, useState, useEffect } from 'react'


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    // global states
    const [isLoading, SetIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you wan to delete')) {
            await fetch(`/feedback/${id}`, { method: 'DELETE' })

            setFeedback(feedback.filter((item) => item.id !== id))

        }
    }
    // another global state, that will be updated when we click the edit button

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    const fetchFeedback = async () => {

        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        SetIsLoading(false)

    }


    // set item to be updated 
    const handleEdit = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        }

        )
    }

    // update feedback item

    const updateFeedback = async (id, updItem) => {

        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()

        setFeedback(feedback.map((item) => item.id == id ? { ...item, ...data } : item))

    }
    // Add feedback

    const handleAdd = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })

        const newEntry = await response.json()
        setFeedback([newEntry, ...feedback])
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        handleAdd,
        handleEdit,
        feedbackEdit,
        updateFeedback,
        isLoading,

    }}>

        {children}


    </FeedbackContext.Provider>







}

export default FeedbackContext