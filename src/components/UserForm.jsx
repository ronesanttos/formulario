import React from 'react'

const UserForm = ({data,upadetedFiel}) => {
    return (
        <div>
            <div className="form-control">
                <label htmlFor="name">Nome:</label>
                <input type="text" name="nome" id="nome" placeholder='Digite seu nome' required value={data.name || ""} onChange={(e) => upadetedFiel("name", e.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor="email">E-mail:</label>
                <input type="email" name="email" id="email" placeholder='Digite seu e-mail' required value={data.email || ""} onChange={(e) => upadetedFiel("email", e.target.value)}/>
            </div>
        </div>
    )
}

export default UserForm
