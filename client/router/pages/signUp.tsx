import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import AuthenticationForm from '../../components/AuthenticationForm'
import { useAuthContext } from '../../context/auth'

const SignUp = () => {
  const { signUp, authLoading } = useAuthContext()
  const [details, setDetails] = useState<Email & Username & Password>({
    email: '',
    username: '',
    password: '',
  })

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setDetails({ ...details, [event.target.name]: event.target.value })
  }

  return <AuthenticationForm details={details} submit={() => signUp(details)} onChange={onChange} />
}

export default SignUp
