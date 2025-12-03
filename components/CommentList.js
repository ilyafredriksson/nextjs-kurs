'use client'

import { useState } from 'react'

export default function CommentList({ initialComments }) {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState('')
  
  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), text: newComment }])
      setNewComment('')
    }
  }
  
  return (
    <div>
      <div className="space-y-2 mb-4">
        {comments.map((c) => (
          <p key={c.id} className="border p-2 rounded">
            {c.text}
          </p>
        ))}
      </div>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Skriv en kommentar..."
          className="border p-2 flex-1 rounded"
        />
        <button
          onClick={addComment}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Lägg till
        </button>
      </div>
    </div>
  )
}
