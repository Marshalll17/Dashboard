// src/InviteModal.js
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, TextField, Typography, Box } from '@mui/material'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const InviteModal = ({ onClose }) => {
  const { register, handleSubmit, watch } = useForm()
  const watchFields = watch(['numInvites', 'duration'])

  const calculatePrice = (numInvites, duration) => {
    return numInvites * duration * 10 // Example price calculation
  }

  const data = [
    { name: 'Invites', value: watchFields.numInvites || 0 },
    { name: 'Duration', value: watchFields.duration || 0 },
  ]

  const COLORS = ['#0088FE', '#00C49F']

  const onSubmit = (data) => {
    alert(`Invited ${data.numInvites} people for ${data.duration} days.`)
    onClose()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h6' gutterBottom>
        Invite to Event
      </Typography>
      <TextField
        label='Number of Invites'
        type='number'
        {...register('numInvites', { required: true })}
        fullWidth
        margin='normal'
      />
      <TextField
        label='Duration of Event (days)'
        type='number'
        {...register('duration', { required: true })}
        fullWidth
        margin='normal'
      />
      <Typography variant='h6' gutterBottom>
        Total Price: $
        {calculatePrice(watchFields.numInvites, watchFields.duration)}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            outerRadius={60}
            fill='#8884d8'
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </Box>
      <Button type='submit' variant='contained' color='primary' fullWidth>
        Submit
      </Button>
    </form>
  )
}

export default InviteModal
