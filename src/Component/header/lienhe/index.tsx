import React from 'react'

type Props = {}

const Lienhe = (props: Props) => {
    return (
        <div className="border flex px-4 py-2 rounded-lg mr-10 border-orange-500 hover:shadow-blue-500 ">
            <div className="icon mr-2">
                <i className="fa-solid fa-phone-volume"></i>
            </div>
            <div className="number">
                0123456789
            </div>
        </div>
    )
}

export default Lienhe