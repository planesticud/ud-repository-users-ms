const rolesSchema = {
    'id': '/rolesSchema',
    'type': 'object',
    'properties': {
        'name': { 'type': 'string' },
        'description':  { 'type': 'string' },
        'action':  { 'type': 'string' }
    },
    'required': ['name','description', 'action']
};

const rolesSchemaUpdate = {
    'id': '/rolesSchema',
    'type': 'object',
    'properties': {
        'name': { 'type': 'string' },
        'description':  { 'type': 'string' },
        'action':  { 'type': 'string' }
    },
    'required': ['email']
};

module.exports = {
    rolesSchema,
    rolesSchemaUpdate
}
