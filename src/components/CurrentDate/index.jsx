import {
    DateWrapper,
    HeadingWrapper,
    ParagraphWrapper,
    ParagraphWrapperMobile,
} from "@/components/CurrentDate/styled";
import { useDate } from "@/hooks/useDate.js";

export const CurrentDate = () => {
    const { date } = useDate();

    return (
        <>
            <DateWrapper>
                <HeadingWrapper>{`${date.hours}:${date.minutes}`}</HeadingWrapper>
                <ParagraphWrapper>{`${date.dayOfWeek}, ${date.dayOfMonth} ${date.month} ${date.year}`}</ParagraphWrapper>
                <ParagraphWrapperMobile>{`${date.dayOfWeekMobile}, ${date.dayOfMonth}.${
                    date.monthMobile.toString().length === 1
                        ? `0${date.monthMobile}`
                        : date.monthMobile
                } ${date.year}`}</ParagraphWrapperMobile>
            </DateWrapper>
        </>
    );
};
