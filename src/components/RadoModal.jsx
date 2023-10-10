import React from 'react';

// props = [snimka_href_1,snimka_href_2, .... ] 
export default function RadoModal(props,) {
    const [isRadoModal,SetIsRadoModalOpen] = React.useState(false)
    const toggleVisibilityOfRadoModal = () => {
        SetIsRadoModalOpen(!isRadoModal)
    }

    return (
        <div>
            <button onClick={toggleVisibilityOfRadoModal} className=''>open RadoModal</button>
            {isRadoModal &&
                
                //first div is to taje up the whole current window and dim it
                <div className='fixed top-[10vh] left-0  h-[100vh] w-[100vw] backdrop-blur-sm flex justify-center'> 
                <div className=' border-red-800 bg-red-700 border-solid flex justify-center '>
                hi {props.index}
                        <button onClick={toggleVisibilityOfRadoModal}>X</button>
                </div>
                </div>}
        </div>
    )
}