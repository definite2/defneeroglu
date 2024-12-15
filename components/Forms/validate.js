export const validate = (fieldValues) => {
    let temp = {}
    if ('name' in fieldValues) temp.name = fieldValues.name ? '' : 'Your name should not be empty'
    if ('email' in fieldValues) {
        if (!fieldValues.email) temp.email = 'Your email should not be empty'
        else if (!/$^|.+@.+..+/.test(fieldValues.email)) {
            temp.email = 'Please provide a valid email address'
        } else {
            temp.email = ''
        }
    }
    if ('message' in fieldValues) {
        if (!fieldValues.message) {
            temp.message = 'Your message should not be empty'
        } else if (fieldValues.message.length > 1001) {
            temp.message = 'Too long message!'
        } else {
            temp.message = ''
        }
    }
    return { isValid: Object.values(temp).every(x => x === ''), error: temp }
}