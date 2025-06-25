import React, { useState } from 'react'
import { Eye, EyeOff, User, Lock, Mail } from 'lucide-react'
import styles from '../../assets/css/Login.module.css'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [userNameError, setUserNameError] = useState(false)
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = () => {
        console.log('Login attempt:', { userName, password })
    }

    return (
        <div className={styles.container}>
            <div className={styles.loginCard}>
                <div className={styles.header}>
                    <div className={styles.avatar}>
                        <User size={35} color="white" />
                    </div>
                </div>

                <div>
                    <div className={styles.formGroup}>
                        <div className={styles.label}>
                            Username 
                        </div>
                        <div className={styles.inputWrapper}>
                            <User
                                size={20}
                                className={styles.icon}
                            />
                            <input
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="Enter your username "
                                className={styles.input}
                            />
                        </div>
                    </div>

                    <div className={styles.formGroupPassword}>
                        <div className={styles.label}>
                            Password
                        </div>
                        <div className={styles.inputWrapper}>
                            <Lock
                                size={20}
                                className={styles.icon}
                            />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className={styles.inputPassword}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className={styles.passwordToggle}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className={styles.submitButton}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login