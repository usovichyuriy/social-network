import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    let onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
    }

    return (
        <div>
            {!props.isOwner && editMode ?
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}  />
                </div> :
                <div>
                    <span onClick={activateEditMode}>{status || 'No status'}</span>
                </div>}
        </div>
    )
}
export default ProfileStatus;