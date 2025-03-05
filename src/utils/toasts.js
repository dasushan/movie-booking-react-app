import {toast} from 'react-toastify'

const success = ({position, message}) => {
    toast.success(message, {
        position : position
    })
}

const info = ({position, message}) => {
    toast.info(message, {
        position : position
    })
}

const error = ({position, message}) => {
    toast.error(message, {
        position: position
    })
}
export {success, info, error}
