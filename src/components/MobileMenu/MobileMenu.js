import "./MobileMenu.css";
import { primaryColor } from "../../assets/theme/theme";
import CloseIcon from "@mui/icons-material/Close";
const MobileMenu = (props) => {
  return (
    <div className={props.classes} style={{ backgroundColor: primaryColor }}>
      <div className="flex between align-start mobile-nav-wrapper">
        <div>{props.children}</div>
        <div
          onClick={props.closeMenu}
          className={props.hide ? "hide" : "closeIcon"}
        >
          <span>
            <CloseIcon sx={{ width: "1.2em", height: "1.2em" }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
