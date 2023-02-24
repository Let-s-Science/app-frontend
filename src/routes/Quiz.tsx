import React, { useState } from 'react'
import { useClient } from '../hooks/useClient'

function Quiz() {
    
    let client = useClient();

    const getQuiz = () => {
        client.quiz.getQuiz
    }

    console.log(getQuiz())
  return (
    <div>Quiz</div>
    
  )
}

export default Quiz