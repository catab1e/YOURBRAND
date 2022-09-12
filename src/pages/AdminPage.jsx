import React from 'react';
import "../styles/admin.css"


const AdminPage = () => {
    return (
        <div className="admin--box">
            <div className='admin--box__inner'>
                <div className='inputsBox'>
                    <input className='admin--input' type="text" />
                    <input className='admin--input' type="img" />
                    <input className='admin--input' type="password" />
                    <input type="file" />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;