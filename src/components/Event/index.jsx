import { EventContent, EventTime, EventWrapper } from "@/components/Event/styled";

export const Event = ({ item, isLast }) => {
    const time = new Date(item.start.dateTime);

    return (
        <EventWrapper>
            <EventTime isLast={isLast}>
                {time.getHours()}:{time.getMinutes() ? time.getMinutes() : `${time.getMinutes()}0`}
            </EventTime>
            <EventContent>{item.summary}</EventContent>
        </EventWrapper>
    );
};
