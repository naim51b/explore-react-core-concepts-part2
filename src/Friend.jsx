/* eslint-disable react/prop-types */
export default function Friend({friend}){
    // eslint-disable-next-line react/prop-types
    const {name, email}= friend;
    return (
        <div className="box">
            <h4>Name:{name}</h4>
            <p>Email:{email}</p>
        </div>
    )
}