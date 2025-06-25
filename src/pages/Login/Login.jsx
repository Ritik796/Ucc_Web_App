import React, { useState } from 'react'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    return (
        <>
            <div>
                welcome to login page
            </div>
        </>
    )
}

export default Login
