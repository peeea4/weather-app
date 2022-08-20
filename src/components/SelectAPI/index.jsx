import { useDispatch, useSelector } from "react-redux";

import { setApiAction } from "@/actions/api";
import { SelectWrapper } from "@/components/SelectAPI/styled";

export const SelectAPI = () => {
    const dispatch = useDispatch();

    const currentApi = useSelector((state) => state.apiState.currentAPI);

    const chooseAPIHandle = (e) => {
        dispatch(setApiAction(e.target.value));
    };

    return (
        <SelectWrapper value={currentApi} onChange={chooseAPIHandle}>
            <option>Open Weather</option>
            <option>Storm Glass</option>
        </SelectWrapper>
    );
};
