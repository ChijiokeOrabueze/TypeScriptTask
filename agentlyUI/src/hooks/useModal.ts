import React, { useEffect, useState } from "react";


const useModal = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        const modal = document.getElementById('dark-modal');
        const closeModal = (e: MouseEvent) => {
            if (showModal) {
                if (e.target === modal) {
                    setShowModal(false);
                }
            }
        }

        document.addEventListener("click", closeModal);
    })

    return [showModal, setShowModal] as [boolean, typeof setShowModal];
}



export default useModal;