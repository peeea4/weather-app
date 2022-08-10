import { CurrentDate } from "@/components/CurrentDate";
import { CurrentInfoWrapper } from "@/components/CurrentInfo/styled";
import { Location } from "@/components/Location";

export const CurrentInfo = () => (
    <CurrentInfoWrapper>
        <CurrentDate />
        <Location />
    </CurrentInfoWrapper>
);
