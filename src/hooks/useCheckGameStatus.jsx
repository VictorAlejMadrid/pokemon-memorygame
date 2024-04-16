import { useEffect, useState } from "react";

export default function useCheckGameStatus(gameEnded, setNewPlayer) {
    const [finishVisibility, setFinishVisibility] = useState(false);

    useEffect(() => {
        if(gameEnded === true) {
            setFinishVisibility(true);
            setNewPlayer();
        } else {
            setFinishVisibility(false);
        }
    }, [gameEnded])

    return finishVisibility;
} 