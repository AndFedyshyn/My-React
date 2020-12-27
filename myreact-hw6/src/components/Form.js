import React, {useState} from 'react';
export default function Form() {
    const [name, setName] = useState('');

    return (
        <div>
            <form>
                <label>User Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)}/>
            </form>
            <br/>
            Name is: {name}
        </div>
    );
}