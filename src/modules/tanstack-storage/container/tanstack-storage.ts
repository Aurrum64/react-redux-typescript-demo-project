import { Storage } from "../components";
import { compose } from "redux";
import withRestService from "../../../hoc/with-rest-service";

export default compose(withRestService())(Storage);
