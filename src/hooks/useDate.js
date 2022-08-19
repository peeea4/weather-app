import { useEffect, useState } from "react";

export const useDate = () => {
    const getCurrentDate = () => {
        const fullDate = new Date();
        return {
            hours: fullDate.getHours() < 10 ? `0${fullDate.getHours()}` : fullDate.getHours(),
            minutes:
                fullDate.getMinutes() < 10 ? `0${fullDate.getMinutes()}` : fullDate.getMinutes(),
            dayOfWeek: fullDate.toLocaleString("en-US", { weekday: "long" }),
            dayOfWeekMobile: fullDate.toLocaleString("en-US", { weekday: "short" }),
            dayOfMonth: fullDate.getDate(),
            month: fullDate.toLocaleString("en-US", { month: "long" }),
            monthMobile: fullDate.toLocaleString("en-US", { month: "numeric" }),
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
