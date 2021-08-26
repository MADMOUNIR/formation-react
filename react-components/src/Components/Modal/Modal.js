import React, { useState } from 'react'
import "./Modal.css"

export default function Modal() {

    const [modal, setModal] = useState(false)
    function showModal() {
        setModal(true);
    }
    function HideModal() {
        setModal(false);
    }

    return (
        <>
            <button onClick={showModal}>Open Modal</button>
            {modal &&
                <div className="overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Hello Modal</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum in explicabo, numquam natus quo enim.
                                Harum ad ipsum ipsam reiciendis consequatur animi expedita nam facilis officiis. Quod minus adipisci quia, praesentium facilis dolores aspernatur perspiciatis, nemo similique delectus atque officia. Debitis,
                                repellendus commodi veniam facilis laboriosam excepturi eligendi itaque enim.</p>
                            <button onClick={HideModal} className="close-modal">Close</button>
                        </div>
                    </div>

                </div>
            }

        </>
    )
}
