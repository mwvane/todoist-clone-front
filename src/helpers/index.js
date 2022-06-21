export default {
    getErrors(obj) {
        if (obj.non_field_errors) {
            return obj.non_field_errors
        }
        try {
            const values = Object.values(obj)
            return values[0]
        } catch (e) {
            return null;
        }
    },

    getFirstError(non_field_errors) {
        if (non_field_errors instanceof Array) {
            return non_field_errors[0];
        }

        if (non_field_errors instanceof Object) {
            const values = Object.values(non_field_errors)
            return values[0];
        }
        return ''
    }
}