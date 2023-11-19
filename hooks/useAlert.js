import { useState } from 'react'

const useAlert = () => {
  const [alertDialogOpen, setAlertDialogOpen] = useState(false)
  const close = () => setAlertDialogOpen(false)
  const open = () => setAlertDialogOpen(true)
  return { alertDialogOpen, close, open }
}
export default useAlert
