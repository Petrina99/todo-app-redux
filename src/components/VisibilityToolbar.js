import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import PropTypes from "prop-types";
import VISIBILITY_TYPE from "../const";
const { ALL, ACTIVE, COMPLETED } = VISIBILITY_TYPE;



function getButtonVariant(visibilityType, currentVisibilityType){
    return visibilityType === currentVisibilityType ? "dark" : "outline-dark";
}

function VisibilityToolbar({visibilityType, onVisibilityChange}){
    return(
        <ToggleButtonGroup type="radio" name="visibility" defaultValue={ALL} onChange={onVisibilityChange} className="mt-3">
            <ToggleButton value={ ALL } variant={getButtonVariant(visibilityType, ALL)}>
                All
            </ToggleButton>
            <ToggleButton value={ ACTIVE } variant={getButtonVariant(visibilityType, ACTIVE)}>
                Active
            </ToggleButton>
            <ToggleButton value={ COMPLETED } variant={getButtonVariant(visibilityType, COMPLETED)}>
                Completed
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

VisibilityToolbar.propTypes = {   
    visibilityType: PropTypes.string,
    onVisibilityChange: PropTypes.func
}
export default VisibilityToolbar;