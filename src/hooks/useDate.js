import { useEffect, useState } from "react";

export const useDate = () => {
    const getCurrentDate = () => {
        const fullDate = new Date();
        return {
            hours: fullDate.getHours(),
            minutes:
                fullDate.getMinutes() < 10
                    ? `0${fullDate.getMinutes()}`
                    : fullDate.getMinutes(),
            dayOfWeek: fullDate.getDay(),
            dayOfMonth: fullDate.getDate(),
            month: fullDate.toLocaleString("en-US", { month: "long" }),
            year: fullDate.getFullYear(),
        };
    };

    const [date, setDate] = useState(() => getCurrentDate());

    useEffect(() => {
        setInterval(() => {
            setDate(getCurrentDate());
        }, 1000);
    }, []);

    return { date };
};
