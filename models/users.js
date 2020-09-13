const usersSchema = {
    'id': '/usersSchema',
    'type': 'object',
    'properties': {
        'name': { 'type': 'string' },
        'email':  { 'type': 'string' },
        'rol':  { 'type': 'string' }
    },
    'required': ['name','email', 'rol']
};

const usersSchemaUpdate = {
    'id': '/usersSchema',
    'type': 'object',
    'properties': {
        'name': { 'type': 'string' },
        'email':  { 'type': 'string' },
        'rol':  { 'type': 'string' }
    },
    'required': ['email']
};

module.exports = {
    usersSchema,
    usersSchemaUpdate
}
