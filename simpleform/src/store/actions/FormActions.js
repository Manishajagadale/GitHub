export const saveForm = (formdata) => {
    console.log('in action save form data===>', formdata)
    return {
        type: 'FORM_SAVE',
        payload: formdata,
    }

}