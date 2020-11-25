// export const anothername = (name) => {
//     return {
//         type: 'CHANGE_NAME',
//         payload: name
//     }
// }

export const anothername = (setLoder) => {
    return (dispatch) => {
        setLoder(true)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res2 => {
                dispatch({
                    type: 'CHANGE_NAME',
                    payload: res2[2].name
                })
                setLoder(false)
            })
            .catch(err => alert(err.message))
    }
}