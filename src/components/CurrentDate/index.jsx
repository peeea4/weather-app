import { useDate } from "@/hooks/useDate.js";

import { DateWrapper, HeadingWrapper, ParagraphWrapper } from "./styled";

const days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
};

export const CurrentDate = () => {
    const { date } = useDate();

    return (
        <DateWrapper>
            <HeadingWrapper>{`${date.hours}:${date.minutes}`}</HeadingWrapper>
            <ParagraphWrapper>{`${days[date.dayOfWeek]}, ${date.dayOfMonth} ${
                date.month
            } ${date.year}`}</ParagraphWrapper>
        </DateWrapper>
    );
};
