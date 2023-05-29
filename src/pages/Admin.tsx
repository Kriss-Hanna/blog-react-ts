import React from 'react'

function Admin() {
  return (
    <div>
        <h2>Admin</h2>
        <form action="/admin" method="post">
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            
        </form>
    </div>
  )
}

export default Admin