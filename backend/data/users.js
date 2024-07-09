import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Emmeline Xu',
        email: 'emme@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'David Brown',
        email: 'david@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    
];

export default users;