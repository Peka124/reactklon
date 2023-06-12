import { useState } from 'react'

function LoginForm(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    return (
        <div>
            <h1 className='mt-4'>Login forma</h1>
            <div className="login-div">
                <div className="login-fr">
                    <label>Username: </label>
                    <input type="text" className="form-control" value={username} onChange={handleUsername} />
                </div>
                <div className="login-fr">
                    <label>Password: </label>
                    <input type="password" className="form-control" value={password} onChange={handlePassword} />
                </div>
                <button type="button" onClick={() => props.prijaviSe(username, password)} id='btn' className='btn btn-primary'>Login</button>
            </div>
        </div>
    )
}

export default LoginForm;