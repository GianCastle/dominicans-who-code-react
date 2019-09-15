import { isOk } from '../ServicesUtils'

export const getDominicanCodersJson = () =>
    fetch(process.env.REACT_APP_JSON_GITHUB_URL)
        .then(isOk)
