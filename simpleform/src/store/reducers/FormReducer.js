const defaultState = {
    first_name: null,
    middle_name: null,
    last_name: null,
    phonenumber: null,
    email: null,
    time: null,
    height: null,
    weight: null,
    dob: null,
    zipcode: null,


}
const FormReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'FORM_SAVE':
            return { ...state, ...action.payload };
        default:
            return state
    }

}
export default FormReducer;