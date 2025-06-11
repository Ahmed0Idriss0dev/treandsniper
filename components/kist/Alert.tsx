import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Terminal } from 'lucide-react'
const Error = () => {
  return (
   <Alert variant="destructive">
  <AlertCircle />
  <AlertTitle>error!</AlertTitle>
  <AlertDescription>
    Please inter your licences key
  </AlertDescription>
</Alert>
  )
}

export default Error
